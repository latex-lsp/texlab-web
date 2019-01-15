import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

interface SEOProps {
  lang: string;
  meta: any[];
  keywords: string[];
  title: string;
}

export class SEO extends React.PureComponent<SEOProps> {
  public static defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
  };

  public render() {
    return <StaticQuery query={detailsQuery} render={this.handleRender} />;
  }

  private handleRender = (data: any) => {
    const { lang, meta, keywords, title } = this.props;
    const description = data.site.siteMetadata.description;
    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: data.site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
              : [],
          )
          .concat(meta)}
      />
    );
  };
}
