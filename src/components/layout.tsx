import { Container, Content, Footer } from 'bloomer';
import React from 'react';

import { GithubButton } from './githubButton';
import { Header } from './header';

import '../styles/main.scss';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer className="has-background-light">
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
              <a href="https://github.com/efoerster/texlab/blob/master/LICENSE">
                MIT license
              </a>
              .
            </p>
            <p>
              The website content is licensed under{' '}
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC ANS 4.0 license
              </a>
              .
            </p>
            <br />
            <GithubButton
              href="https://github.com/efoerster/texlab"
              icon="star"
              size="large"
              showCount={true}
              text="Star"
              ariaLabel="Star efoerster/texlab on GitHub"
            />
          </Content>
        </Container>
      </Footer>
    </>
  );
};
