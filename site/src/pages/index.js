import React from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from 'gatsby';

const IndexPage = () => {
  const {t} = useTranslation();
  return (
      <Layout>
        <Seo title={t('Home')} />
        <h1>
          <Trans>Hi people</Trans>
        </h1>
        <p>
          Welcome to your new Gatsby site.
        </p>
        <p>Now go build something great.</p>
        <StaticImage
            src="../images/aspire-lock.png"
            width={224}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Aspire Smart Lock"
        />
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br/>
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br/>
          <Link to="/using-ssr">Go to "Using SSR"</Link> <br/>
          <Link to="/using-dsg">Go to "Using DSG"</Link> <br/>
        </p>
      </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
