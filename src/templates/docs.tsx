import { Column, Columns, Container, Content, Section } from 'bloomer';
import { graphql } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { MenuCategory, MenuItem, SidebarNav } from '../components/sidebarNav';

interface Frontmatter {
  path: string;
  title: string;
  category: string;
}

interface Edge {
  node: {
    frontmatter: Frontmatter;
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

function extractCategories(edges: Edge[]): MenuCategory[] {
  const categories: MenuCategory[] = [];

  for (const { node } of edges) {
    const { frontmatter } = node;
    const { title, path, category } = frontmatter;
    const item: MenuItem = { name: title, path };

    const currentCategory = categories.find(x => x.name === category);
    if (currentCategory) {
      currentCategory.items.push(item);
    } else {
      categories.push({ name: category, items: [item] });
    }
  }

  return categories;
}

export const DocsTemplate: React.FC<DocsTemplateProps> = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const categories = extractCategories(allMarkdownRemark.edges);
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
              <SidebarNav categories={categories} />
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
        category
      }
    }
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          frontmatter {
            path
            title
            category
          }
        }
      }
    }
  }
`;
