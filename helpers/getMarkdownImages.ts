import { Parser } from 'commonmark';

export type ImageMap = Record<string, string | null>;

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
    return null;
  } else {
    return `${baseUrl}/${imageUrl}`;
  }
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
