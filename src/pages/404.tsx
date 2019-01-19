import { Button, Container, Content, Section, Title } from 'bloomer';
import { Link } from 'gatsby';
import React from 'react';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const NotFoundPage: React.FC = () => {
  const title = 'Page Not Found';
  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Section>
          <Title>{title}</Title>
          <Content>
            The requested page does not exist. Please go back to the home page
            by using the button below.
          </Content>
          <Link to="/">
            <Button isColor="primary">Take me back</Button>
          </Link>
        </Section>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
