import styledComponents, { css } from 'styled-components';
import { isMobileOnly } from 'react-device-detect';

export interface IOverlay {
  overlayOpacity: string;
  landscapeGame: boolean;
}

export const Overlay = styledComponents.div<IOverlay>`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 2001;
  background-color: #000;
  opacity: ${(props) => props.overlayOpacity || '0'};

  @media all and (orientation: portrait) {
    ${(props) =>
      props.landscapeGame && isMobileOnly
        ? css`
            transform: rotate(90deg);
            transform-origin: bottom left;
            position: absolute;
            top: -100vw;
            left: 0;
            height: 100vw;
            width: 100vh;
          `
        : css``}
  }

`;