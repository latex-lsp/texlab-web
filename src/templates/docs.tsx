import { Container, Content, Section } from 'bloomer';
import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

interface DocsTemplateProps {
  data: {
    markdownRemark: {
      frontmatter: {
        path: string;
        title: string;
      };
      html: string;
    };
  };
}

export const DocsTemplate: React.FC<DocsTemplateProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <Section>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Section>
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
  }
`;
