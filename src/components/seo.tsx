import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

interface DetailsQueryData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

interface SEOProps {
  title: string;
  keywords?: string[];
}

export const SEO: React.FC<SEOProps> = ({ title, keywords = [] }) => {
  const render = ({ site: { siteMetadata } }: DetailsQueryData) => {
    const { description } = siteMetadata;
    const meta = [
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'google-site-verification',
        content: 'msVW73AhGsb_-2nAN-Cf7zh5REvtp-s37uargFRal0s',
      },
    ];

    if (keywords.length > 0) {
      meta.push({
        name: 'keywords',
        content: keywords.join(', '),
      });
    }

    return (
      <Helmet
        htmlAttributes={{
          lang: 'en-US',
        }}
        title={title}
        titleTemplate={`%s | ${siteMetadata.title}`}
        meta={meta}
      />
    );
  };

  return <StaticQuery query={detailsQuery} render={render} />;
};
