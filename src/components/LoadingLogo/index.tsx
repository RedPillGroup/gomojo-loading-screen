import * as React from 'react';
import { Logo } from './styles';

const LoadingLogo: React.FunctionComponent<{ logo: string }> = ({ logo }) => <Logo src={logo} alt="logo chargement" />;

export default LoadingLogo;
