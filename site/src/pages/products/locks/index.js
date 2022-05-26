import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import Locks from '../../../components/ui/locks';
import iconTech from '../../../images/locks/icon-tech.svg';
import iconInstall from '../../../images/locks/icon-install.svg';
import iconEasy from '../../../images/locks/icon-easy.svg';


const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Digilock Commercial Keyless Locks For Hospitals, Hospitality and Corporations')}
            description={'Learn about the best industry commercial keyless locks that leverage proprietary technology and is supported by a dedicated customer service team.'}
        />
        <div className="locks">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/locks/hero-locks.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                why_digilock
              </Trans>
            </h6>
          </section>
          <section className="what-to-expect">
            <div className="container">
              <h2>
                <Trans>
                  what_to_expect
                </Trans>
              </h2>
              <p>
                <Trans>
                  what_to_expect_copy
                </Trans>
              </p>

              <div className="expect-containers">
                <div className="expect-container">
                  <img src={iconTech} alt="" width={'55'} height={'59'}/>
                  <h2 className={'sub'}>
                    <Trans>
                      tech_advanced
                    </Trans>
                  </h2>
                  <hr/>
                  <ul>
                    <li>
                      <Trans>
                        tech_advanced_copy1
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        tech_advanced_copy2
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        tech_advanced_copy3
                      </Trans>
                    </li>
                  </ul>
                </div>
                <div className="expect-container">
                  <img src={iconInstall} alt="" width={'157'} height={'29'}/>
                  <h2 className={'sub'}>
                    <Trans>
                      simple_install
                    </Trans>
                  </h2>
                  <hr/>
                  <ul>
                    <li>
                      <Trans>
                        simple_install_copy1
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        simple_install_copy2
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        simple_install_copy3
                      </Trans>
                    </li>
                  </ul>
                </div>
                <div className="expect-container">
                  <img src={iconEasy} alt="" width={'149'} height={'47'}/>
                  <h2 className={'sub'}>
                    <Trans>
                      easy_use
                    </Trans>
                  </h2>
                  <hr/>
                  <ul>
                    <li>
                      <Trans>
                        easy_use_copy1
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        easy_use_copy2
                      </Trans>
                    </li>
                    <li>
                      <Trans>
                        easy_use_copy3
                      </Trans>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <Locks />
          <section className="compare-grid">
            <div className="container">
              <div className="buttons">
                <a href="" className="btn btn--orange">
                  <Trans>download_grid</Trans>
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
