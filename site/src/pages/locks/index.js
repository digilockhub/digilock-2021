import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";



const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo title={t('Locks')}/>
        <div className="locks">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../images/locks/hero-locks.jpg"
                width={'1440'}
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                hero_headline
              </Trans>
            </h6>
          </section>
          <section className="solution">
            <div className="container">
              <h1>
                <Trans>
                  locks_headline
                </Trans>
              </h1>
              <p>
                <Trans>
                  locks_headline_copy
                </Trans>
              </p>
              <div className="buttons">
                <a href="" className="btn btn--orange">
                  <Trans>see_portfolio</Trans>
                </a>
                <a href="" className="btn btn--orange">
                  <Trans>need_help</Trans>
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
