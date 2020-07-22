import * as React from 'react';

import { Background, IBackground } from './styles';

const BackgroundContainer: React.FunctionComponent<IBackground> = ({
  backgroundColor,
  backgroundImage,
  isVisible,
  landscapeGame,
  children,
}) => (
  <Background
    backgroundColor={backgroundColor}
    backgroundImage={backgroundImage}
    isVisible={isVisible}
    landscapeGame={landscapeGame}
  >
    {children}
  </Background>
);

export default BackgroundContainer;
