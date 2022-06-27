import React from "react";
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';
import CompanySettings from "../../constants/company/settings";
import Dealers from '../../components/dealers/dealers';

const IndexPage = () => {
  const {t} = useTranslation();
  return (
      <Layout>
        <Seo
            title={t('Digilock Electronic Lock Solutions Can Be Found Globally')}
            description={t('Digilock electronic and digital lock solutions can be purchased directly through us, or from one of our trusted partners. Find the right electronic lock solution for your needs.')}
        />
        <div className="where-to-buy">
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
              <div className="locations">
                <div className="location americas">

                  <h4>Digilock Americas</h4>
                  <ul className={'unstyled-list'}>
                    <li>Petaluma, Ca<br />United States</li>
                    <li>&nbsp;</li>
                    <li>
                      <a href={CompanySettings.SALES_EMAIL}>
                        <Trans>email_sales</Trans> / US
                      </a>
                    </li>
                    <li>Telephone +1 707-766-6000</li>
                    <li>Toll-Free 800-989-0201</li>
                  </ul>

                </div>
                <div className="location showroom">
                  <h4>Digilock Showroom</h4>
                  <ul className={'unstyled-list'}>
                    <li>theMart | Chicago, IL 60654<br />United States</li>
                    <li>&nbsp;</li>
                    <li>
                      <a href={CompanySettings.SALES_EMAIL}>
                        <Trans>email_sales</Trans> / US
                      </a>
                    </li>
                    <li>Telephone +1 707-766-6000</li>
                    <li>Toll-Free 800-989-0201</li>
                  </ul>
                </div>

                <div className="location americas">
                  <h4>Digilock Europe BV</h4>
                  <ul className={'unstyled-list'}>
                    <li>The Netherlands</li>
                    <li>&nbsp;</li>
                    <li>
                      <a href={CompanySettings.SALES_EMAIL_EUROPE}>
                        <Trans>email_sales</Trans> / Europe
                      </a>
                    </li>
                    <li>Telephone +31 0 20 303 3060</li>
                  </ul>
                </div>
                <div className="location americas">
                  <h4>Digilock Asia</h4>
                  <ul className={'unstyled-list'}>
                    <li>Hong Kong</li>
                    <li>&nbsp;</li>

                    <li>
                      <a href={CompanySettings.SALES_EMAIL_ASIA}>
                        <Trans>email_sales</Trans> / Asia
                      </a>
                    </li>
                    <li>Telephone +852 27776 0800</li>
                  </ul>
                </div>
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
