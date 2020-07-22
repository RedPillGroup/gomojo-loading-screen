import styledComponents, { css } from 'styled-components';
import { isMobileOnly } from 'react-device-detect';

export interface IBackground {
  backgroundColor: string;
  backgroundImage: string;
  isVisible: boolean;
  landscapeGame: boolean;
}

export const Background = styledComponents.div<IBackground>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  z-index: 2000;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${(props) => props.backgroundColor};
  background-image: url(${(props) => props.backgroundImage});
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
