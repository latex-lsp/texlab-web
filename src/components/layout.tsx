import React from 'react';
import { Header } from './header';

import '../styles/main.scss';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
