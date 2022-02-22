import React from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {StaticImage} from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from 'gatsby';

import lockImage from '../images/aspire-lock.png'

const IndexPage = () => {
  const {t} = useTranslation();
  return (
      <Layout>
        <Seo title={t('Home')} />

        <section>
          <div className="container grid">
            <div className="col">
              <h1>
                <Trans>section_one_headline</Trans>
              </h1>
              <h2>
                section one h2
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              {/*<StaticImage*/}
              {/*    src="../images/aspire-lock.png"*/}
              {/*    width={148}*/}
              {/*    quality={95}*/}
              {/*    formats={["auto", "webp", "avif"]}*/}
              {/*    alt="Aspire Smart Lock"*/}
              {/*/>*/}
              <a href="" className="btn btn--secondary">Secondary Button</a>
              <a href="" className="btn btn--primary">Primary Button</a>
            </div>
          </div>
        </section>
        <section>
          <div className="container grid">
            <div className="col">
              <h1 className={'title-large'}>
                <Trans>section_two_headline</Trans> Large
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </section>
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
