import fs, { promises as fsp } from 'fs';
import path from 'path';
import { Parser } from 'commonmark';

const getPath = (relativePath: string) =>
  path.join(process.cwd(), relativePath);

export const getAllMarkdownImages = (markdown?: string): string[] => {
  if (!markdown) return [];

  const parsed = new Parser().parse(markdown);
  const walker = parsed.walker();
  let event;
  const nodeList = [];
  while ((event = walker.next())) {
    const node = event.node;
    if (node.type === 'image' && node.destination) {
      nodeList.push(node);
    }
  }
  const list = nodeList.map((node) => node.destination ?? '');
  const uniqueSrcList = Array.from(new Set(list));

  return uniqueSrcList;
};

export const downloadImage = async (
  baseUrl: string,
  modName: string,
  imageUrl: string
) => {
  const response = await fetch(`${baseUrl}/${imageUrl}`);
  const image = await response.arrayBuffer();
  const filePath = `public/images/external/${modName}/${imageUrl}`;

  const fileDirectory = path.dirname(filePath);
  if (!fs.existsSync(fileDirectory)) {
    await fsp.mkdir(fileDirectory, { recursive: true });
  }

  await fsp.writeFile(getPath(filePath), Buffer.from(image));

  return filePath;
};

export const downloadAllImages = async (
  baseUrl: string,
  modName: string,
  imageUrls: string[]
) => {
  const imageMap: Record<string, string> = {};

  for (let url of imageUrls) {
    imageMap[url] = await downloadImage(baseUrl, modName, url);
  }

  return imageMap;
};
