import styledComponents, { StyledFunction } from 'styled-components';

export const Spin = styledComponents.div<{ spinnerColor: string }>`
    border: 4px solid rgba(0, 0, 0, 0.55);
    border-top: 4px solid ${(props) => props.spinnerColor || 'rgb(237, 242, 247)'};
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    animation: spin 0.8s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
