import {
  faBook,
  faCheckCircle,
  faCubes,
  faDownload,
  faQuestionCircle,
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
  Section,
  Subtitle,
  Table,
  Title,
} from 'bloomer';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { FeatureStatus, SERVER_FEATURES } from '../data/features';

import { Link } from 'gatsby';
import EmacsLogo from '../assets/images/emacs.svg';
import Icon from '../assets/images/icon.svg';
import NeovimLogo from '../assets/images/neovim.svg';
import CodeLogo from '../assets/images/vscode.svg';
import BibtexVideo from '../assets/videos/bibtex.webm';
import CompletionVideo from '../assets/videos/completion.webm';
import RenameVideo from '../assets/videos/rename.webm';
import { Video } from '../components/video';

const LogoImage: React.FC<{ alt: string; src: string }> = ({ alt, src }) => (
  <img className="image is-128x128 center-img" alt={alt} src={src} />
);

const Sections: React.FC = ({ children }) => (
  <div className="has-text-centered">
    {React.Children.map(children, (child, i) => (
      <div className={i % 2 === 1 ? 'has-background-info' : undefined}>
        {child}
      </div>
    ))}
  </div>
);

interface FeatureSectionProps {
  title: string;
  videoSource: string;
  reversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  videoSource,
  reversed = false,
  children,
}) => (
  <Section>
    <Container>
      <Columns
        isVCentered={true}
        className={reversed ? 'reverse-columns' : undefined}>
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
  const ImplementedIcon = () => (
    <FontAwesomeIcon
      className="has-text-success"
      icon={faCheckCircle}
      title="implemented"
    />
  );

  const NotImplementedIcon = () => (
    <FontAwesomeIcon
      className="has-text-danger"
      icon={faTimesCircle}
      title="not implemented"
    />
  );

  const NotApplicableIcon = () => (
    <FontAwesomeIcon icon={faQuestionCircle} title="not applicable" />
  );

  const FeatureCell = ({ status }: { status: FeatureStatus }) => {
    let CellIcon: () => JSX.Element;
    switch (status) {
      case 'implemented':
        CellIcon = ImplementedIcon;
        break;
      case 'not-implemented':
        CellIcon = NotImplementedIcon;
        break;
      case 'not-applicable':
      default:
        CellIcon = NotApplicableIcon;
        break;
    }

    return (
      <td className="center-column">
        <CellIcon />
      </td>
    );
  };

  return (
    <>
      <Table isStriped={true} isBordered={true} isNarrow={true}>
        <thead>
          <tr>
            <th>Language Feature</th>
            <th className="center-column">LaTeX</th>
            <th className="center-column">BibTeX</th>
          </tr>
        </thead>
        <tbody>
          {SERVER_FEATURES.map(({ name, latex, bibtex }, key) => (
            <tr key={key}>
              <td>{name}</td>
              <FeatureCell status={latex} />
              <FeatureCell status={bibtex} />
            </tr>
          ))}
        </tbody>
      </Table>
      <Content isSize="small">
        <p>
          <ImplementedIcon /> = implemented, <NotImplementedIcon /> = not
          implemented, <NotApplicableIcon /> = not applicable, * = custom
          feature
        </p>
      </Content>
    </>
  );
};

interface DownloadColumnProps {
  title: string;
  link: string;
}

const DownloadColumn: React.FC<DownloadColumnProps> = ({
  title,
  link,
  children,
}) => (
  <Column isSize="narrow">
    <div>{children}</div>
    <br />
    <Button
      isColor="dark"
      isOutlined={true}
      isSize="medium"
      target="_blank"
      href={link}>
      <FontAwesomeIcon pull="left" icon={faDownload} /> {title}
    </Button>
  </Column>
);

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
              <LogoImage alt="TexLab logo" src={Icon} />
              <Title>TexLab</Title>
              <Subtitle>
                A cross-platform implementation of the Language Server Protocol
                for LaTeX.
              </Subtitle>
            </Column>
            <Link to="/docs">
              <Button isColor="dark" isSize="large">
                <FontAwesomeIcon pull="left" icon={faBook} />
                <span>Get Started</span>
              </Button>
            </Link>
          </Container>
        </HeroBody>
      </Hero>
      <Sections>
        <FeatureSection title="Code Completion" videoSource={CompletionVideo}>
          TexLab analyzes your files as you type and provides smart code
          completion results. After parsing your files, all included packages
          will be indexed in the background. By using the TeX engine, we can
          precisely determine all commands and environments that are defined in
          these packages.
        </FeatureSection>
        <FeatureSection
          title="Project-wide Operations"
          videoSource={RenameVideo}
          reversed={true}>
          The server builds a dependency graph of all files in the currently
          opened workspace. This allows us to perform project-wide refactoring
          features to all affected files. No need to use magic comments or
          configuration files anymore.
        </FeatureSection>
        <FeatureSection title="BibTeX Integration" videoSource={BibtexVideo}>
          TexLab has excellent support for BibTeX. It features code completion,
          syntax checking, navigation features and an opinionated code
          formatter.
        </FeatureSection>
        <Section>
          <Title>Language Features</Title>
          <Container>
            <Content>
              <p>
                The following features of the{' '}
                <a href="https://microsoft.github.io/language-server-protocol/specification">
                  Language Server Protocol
                </a>{' '}
                are implemented:
              </p>
              <FeatureTable />
            </Content>
          </Container>
        </Section>
        <Section>
          <Container id="download">
            <Columns isVCentered={true}>
              <Column>
                <Title isSize={4}>Editor Extensions</Title>
                <Columns isCentered={true} isVCentered={true}>
                  <DownloadColumn
                    title="VS Code"
                    link="https://marketplace.visualstudio.com/items?itemName=efoerster.texlab">
                    <LogoImage alt="Visual Studio Code" src={CodeLogo} />
                  </DownloadColumn>
                  <DownloadColumn
                    title="(Neo)Vim"
                    link="https://github.com/fannheyward/coc-texlab">
                    <LogoImage alt="Neovim" src={NeovimLogo} />
                  </DownloadColumn>
                  <DownloadColumn
                    title="Emacs"
                    link="https://github.com/ROCKTAKEY/lsp-latex">
                    <LogoImage alt="Emacs" src={EmacsLogo} />
                  </DownloadColumn>
                </Columns>
              </Column>
              <Column isSize="narrow">
                <Title className="has-text-weight-bold">or</Title>
              </Column>
              <Column>
                <Title isSize={4}>Standalone</Title>
                <Columns isCentered={true} isVCentered={true}>
                  <DownloadColumn
                    title="Binaries"
                    link="https://github.com/latex-lsp/texlab/releases">
                    <FontAwesomeIcon icon={faCubes} size="8x" />
                  </DownloadColumn>
                </Columns>
              </Column>
            </Columns>
          </Container>
        </Section>
      </Sections>
    </Layout>
  );
};

export default IndexPage;
