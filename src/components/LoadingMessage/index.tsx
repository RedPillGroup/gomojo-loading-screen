import * as React from 'react';
import { Message, IMessageProps } from './styles';

const LoadingMessage: React.FunctionComponent<IMessageProps> = ({ color, fontFamily, fontSize, message, bgMessage }) => (
  <Message bgMessage={bgMessage} color={color} fontFamily={fontFamily} fontSize={fontSize}>
    {message}
  </Message>
);

export default LoadingMessage;
