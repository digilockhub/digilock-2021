import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";

import iconTech from '../../../images/locks/icon-tech.svg';
import iconInstall from '../../../images/locks/icon-install.svg';
import iconEasy from '../../../images/locks/icon-easy.svg';

import smartAspire from '../../../images/locks/smart-aspire.png';
import smartVersa from '../../../images/locks/smart-versa.png';
import smartOrbit from '../../../images/locks/smart-orbit.png';
import smartDigilink from '../../../images/locks/smart-digilink.png';
import mobileSmartDivider from '../../../images/locks/mobile-divider.svg';
import desktopSmartDivider from '../../../images/locks/desktop-divider.svg';

import elecAxis from '../../../images/locks/elec-axis.png';
import elecCue from '../../../images/locks/elec-cue.png';
import elecSola from '../../../images/locks/elec-sola.png';
import elecRange from '../../../images/locks/elec-range.png';

import legacyStandard from '../../../images/locks/legacy-standard.png';
import legacyVertical from '../../../images/locks/legacy-vertical.png';
import legacyClassic from '../../../images/locks/legacy-classic.png';

import mech from '../../../images/locks/mech-mech.png';


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
                width={'1440'}
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
              <p>
                <Trans>
                  locks_headline_copy_2
                </Trans>
              </p>
              <div className="buttons">
                <a href="" className="btn btn--orange">
                  <Trans>see_portfolio</Trans>
                </a>
                {/*<a href="" className="btn btn--orange">*/}
                {/*  <Trans>need_help</Trans>*/}
                {/*</a>*/}
              </div>
            </div>
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
          <section className="smart-locks">
            <div className="container">
              <h2>
                <Trans>
                  A Digilock for every purpose
                </Trans>
              </h2>
              <h2 className="sub">
                <a href="#">
                  <Trans>
                    smart_locks
                  </Trans>
                </a>
              </h2>
              <p>
                <Trans>
                  smart_locks_copy
                </Trans>
              </p>
              <div className="smart-locks-container">

                <div className="smart-lock-wrap">

                  <a href="#">
                  <div className="thumbnail">
                    <img src={smartAspire} alt="Aspire smart lock" width={'199'} height={'163'} loading={'lazy'}/>
                    <p>
                      <span>Aspire<sup>&trade;</sup></span>
                    </p>
                  </div>
                  </a>
                  <a href="#">
                  <div className="thumbnail">
                    <img src={smartVersa} alt="Versa smart lock" width={'199'} height={'163'} loading={'lazy'}/>
                    <p>
                      <span>Versa<sup>&trade;</sup></span>
                    </p>
                  </div>
                  </a>
                  <a href="#">
                  <div className="thumbnail">
                    <img src={smartOrbit} alt="Orbit smart lock" width={'199'} height={'163'} loading={'lazy'}/>
                    <p>
                      <span>Orbit<sup>&trade;</sup></span>
                      </p>
                  </div>
                  </a>
                </div>

                <img src={mobileSmartDivider} className={'mobile-smart-divider'} alt=""/>

                <div className="digilink-lock">
                  <img src={desktopSmartDivider} alt=""/>
                  <a href="#">
                  <div className="thumbnail">
                    <img src={smartDigilink} alt="Digilink" width={'199'} height={'163'} loading={'lazy'}/>
                    <p>
                      <span>Digilink<sup>&trade;</sup></span>
                      </p>
                  </div>
                  </a>
                </div>
              </div>

              <div className="smart-digilink-container">
                <div className="thumbnail">
                  <img src={smartDigilink} alt="Digilink" width={'199'} height={'163'} loading={'lazy'}/>
                  <p>
                    <span>Digilink<sup>&trade;</sup></span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="electronic-locks">
            <div className="container">
              <h2 className="sub">
                <a href="#">
                  <Trans>
                    electronic_locks
                  </Trans>
                </a>
              </h2>
              <p>
                <Trans>
                 electronic_locks_copy
                </Trans>
              </p>
              <div className="row">
                <a href="#">
                <div className="thumbnail">
                  <img src={smartAspire} alt="Aspire"/>
                  <p>
                    <span>Aspire<sup>&trade;</sup></span>
                  </p>
                </div>
                </a>
                <a href="#">
                <div className="thumbnail">
                  <img src={smartVersa} alt="Versa"/>
                  <p>
                    <span>Versa<sup>&trade;</sup></span>
                  </p>
                </div>
                </a>
                <a href="#">
                <div className="thumbnail">
                  <img src={smartOrbit} alt="Orbit"/>
                  <p>
                    <span>Orbit<sup>&trade;</sup></span>
                  </p>
                </div>
                </a>
              </div>
            </div>
          </section>
          <section className="legacy-locks">
            <div className="container legacy">
              <h2 className="sub legacy">
                <Trans>
                  legacy_locks
                </Trans>
              </h2>
              <div className="row">
                <a href="#">
                  <div className="thumbnail">
                    <img src={elecAxis} alt="Axis"/>
                    <p>
                      <span>Axis<sup>&trade;</sup></span>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div className="thumbnail">
                    <img src={elecCue} alt="Cue"/>
                    <p>
                      <span>Cue<sup>&trade;</sup></span>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div className="thumbnail">
                    <img src={elecSola} alt="Sola"/>
                    <p>
                      <span>Sola<sup>&trade;</sup></span>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div className="thumbnail">
                    <img src={elecRange} alt="Range"/>
                    <p>
                      <span>Range<sup>&trade;</sup></span>
                    </p>
                  </div>
                </a>

              </div>
              <div className="row">
                <div className="thumbnail">
                  <img src={legacyStandard} alt="Legacy Standard"/>
                  <p>Standard</p>
                </div>
                <div className="thumbnail">
                  <img src={legacyVertical} alt="Legacy Vertical"/>
                  <p>Vertical</p>
                </div>
                <div className="thumbnail">
                  <img src={legacyClassic} alt="Legacy Classic"/>
                  <p>Classic</p>
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="electronic-locks">
            <div className="container">
              <h2 className="sub">
                <a href="#">
                  <Trans>
                    mechanical_lock
                  </Trans>
                </a>
              </h2>
              <p>
                <Trans>
                  mechanical_lock_copy
                </Trans>
              </p>
              <div className="row">
                <a href="#">
                  <div className="thumbnail">
                    <img src={mech} alt="Mech"/>
                    <p>
                      <span>Mech<sup>&trade;</sup></span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </section>
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
