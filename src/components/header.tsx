import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Container,
  Content,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
} from 'bloomer';
import { Link } from 'gatsby';
import React from 'react';

import Logo from '../assets/images/logo.svg';

const NavbarGithubItem = ({ hideOnDesktop = false }) => {
  const isHidden = hideOnDesktop ? 'desktop' : undefined;
  return (
    <NavbarItem
      href="https://github.com/latex-lsp/texlab"
      aria-label="GitHub"
      isHidden={isHidden}>
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </NavbarItem>
  );
};

interface NavbarLinkProps {
  to: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ to, children }) => (
  <Link className="navbar-item" to={to}>
    {children}
  </Link>
);

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
            <NavbarLink to="/">
              <img src={Logo} alt="TexLab" />
            </NavbarLink>
            <NavbarGithubItem hideOnDesktop={true} />
            <NavbarBurger isActive={isActive} onClick={this.handleClick} />
          </NavbarBrand>
          <NavbarMenu isActive={isActive} onClick={this.handleClick}>
            <NavbarStart>
              <NavbarLink to="/">Home</NavbarLink>
              <NavbarLink to="/docs">Docs</NavbarLink>
              <Content isHidden="desktop">
                <NavbarLink to="/#download">Download</NavbarLink>
              </Content>
            </NavbarStart>
            <NavbarEnd isHidden="touch">
              <NavbarGithubItem />
              <NavbarItem>
                <Link to="/#download">
                  <Button isColor="dark" isOutlined={true}>
                    Download
                  </Button>
                </Link>
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
