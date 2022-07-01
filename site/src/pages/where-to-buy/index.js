import React, {useEffect} from "react";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';
import CompanySettings from "../../constants/company/settings";
import Dealers from '../../components/dealers/dealers';

const IndexPage = () => {
  const {t} = useTranslation();
  function handleScrollTo(elmID) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: document.getElementById(elmID).offsetTop - 150
    });
  }
  useEffect(() => {
    if (document.location.hash === '#gotoPartners') {
      handleScrollTo("partners");
    }
  }, []);
  return (
      <Layout>
        <Seo
            title={t('Digilock Electronic Lock Solutions Can Be Found Globally')}
            description={t('Digilock electronic and digital lock solutions can be purchased directly through us, or from one of our trusted partners. Find the right electronic lock solution for your needs.')}
        />
        <div className="where-to-buy">
          <section className="hero">
            <div className="container">
              <h1 className={'wtb'}>
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
          <div id={'partners'} className="section-delimeter container" />
          <Dealers />
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
