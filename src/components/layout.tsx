import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Header } from './header';

import './layout.css';

export class Layout extends React.PureComponent {
  public render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={this.handleRender}
      />
    );
  }

  private handleRender = (data: any) => {
    const { children } = this.props;
    return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    );
  };
}
