import { resolveHref } from "next/dist/next-server/lib/router/router";
import { TextLink } from "../smart-link";

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

export const LinkRenderer: React.FC<Props> = (props) => {
  const { href } = props;
  let hostName = '';
  try {
    hostName = href ? new URL(href).hostname : '';
  } finally {
    if (!href) {
      return null;
    }

    if (youtubeHostNames.includes(hostName)) {

      const videoId = getYoutubeId(href);

      return (
        <iframe
          width="560"
          height="315"
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
