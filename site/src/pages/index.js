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
        <div className="home">
          <section className="hero">
            <img src="https://fpoimg.com/1125x750?text=FPO" alt=""/>
            {/*<StaticImage*/}
            {/*    src="https://fpoimg.com/2000x500?text=FPO"*/}
            {/*    // width={2000}*/}
            {/*    quality={95}*/}
            {/*    formats={["auto", "webp", "avif"]}*/}
            {/*    alt="Aspire Smart Lock"*/}
            {/*/>*/}
          </section>
          <section>
            <div className="container grid">
              <div className="col">
                <h1>
                  <Trans>section_one_headline</Trans>
                </h1>
                <h2>
                  <Trans>section_two_headline</Trans>
                </h2>
                <p>That’s why we make our products compatible, flexible, and tailored to the storage security needs of each industry. From wireless cloud-based management, to simple keyless  retrofits, Digilock works as a partner to protect your  workspace today, tomorrow, and well into the future.</p>
                {/*<StaticImage*/}
                {/*    src="../images/aspire-lock.png"*/}
                {/*    width={148}*/}
                {/*    quality={95}*/}
                {/*    formats={["auto", "webp", "avif"]}*/}
                {/*    alt="Aspire Smart Lock"*/}
                {/*/>*/}
                {/*<a href="" className="btn btn--secondary">Secondary Button</a>*/}
                {/*<a href="" className="btn btn--primary">Primary Button</a>*/}
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
