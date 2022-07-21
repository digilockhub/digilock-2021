import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';

const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Pay Now | Digilock')}
            description={t('')}
        />
        <div className="paynow">
          <section className="hero">
            <div className="container">
              <h2>
                Enter Credit Card Payment Information
              </h2>
              <p>
                Here you can enjoy the convenience of online payments without having to register or create an account.
              </p>
              <form
                  id="theForm"
                  name="PrePage"
                  method="post"
                  target="_blank"
                  action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx">
                <input type="hidden" name="LinkId" value="19960a35-0997-4ae1-a937-fbe6a36eab64" />
                <input className={'form-submit'} type="submit" value="Pay Now"/>
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
