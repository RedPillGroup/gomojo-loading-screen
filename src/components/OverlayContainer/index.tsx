import * as React from 'react';

import { Overlay, IOverlay } from './styles';

const OpacityContainer: React.FunctionComponent<IOverlay> = ({
  overlayOpacity,
  landscapeGame
}) => (
  <Overlay overlayOpacity={overlayOpacity} landscapeGame={landscapeGame} />
);

export default OpacityContainer;
