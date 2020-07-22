import styledComponents from 'styled-components';

interface IMessageStyle {
  fontSize: string;
  fontFamily: string;
  color: string;
}

export type IMessageProps = IMessageStyle & { message: string };

export const Message = styledComponents.p<IMessageStyle>`
    font-family: ${(props) => props.fontFamily || 'sans-serif'};
    font-size: ${(props) => props.fontSize || '1rem'};
    color: ${(props) => props.color || '#000'};
    font-weight: 400;
    margin: 1rem auto;
    text-align: center;
`;
