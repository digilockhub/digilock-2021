import React from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../../components/layout";
import Seo from "../../../../components/seo";
import {graphql} from 'gatsby';
import Tab from './Tab';


const IndexPage = () => {
  const isBrowser = typeof window !== "undefined";
  const {t} = useTranslation();


  return (
      <Layout>
        <Seo title={t('Classic Cam Electronic Lock Support')}/>
        <div className="support">
          <section className="hero">
            <div className="container">
              <Tab />
            </div>
          </section>
        </div>
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
