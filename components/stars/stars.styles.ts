import styled from 'styled-components';

const animationMovement = 200;

export const Wrapper = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: calc(100% + ${animationMovement}px);
  height: calc(100% + 20px);
  animation-duration: 30s;
  animation-name: starMovement;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  @keyframes starMovement {
    from {
      transform: rotateZ(-2deg) translateX(-${animationMovement}px);
    }

    to {
      transform: rotateZ(2deg) translateX(0);
    }
  }
`;
