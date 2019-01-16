import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Container,
  Navbar,
  NavbarBrand,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
} from 'bloomer';
import React from 'react';

import Logo from '../images/logo.svg';

export const Header: React.FunctionComponent = () => {
  return (
    <Navbar className="is-white has-shadow">
      <Container>
        <NavbarBrand>
          <NavbarItem href="/">
            <img src={Logo} alt="TexLab" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarStart>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/docs">Docs</NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem href="https://github.com/efoerster/texlab">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </NavbarItem>
            <NavbarItem>
              <Button isColor="primary">Download</Button>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Container>
    </Navbar>
  );
};
