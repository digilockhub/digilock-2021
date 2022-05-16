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
            <div className="container">
              <h1>
                <Trans>
                  where_buy
                </Trans>
              </h1>
              <p>
                <Trans>
                  where_buy_copy
                </Trans>
              </p>
              <div className="buttons">
                <a href="" className="btn btn--orange">
                  <Trans>email</Trans>
                </a>
                <a href="" className="btn btn--orange">
                  <Trans>call</Trans>
                </a>
                <a href="" className="btn btn--orange">
                  <Trans>chat</Trans>
                </a>
              </div>
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
