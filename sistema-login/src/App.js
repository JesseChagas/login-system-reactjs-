import React from 'react'
import GlobalStyle from './styles/global'
import RoutesApps from './routes';
import { AuthProvider } from './contexts/auth';

const App = () => {
  return (
    <AuthProvider>
        <RoutesApps/>
        <GlobalStyle/>
    </AuthProvider>
  );
};

export default RoutesApps;