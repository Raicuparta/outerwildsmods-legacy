import { useAmp } from 'next/amp';

import { Wrapper } from './footer.styles';

export const Footer = () => {
  const isAmp = useAmp();
  const pageDescriptor = isAmp ? 'AMP page' : 'Page';
  return (
    <Wrapper>
      <p>
        This page isn't official, nor affiliated with Mobius Digital, or anyone
        really.
      </p>
      <p>
        {pageDescriptor} last updated on {new Date().toUTCString()}
      </p>
    </Wrapper>
  );
};
