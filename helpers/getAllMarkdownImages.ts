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

export const downloadImage = async (imageUrl: string) => {
  const response = await fetch(imageUrl);
  const image = await response.arrayBuffer();
  // console.log('image size', image.byteLength);
  const dir = 'public/images/external/';
  if (!fs.existsSync(dir)) {
    await fsp.mkdir(dir);
  }
  await fsp.writeFile(getPath(dir + 'IMAGE_TEST.png'), Buffer.from(image));
};
