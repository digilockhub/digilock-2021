import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';



const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo title={t('Contact Digilock')}/>
        <div className="contact">
          <section className="hero">
            <div className="container">
              <h1>
                <Trans>contact_us</Trans>
                <p>
                  <Trans>looking_product_support</Trans>
                  <Link to={'#'} dangerouslySetInnerHTML={{__html: t('click_here')}} />
                </p>
              </h1>
            </div>
          </section>
          <section className="form">
            <div className="container">
              <form action="#" className={'sales-contact-form'}>
                Form
              </form>
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
