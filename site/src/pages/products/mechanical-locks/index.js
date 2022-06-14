import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../../components/layout";
import Seo from "../../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import mechLogo from '../../../../images/logos/logo-mech.svg';

const IndexPage = () => {
  const {t} = useTranslation();
  return (
      <Layout>
        <Seo
            title={t('Digilock Commercial Keyless Locks For Hospitals, Hospitality and Corporations')}
            description={'Learn about the best industry commercial keyless locks that leverage proprietary technology and is supported by a dedicated customer service team.'}
        />
        <div className="products electronic-locks-page">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../../images/locks/hero-mech.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                mechanical_lock
              </Trans>
            </h6>
          </section>
          <section className={'smart-locks-overview'}>
            <div className="container">
              <h1>
                <Trans>
                  mech_headline
                </Trans>
              </h1>
              <p>
                <Trans>
                  mech_headline_copy
                </Trans>
              </p>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="elec-mech">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../../images/electronic-locks/elec-mech-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single">
                  <img className={'mech-logo'} src={mechLogo} width={'193'} height={'35'} alt=""/>
                  <h2>
                    <Trans>mechanical_mech_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>mechanical_mech_list1</Trans></li>
                    <li><Trans>mechanical_mech_list2</Trans></li>
                    <li><Trans>mechanical_mech_list3</Trans></li>
                    <li><Trans>mechanical_mech_list4</Trans></li>
                    <li><Trans>mechanical_mech_list5</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/mechanical-locks/" className="btn btn--orange">
                      <Trans>see_specs</Trans>
                    </a>
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>download_brochure</Trans>
                    </a>
                  </div>
                </div>
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
