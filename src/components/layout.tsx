import { Container, Content, Footer } from 'bloomer';
import React from 'react';
import GitHubButton from 'react-github-button';

import { Header } from './header';

import '../styles/main.scss';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer className="has-background-dark">
        <Container>
          <Content>
            <p>
              Made by
              <a href="https://github.com/efoerster/texlab/graphs/contributors">
                {' '}
                the TexLab contributors
              </a>
              .
            </p>
            <p />
          </Content>
          <Content isSize="small">
            <p>
              The source code is licensed under the{' '}
              <a target="https://github.com/efoerster/texlab/blob/master/LICENSE">
                MIT license
              </a>
              .
            </p>
            <p>
              The website content is licensed under{' '}
              <a target="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC ANS 4.0 license
              </a>
              .
            </p>
            <br />
            <GitHubButton
              type="stargazers"
              size="default"
              namespace="efoerster"
              repo="texlab"
            />
          </Content>
        </Container>
      </Footer>
    </>
  );
};
