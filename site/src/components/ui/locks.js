import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "react-i18next";
import mobileSmartDivider from "../../images/locks/mobile-divider.svg";
import desktopSmartDivider from "../../images/locks/desktop-divider.svg";
import {globalHistory} from "@reach/router";

const Locks = () => {
  const isSupport = globalHistory.location.pathname.indexOf('support') > -1;
  const urlDirectory = isSupport ? '/support/' : '/products/';


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
                        src={'../../images/locks/DL22-net-aspire-600x497.png'}
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
                        src={'../../images/locks/DL22-net-versa-600x497.png'}
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
                        src={'../../images/locks/DL22-net-orbit-600x497.png'}
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
                        src={'../../images/locks/DL22-digilink-600x497.png'}
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
                <StaticImage
                    src={'../../images/locks/DL22-digilink-600x497.png'}
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
                  <StaticImage
                      src={'../../images/locks/DL22-aspire-600x497.png'}
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
                      src={'../../images/locks/DL22-versa-600x497.png'}
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
                      src={'../../images/locks/DL22-orbit-600x497.png'}
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
                  <StaticImage
                      src={'../../images/locks/DL22-axis-600x497.png'}
                      loading={'lazy'}
                      width={'200'}
                      height={'148'}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <span>Axis<sup>&trade;</sup></span>
                  </p>
                </div>
              </a>
              <a href="#">
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-cue-600x497.png'}
                      loading={'lazy'}
                      width={'200'}
                      height={'148'}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <span>Cue<sup>&trade;</sup></span>
                  </p>
                </div>
              </a>
              <a href="#">
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-sola-600x497.png'}
                      loading={'lazy'}
                      width={'200'}
                      height={'148'}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <span>Sola<sup>&trade;</sup></span>
                  </p>
                </div>
              </a>
              <a href="#">
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-range-600x497.png'}
                      loading={'lazy'}
                      width={'200'}
                      height={'148'}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <span>Range<sup>&trade;</sup></span>
                  </p>
                </div>
              </a>

            </div>
            <div className="row">
              <div className="thumbnail">
                <StaticImage
                    src={'../../images/locks/DL22-4Gstand-600x497.png'}
                    loading={'lazy'}
                    width={'200'}
                    height={'148'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Standard"
                />
                <p>A Series Standard</p>
              </div>
              <div className="thumbnail">
                <StaticImage
                    src={'../../images/locks/DL22-4Gvertical-600x497.png'}
                    loading={'lazy'}
                    width={'200'}
                    height={'150'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Vertical"
                />
                <p>A Series Vertical</p>
              </div>
              <div className="thumbnail">
                <StaticImage
                    src={'../../images/locks/DL22-classiccam-600x497.png'}
                    loading={'lazy'}
                    width={'200'}
                    height={'150'}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="Vertical"
                />
                <p>Classic Cam</p>
              </div>
            </div>
            {
              isSupport ?
                  <div className="row">
                    <div className="thumbnail">
                      <StaticImage
                          src={'../../images/locks/DL22-tseries-600x497.png'}
                          loading={'lazy'}
                          width={'200'}
                          height={'150'}
                          quality={100}
                          formats={["auto", "webp", "avif"]}
                          alt="T-series"
                      />
                      <p>T-series</p>
                    </div>
                    <div className="thumbnail">
                      <StaticImage
                          src={'../../images/locks/DL22-ktekpe-600x497.png'}
                          loading={'lazy'}
                          width={'200'}
                          height={'150'}
                          quality={100}
                          formats={["auto", "webp", "avif"]}
                          alt="KTE/KPE"
                      />
                      <p>KTE/KPE</p>
                    </div>
                    <div className="thumbnail">
                      <StaticImage
                          src={'../../images/locks/DL22-2G-600x497.png'}
                          loading={'lazy'}
                          width={'200'}
                          height={'150'}
                          quality={100}
                          formats={["auto", "webp", "avif"]}
                          alt="2nd Generation"
                      />
                      <p>2nd Generation</p>
                    </div>
                    <div className="thumbnail">
                      <StaticImage
                          src={'../../images/locks/DL22-1G-600x497.png'}
                          loading={'lazy'}
                          width={'200'}
                          height={'150'}
                          quality={100}
                          formats={["auto", "webp", "avif"]}
                          alt="1st Generation"
                      />
                      <p>1st Generation</p>
                    </div>
                  </div>
                  : null
            }
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
                      src={'../../images/locks/DL22-mech-600x497.png'}
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
