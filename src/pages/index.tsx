import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  Table,
  Title,
} from 'bloomer';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SERVER_FEATURES } from '../data/features';

import Icon from '../assets/images/icon.svg';
import BibtexVideo from '../assets/videos/bibtex.webm';
import CompletionVideo from '../assets/videos/completion.webm';
import RenameVideo from '../assets/videos/rename.webm';
import { Video } from '../components/video';

interface FeatureSectionProps {
  title: string;
  videoSource: string;
  isEven?: boolean;
}

const FeatureSection: React.FunctionComponent<FeatureSectionProps> = ({
  title,
  videoSource,
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
          <Video src={videoSource} />
        </Column>
        <Column>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </Column>
      </Columns>
    </Container>
  </Section>
);

const FeatureTable: React.FunctionComponent = () => {
  const CheckmarkRow = ({ isChecked = false }) => (
    <td className="center-column">
      <FontAwesomeIcon
        className={isChecked ? 'has-text-success' : 'has-text-danger'}
        icon={isChecked ? faCheckCircle : faTimesCircle}
      />
    </td>
  );

  return (
    <Table isStriped={true} isBordered={true} isNarrow={true}>
      <thead>
        <tr>
          <th>Feature</th>
          <th className="center-column">LaTeX</th>
          <th className="center-column">BibTeX</th>
        </tr>
      </thead>
      <tbody>
        {SERVER_FEATURES.map(({ name, latex, bibtex }, key) => (
          <tr key={key}>
            <td>{name}</td>
            <CheckmarkRow isChecked={latex} />
            <CheckmarkRow isChecked={bibtex} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`texlab`, `latex`, `lsp`, `language server`, `vscode`]}
      />
      <Hero isColor="light" className="hero-image" isSize="medium">
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
      <FeatureSection title="Code Completion" videoSource={CompletionVideo}>
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
      <FeatureSection isEven={true} title="Rename" videoSource={RenameVideo}>
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
      <FeatureSection title="BibTeX" videoSource={BibtexVideo}>
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
      <Section hasTextAlign="centered" className="has-background-info">
        <Title>Feature List</Title>
        <Container>
          <Content>
            <FeatureTable />
          </Content>
        </Container>
      </Section>
    </Layout>
  );
};

export default IndexPage;
