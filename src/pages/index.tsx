import {
  Button,
  Column,
  Columns,
  Container,
  Content,
  Hero,
  HeroBody,
  Image,
  Section,
  Subtitle,
  Title,
} from 'bloomer';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

import Bibtex from '../images/bibtex.gif';
import Completion from '../images/completion.gif';
import Icon from '../images/icon.svg';
import Rename from '../images/rename.gif';

interface FeatureSectionProps {
  title: string;
  imageSource: string;
  isEven?: boolean;
}

const FeatureSection: React.FunctionComponent<FeatureSectionProps> = ({
  title,
  imageSource,
  isEven = false,
  children,
}) => (
  <Section
    hasTextAlign="centered"
    className={isEven ? 'has-background-info' : undefined}>
    <Container>
      <Columns
        isCentered={true}
        isVCentered={true}
        className={isEven ? 'reverse-columns' : undefined}>
        <Column>
          <img src={imageSource} />
        </Column>
        <Column>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </Column>
      </Columns>
    </Container>
  </Section>
);

const IndexPage: React.FunctionComponent = () => {
  return (
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
      <FeatureSection title="Code Completion" imageSource={Completion}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </FeatureSection>
      <FeatureSection isEven={true} title="Rename" imageSource={Rename}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </FeatureSection>
      <FeatureSection title="BibTeX" imageSource={Bibtex}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </FeatureSection>
    </Layout>
  );
};

export default IndexPage;
