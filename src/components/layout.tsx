import React from 'react';
import { Header } from './header';

import '../styles/main.scss';

export const Layout: React.FunctionComponent = props => {
  return (
    <>
      <Header />
      {props.children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};
