import { Children, ReactElement } from "react";
import { TextLink } from "../smart-link";
import { ImageRenderer } from "./image-renderer";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const youtubeHostNames = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'www.youtu.be',
]

function getYoutubeId(url: string){
  const urlParts = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  
  if(urlParts[2] === undefined) {
    return urlParts;
  }
  
  return urlParts[2].split(/[^0-9a-z_\-]/i)[0];
}

export const LinkRenderer = (imageRenderer: ReturnType<typeof ImageRenderer>): React.FC<Props> => (props) => {
  const { href, children } = props;
  let hostName = '';
  try {
    hostName = href ? new URL(href).hostname : '';
  } finally {
    if (!href) {
      throw Error("Missing href");
    }

    let child: ReactElement | null = null;
    try {
      child = Children.toArray(children)[0] as ReactElement;
    } catch {
      child = null;
    }
    const isWrappingImage = child !== null && (child.type === imageRenderer || child.type === 'img');

    if (youtubeHostNames.includes(hostName) && isWrappingImage) {

      const videoId = getYoutubeId(href);

      return (
        <iframe
          width="100%"
          height="350"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return <TextLink {...props} />
    }
  }
};
