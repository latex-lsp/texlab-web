import { Footer } from 'bloomer';
import React from 'react';
import { Header } from './header';

import '../styles/main.scss';

export const Layout: React.FunctionComponent = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
