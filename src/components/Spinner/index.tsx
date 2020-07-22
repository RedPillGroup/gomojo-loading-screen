import * as React from 'react';
import { Spin } from './styles';

const Spinner: React.FunctionComponent<{ spinnerColor: string }> = ({ spinnerColor }) => (
    <Spin spinnerColor={spinnerColor} />
);

export default Spinner;
