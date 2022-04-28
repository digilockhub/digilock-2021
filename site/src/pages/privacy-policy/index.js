import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';



const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo title={t('About')}/>
        <div className="about">
          <section className="hero">
            <h1>Privacy Policy Placeholder</h1>
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
