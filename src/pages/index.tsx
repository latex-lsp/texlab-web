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

import { Link } from 'gatsby';
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

const FeatureSection: React.FC<FeatureSectionProps> = ({
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

const FeatureTable: React.FC = () => {
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

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={['texlab', 'latex', 'lsp', 'language server', 'vscode']}
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
            <Link to="/docs">
              <Button isColor="primary" isSize="large">
                Get Started
              </Button>
            </Link>
          </Container>
        </HeroBody>
      </Hero>
      <FeatureSection title="Code Completion" videoSource={CompletionVideo}>
        TexLab analyzes your files as you type and provides smart code
        completion results. After parsing your files, all included packages will
        be indexed in the background. By using the TeX engine, we can precisely
        determine all commands and environments that are defined in these
        packages.
      </FeatureSection>
      <FeatureSection
        isEven={true}
        title="Project-wide Operations"
        videoSource={RenameVideo}>
        The server builds a dependency graph of all files in the currently
        opened workspace. This allows us to perform project-wide refactoring
        features to all affected files. No need to use magic comments or
        configuration files anymore.
      </FeatureSection>
      <FeatureSection title="BibTeX Integration" videoSource={BibtexVideo}>
        TexLab has excellent support for BibTeX. It features code completion,
        syntax checking, navigation features and an opinionated code formatter.
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
