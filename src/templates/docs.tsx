import { Column, Columns, Container, Content, Section } from 'bloomer';
import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { SidebarNav, SidebarNavNode } from '../components/sidebarNav';

interface Frontmatter {
  path: string;
  title: string;
}

interface Heading {
  value: string;
  depth: number;
}

interface Edge {
  node: {
    frontmatter: Frontmatter;
    headings: Heading[];
  };
}

interface DocsTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: Frontmatter;
      html: string;
    };
    allMarkdownRemark: {
      edges: Edge[];
    };
  };
}

export const DocsTemplate: React.FC<DocsTemplateProps> = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
    allMarkdownRemark: { edges },
  } = data;

  const navNodes: SidebarNavNode[] = [];
  for (const node of edges.map(x => x.node)) {
    const {
      frontmatter: { title, path },
    } = node;

    const children = node.headings
      .filter(x => x.depth > 1)
      .map(({ value }) => ({
        name: value,
        path: `${path}#${value}`.replace(/\s+/g, '-').toLowerCase(),
        children: [],
      }));

    navNodes.push({
      name: title,
      path,
      children,
    });
  }

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <Columns>
          <Column isSize="3/4">
            <Section>
              <Content dangerouslySetInnerHTML={{ __html: html }} />
            </Section>
          </Column>
          <Column>
            <Section>
              <SidebarNav label="Docs" nodes={navNodes} />
            </Section>
          </Column>
        </Columns>
      </Container>
    </Layout>
  );
};

export default DocsTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          frontmatter {
            path
            title
          }
          headings(depth: h2) {
            value
            depth
          }
        }
      }
    }
  }
`;
