import { useAmp } from 'next/amp';

import { Wrapper } from './footer.styles';

export const Footer = () => {
  const isAmp = useAmp();

  return isAmp ? null : (
    <Wrapper>
      <p>
        This page isn't official, nor affiliated with Mobius Digital, or anyone
        really.
      </p>
      <p>Page last updated on {new Date().toUTCString()}</p>
    </Wrapper>
  );
}
