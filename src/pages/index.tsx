import {
  Button,
  Column,
  Container,
  Hero,
  HeroBody,
  Image,
  Subtitle,
  Title,
} from 'bloomer';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

import Icon from '../images/icon.svg';

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`texlab`, `latex`, `lsp`, `language server`, `vscode`]}
    />
    <Hero isColor="info" isBold={false}>
      <HeroBody>
        <Container hasTextAlign="centered">
          <Column isOffset="1/3" isSize="1/3">
            <Image className="center-img" isSize="128x128" src={Icon} />
            <Title>TexLab</Title>
            <Subtitle>
              A cross-platform implementation of the Language Server Protocol
              for LaTeX.
            </Subtitle>
          </Column>
          <Button isColor="primary" isSize="large">
            Get Started
          </Button>
        </Container>
      </HeroBody>
    </Hero>
  </Layout>
);

export default IndexPage;
