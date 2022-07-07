import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {StaticImage} from 'gatsby-plugin-image';
import {graphql} from 'gatsby';

import iconDependability from '../../images/about/icon-dependability.svg';
import iconInnovation from '../../images/about/icon-innovation.svg';
import iconPartnership from '../../images/about/icon-partnership.svg';
import iconService from '../../images/about/icon-service.svg';


const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Digilock Develops Secure Storage Solutions with Innovative Keyless Locks')}
            description={t('Learn about the best keyless lock for theft prevention, security, and other needs for your business.')}
        />
        <div className="about">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../images/about/hero-about.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h1>
              <Trans>
                about_headline
              </Trans>
            </h1>
          </section>
          <section className={'reliability'}>
            <div className="container">
              <h2>
                <Trans>model_reliability</Trans>
              </h2>
              <p>
                <Trans>
                  model_reliability_p1
                </Trans>
              </p>
              <p>
                <Trans>
                  model_reliability_p2
                </Trans>
              </p>
              <p>
                <Trans>
                  model_reliability_p3
                </Trans>
              </p>
            </div>
          </section>
          <section className={'partnership'}>
            <div className="container">
              <h2>
                <Trans>power_partnership</Trans>
              </h2>
              <p>
                <Trans>
                  power_partnership_p1
                </Trans>
              </p>
              <p>
                <Trans>
                  power_partnership_p2
                </Trans>
              </p>
            </div>
          </section>
          <section className="core-values">
            <div className="container">
              <h2>
                <Trans>
                  core_values
                </Trans>
              </h2>
              <div className="figure-container">
                <div className="figure">
                  <h3>
                    <Trans>innovation</Trans>
                  </h3>
                  <img src={iconInnovation} alt="Innovation"/>
                  <p>
                    <Trans>
                      innovation_copy
                    </Trans>
                  </p>
                </div>
                <div className="figure">
                  <h3>
                    <Trans>service</Trans>
                  </h3>
                  <img src={iconService} alt="Service"/>
                  <p>
                    <Trans>
                      service_copy
                    </Trans>
                  </p>
                </div>
                <div className="figure">
                  <h3>
                    <Trans>partnership</Trans>
                  </h3>
                  <img src={iconPartnership} alt="Partnership"/>
                  <p>
                    <Trans>
                      partnership_copy
                    </Trans>
                  </p>
                </div>
                <div className="figure">
                  <h3>
                    <Trans>dependability</Trans>
                  </h3>
                  <img src={iconDependability} alt="Dependability"/>
                  <p>
                    <Trans>
                      dependability_copy
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container"/>
          <section className="global-offices">

            <div className="container">
              <h2>
                <Trans>
                  global_offices
                </Trans>
              </h2>
              <div className="figure-container no-gap">
                <figure>
                  <StaticImage
                      src="../../images/about/offices-americas.png"
                      width={258}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <figcaption>
                    <Trans>digilock_americas</Trans>
                  </figcaption>
                </figure>
                <figure>
                  <StaticImage
                      src="../../images/about/offices-chicago.png"
                      width={258}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <figcaption>
                    <Trans>digilock_showroom</Trans>
                  </figcaption>
                </figure>
                <figure>
                  <StaticImage
                      src="../../images/about/offices-europe.png"
                      width={258}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <figcaption>
                    <Trans>digilock_europe</Trans>
                  </figcaption>
                </figure>
                <figure>
                  <StaticImage
                      src="../../images/about/offices-asia.png"
                      width={258}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <figcaption>
                    <Trans>digilock_asia</Trans>
                  </figcaption>
                </figure>
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
