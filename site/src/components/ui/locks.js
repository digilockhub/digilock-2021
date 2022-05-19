import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "react-i18next";
import smartAspire from "../../images/locks/smart-aspire.png";
import smartVersa from "../../images/locks/smart-versa.png";
import smartOrbit from "../../images/locks/smart-orbit.png";
import mobileSmartDivider from "../../images/locks/mobile-divider.svg";
import desktopSmartDivider from "../../images/locks/desktop-divider.svg";
import smartDigilink from "../../images/locks/smart-digilink.png";
import elecAxis from "../../images/locks/elec-axis.png";
import elecCue from "../../images/locks/elec-cue.png";
import elecSola from "../../images/locks/elec-sola.png";
import elecRange from "../../images/locks/elec-range.png";
import legacyStandard from "../../images/locks/legacy-standard.png";
import legacyVertical from "../../images/locks/legacy-vertical.png";
import legacyClassic from "../../images/locks/legacy-classic.png";
// import mech from "../../images/locks/temp/DL22_newweb_thumbnails_298x194.png";


const Locks = () => {

  return (
      <>
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
                    <StaticImage
                        src={'../../images/locks/temp/DL22-newtworked-aspire-600x497.png'}
                        loading={'lazy'}
                        width={'200'}
                        height={'148'}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
                    <p>
                      <span>Aspire<sup>&trade;</sup></span>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div className="thumbnail">
                    <StaticImage
                        src={'../../images/locks/temp/DL22-newtworked-versa-600x497.png'}
                        loading={'lazy'}
                        width={'200'}
                        height={'148'}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
                    <p>
                      <span>Versa<sup>&trade;</sup></span>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div className="thumbnail">
                    <StaticImage
                        src={'../../images/locks/temp/DL22-newtworked-orbit-600x497.png'}
                        loading={'lazy'}
                        width={'200'}
                        height={'148'}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
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
                    <StaticImage
                        src={'../../images/locks/temp/DL22-newtworked-digilink-600x497.png'}
                        loading={'lazy'}
                        width={'200'}
                        height={'148'}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
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
        <div className="section-delimeter container"/>
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
        <div className="section-delimeter container"/>
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
                  <StaticImage
                      src={'../../images/locks/temp/DL22-newtworked-aspire-600x497.png'}
                      loading={'lazy'}
                      width={'200'}
                      height={'148'}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <span>Mech<sup>&trade;</sup></span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </>
  )


};


export default Locks;
