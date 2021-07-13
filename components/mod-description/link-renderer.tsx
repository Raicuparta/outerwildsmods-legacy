import { useAmp } from "next/amp";
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
  const isAmp = useAmp();
  const { href, children } = props;

  const VideoFromImageLink = () => {
    if (!href) {
      return null;
    }
    try {
      const child = Children.toArray(children)[0] as ReactElement | null;
      if (!child) {
        return null;
      }
      const isWrappingImage = child.type === imageRenderer || child.type === 'img';
      const hostName = new URL(href).hostname;
      if (!youtubeHostNames.includes(hostName) || !isWrappingImage) {
        return null;
      }
    } catch {
      return null;
    }

    const youtubeId = getYoutubeId(href);

    return isAmp ? (
      <amp-youtube
        data-videoid={youtubeId}
        layout="responsive"
        width="480"
        height="270"
      />
    ) : (
      <iframe
        width="100%"
        height="350"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return VideoFromImageLink() || <TextLink {...props} />;
};
