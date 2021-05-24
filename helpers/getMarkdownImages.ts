import fs, { promises as fsp } from 'fs';
import path from 'path';
import { Parser } from 'commonmark';

export type ImageMap = Record<string, string>;

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

  if (!response.ok) {
    return imageUrl;
  }

  const image = await response.arrayBuffer();
  const filePath = `/images/external/${modName}/${imageUrl}`;
  const publicPath = `public${filePath}`;

  const publicDirectory = path.dirname(publicPath);
  if (!fs.existsSync(publicDirectory)) {
    await fsp.mkdir(publicDirectory, { recursive: true });
  }

  await fsp.writeFile(getPath(publicPath), Buffer.from(image));

  return filePath;
};

export const downloadAllImages = async (
  baseUrl: string,
  modName: string,
  imageUrls: string[]
) => {
  const imageMap: ImageMap = {};

  for (let url of imageUrls) {
    imageMap[url] = await downloadImage(baseUrl, modName, url);
  }

  return imageMap;
};
