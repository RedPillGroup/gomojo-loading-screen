import * as React from 'react';
import Spinner from './components/Spinner';
import LoadingLogo from './components/LoadingLogo';
import LoadingMessage from './components/LoadingMessage';
import BackgroundContainer from './components/BackgroundContainer';
import OverlayContainer from './components/OverlayContainer';

export interface LoadingScreenProps {
  message: string;
  bgColor: string;
  color: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  bgImage: string;
  bgMessage: string;
  bgGradient: string;
  logo: string;
  isVisible: boolean;
  spinnerColor: string;
  landscapeGame: boolean;
  overlayOpacity: string;
}

const LoadingScreen: React.FunctionComponent<LoadingScreenProps> = ({
  message,
  bgColor,
  color,
  fontFamily,
  fontSize,
  bgImage,
  logo,
  isVisible,
  spinnerColor,
  landscapeGame,
  bgMessage,
  bgGradient,
  overlayOpacity
}) => (
  <BackgroundContainer
    backgroundColor={bgColor}
    backgroundGradient={bgGradient}
    backgroundImage={bgImage}
    isVisible={isVisible}
    landscapeGame={landscapeGame}
  >
    <OverlayContainer overlayOpacity={overlayOpacity} landscapeGame={landscapeGame} />
    <LoadingLogo logo={logo} />
    <LoadingMessage color={color} bgMessage={bgMessage} fontFamily={fontFamily} fontSize={fontSize} message={message} />
    <Spinner spinnerColor={spinnerColor} />
  </BackgroundContainer>
);

export default LoadingScreen;
