import { useEffect } from "react";

type Props = {
  id: string;
}

export const Analytics: React.FunctionComponent<Props> = ({ id }) => {
  useEffect(() => {
    //@ts-ignore
    window.dataLayer = window.dataLayer || [];
    //@ts-ignore
    function gtag(){dataLayer.push(arguments);}
    //@ts-ignore
    gtag('js', new Date());
    //@ts-ignore
    gtag('config', id);
  }, []);

  return <script
    async
    src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
  />
}
