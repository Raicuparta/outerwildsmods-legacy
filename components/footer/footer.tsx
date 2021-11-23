import { Wrapper } from './footer.styles';

export const Footer = () => {
  return (
    <Wrapper>
      <p>
        This page isn't official, nor affiliated with Mobius Digital, or anyone
        really.
      </p>
      <p>Page last updated on {new Date().toUTCString()}</p>
    </Wrapper>
  );
};
