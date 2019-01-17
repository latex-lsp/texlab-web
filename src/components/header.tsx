import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Container,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
} from 'bloomer';
import React from 'react';

import Logo from '../images/logo.svg';

const NavbarGithubItem = ({ hideOnDesktop = false }) => {
  const isHidden = hideOnDesktop ? 'desktop' : undefined;
  return (
    <NavbarItem href="https://github.com/efoerster/texlab" isHidden={isHidden}>
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </NavbarItem>
  );
};

interface HeaderState {
  isCollapsed: boolean;
}

export class Header extends React.Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = { isCollapsed: true };
  }

  public render() {
    const isActive = !this.state.isCollapsed;
    return (
      <Navbar className="is-white has-shadow">
        <Container>
          <NavbarBrand>
            <NavbarItem href="/">
              <img src={Logo} alt="TexLab" />
            </NavbarItem>
            <NavbarGithubItem hideOnDesktop={true} />
            <NavbarBurger isActive={isActive} onClick={this.handleClick} />
          </NavbarBrand>
          <NavbarMenu isActive={isActive} onClick={this.handleClick}>
            <NavbarStart>
              <NavbarItem href="/">Home</NavbarItem>
              <NavbarItem href="/docs">Docs</NavbarItem>
            </NavbarStart>
            <NavbarEnd isHidden="touch">
              <NavbarGithubItem />
              <NavbarItem>
                <Button isColor="primary">Download</Button>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    );
  }

  private handleClick = () => {
    this.setState(state => ({ isCollapsed: !state.isCollapsed }));
  };
}
