import { Content } from 'bloomer';
import { graphql } from 'gatsby';
import React from 'react';
import {
  MenuCategory,
  MenuItem,
  NavigableLayout,
} from '../components/navigableLayout';
import { SEO } from '../components/seo';

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
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, path } = frontmatter;

  const activeItem: MenuItem = { name: title, path };
  const categories = extractCategories(allMarkdownRemark.edges);

  return (
    <NavigableLayout activeItem={activeItem} categories={categories}>
      <SEO title={frontmatter.title} />
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </NavigableLayout>
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
