import { useAmp } from 'next/amp';

export const AmpAnalytics: React.FunctionComponent<{ id: string }> = ({
  id,
}) => {
  const isAmp = useAmp();
  const json = JSON.stringify({
    vars: { gtag_id: id, config: { [id]: { groups: 'default' } } },
  });

  return isAmp ? (
    <amp-analytics type="gtag" data-credentials="include">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: json,
        }}
      />
    </amp-analytics>
  ) : null;
};
