import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans} from "react-i18next";
import mobileSmartDivider from "../../images/locks/mobile-divider.svg";
import desktopSmartDivider from "../../images/locks/desktop-divider.svg";
import {globalHistory} from "@reach/router";
import {Link} from "gatsby-plugin-react-i18next";

const Locks = () => {
  const [isSupport, setIsSupport] = useState(globalHistory.location.pathname.indexOf('support') > -1);
  let urlDirectory = isSupport ? '/support/' : '/products/';


  return (
      <>
        {
          !isSupport ?
              <section className="smart-locks">
                <div className="container">
                  <h2>
                    <Trans>
                      digilock_purpose
                    </Trans>
                  </h2>
                  <h2 className="sub">
                    <a href="/products/smart-locks/">
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

                      <Link to={urlDirectory + 'smart-locks/#gotoAspire'}>
                        <div className="thumbnail">
                          <StaticImage
                              src={'../../images/locks/DL22-net-aspire-600x497.png'}
                              loading={'lazy'}
                              width={200}
                              height={148}
                              quality={100}
                              formats={["auto", "webp", "avif"]}
                              alt="Aspire Smart Lock"
                          />
                          <p>
                            <span>Aspire<sup>&trade;</sup></span>
                          </p>
                        </div>
                      </Link>
                      <Link to={urlDirectory + 'smart-locks/#gotoVersa'}>
                        <div className="thumbnail">
                          <StaticImage
                              src={'../../images/locks/DL22-net-versa-600x497.png'}
                              loading={'lazy'}
                              width={200}
                              height={148}
                              quality={100}
                              formats={["auto", "webp", "avif"]}
                              alt="Versa Smart Lock"
                          />
                          <p>
                            <span>Versa<sup>&trade;</sup></span>
                          </p>
                        </div>
                      </Link>
                      <Link to={urlDirectory + 'smart-locks/#gotoOrbit'}>
                        <div className="thumbnail">
                          <StaticImage
                              src={'../../images/locks/DL22-net-orbit-600x497.png'}
                              loading={'lazy'}
                              width={200}
                              height={148}
                              quality={100}
                              formats={["auto", "webp", "avif"]}
                              alt="Orbit Smart Lock"
                          />
                          <p>
                            <span>Orbit<sup>&trade;</sup></span>
                          </p>
                        </div>
                      </Link>
                    </div>

                    <img src={mobileSmartDivider} className={'mobile-smart-divider'} alt=""/>

                    <div className="digilink-lock">
                      <img src={desktopSmartDivider} alt=""/>
                      <Link to={urlDirectory + 'smart-locks/#gotoDigilink'}>
                        <div className="thumbnail">
                          <StaticImage
                              src={'../../images/locks/DL22-digilink-600x497.png'}
                              loading={'lazy'}
                              width={200}
                              height={148}
                              quality={100}
                              formats={["auto", "webp", "avif"]}
                              alt="DigiLink Smart Lock"
                          />
                          <p>
                            <span>DigiLink<sup>&reg;</sup></span>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="smart-digilink-container">
                    <div className="thumbnail">
                      <StaticImage
                          src={'../../images/locks/DL22-digilink-600x497.png'}
                          loading={'lazy'}
                          width={200}
                          height={148}
                          quality={100}
                          formats={["auto", "webp", "avif"]}
                          alt="DigiLink Smart Lock"
                      />
                      <p>
                        <span>DigiLink<sup>&reg;</sup></span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              :
              <section className="smart-locks">
                <div className="container">
                  <h2 className={'support-pad'}>
                    <Trans>
                      product_specific_support
                    </Trans>
                  </h2>
                  <h2 className="sub support support-pad">
                    <Trans>
                      smart_locks
                    </Trans>
                  </h2>

                  <div className="smart-lock-wrap">
                    <Link to={urlDirectory + 'smart-locks/aspire/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-net-aspire-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Aspire Smart Lock"
                        />
                        <p>
                          <span>Aspire<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'smart-locks/versa/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-net-versa-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Versa Smart Lock"
                        />
                        <p>
                          <span>Versa<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'smart-locks/orbit/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-net-orbit-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Orbit Smart Lock"
                        />
                        <p>
                          <span>Orbit<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                    <div className="digilink-lock">
                      <Link to={urlDirectory + 'smart-locks/digilink/'}>
                        <div className="thumbnail">
                          <StaticImage
                              src={'../../images/locks/DL22-digilink-600x497.png'}
                              loading={'lazy'}
                              width={200}
                              height={148}
                              quality={100}
                              formats={["auto", "webp", "avif"]}
                              alt="DigiLink Smart Lock"
                          />
                          <p>
                            <span>DigiLink<sup>&reg;</sup></span>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="smart-digilink-container">
                    <div className="thumbnail">
                      <StaticImage
                          src={'../../images/locks/DL22-digilink-600x497.png'}
                          loading={'lazy'}
                          width={200}
                          height={148}
                          quality={100}
                          formats={["auto", "webp", "avif"]}
                          alt="DigiLink Smart Lock"
                      />
                      <p>
                        <span>DigiLink<sup>&reg;</sup></span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
        }

        <div className="section-delimeter container"/>
        {
          !isSupport ?
              <section className="electronic-locks">
                <div className="container">
                  <h2 className="sub">
                    <Trans>
                      electronic_locks
                    </Trans>
                  </h2>
                  <p><Trans>electronic_locks_copy</Trans></p>
                  <div className="row">
                    <Link to={urlDirectory + 'electronic-locks/#gotoAspire'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-aspire-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Aspire Electronic Lock"
                        />
                        <p>
                          <span>Aspire<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'electronic-locks/#gotoVersa'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-versa-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Versa Electronic Lock"
                        />
                        <p>
                          <span>Versa<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'electronic-locks/#gotoOrbit'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-orbit-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Orbit Electronic Lock"
                        />
                        <p>
                          <span>Orbit<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
              :
              <section className="electronic-locks">
                <div className="container">
                  <h2 className="sub">
                    <Trans>
                      electronic_locks
                    </Trans>
                  </h2>
                  <div className="row">
                    <Link to={urlDirectory + 'electronic-locks/aspire/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-aspire-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Aspire Electronic Lock"
                        />
                        <p>
                          <span>Aspire<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'electronic-locks/versa/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-versa-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Versa Electronic Lock"
                        />
                        <p>
                          <span>Versa<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'electronic-locks/orbit/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-orbit-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Orbit Electronic Lock"
                        />
                        <p>
                          <span>Orbit<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
        }

        {
          isSupport ?
              <section className="electronic-locks numeris">
                <div className="container legacy">
                  <h2 className="sub numeris">
                    <Trans>
                      numeris_locks
                    </Trans>
                  </h2>
                  <div className="row numeris">
                    <Link to={urlDirectory + 'electronic-locks/numeris/aspire/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-ba-aspire-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Aspire Electronic Lock"
                        />
                        <p>
                          <span>Aspire<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'electronic-locks/numeris/versa/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-versa-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={148}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Versa Electronic Lock"
                        />
                        <p>
                          <span>Versa<sup>&trade;</sup></span>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
              : null
        }
        <section className="legacy-locks">
          <div className="container legacy">
            <h2 className="sub legacy">
              <Trans>
                legacy_locks
              </Trans>
            </h2>
            <div className="row legacy">
              <Link to={urlDirectory + 'electronic-locks/axis/'}>
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-axis-600x497.png'}
                      loading={'lazy'}
                      width={200}
                      height={148}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="Axis Electronic Lock"
                  />
                  <p>
                    <span>Axis<sup>&trade;</sup></span>
                  </p>
                </div>
              </Link>
              <Link to={urlDirectory + 'electronic-locks/cue/'}>
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-cue-600x497.png'}
                      loading={'lazy'}
                      width={200}
                      height={148}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="Cue Electronic Lock"
                  />
                  <p>
                    <span>Cue<sup>&trade;</sup></span>
                  </p>
                </div>
              </Link>
              <Link to={urlDirectory + 'electronic-locks/sola/'}>
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-sola-600x497.png'}
                      loading={'lazy'}
                      width={200}
                      height={148}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="Sola Electronic Lock"
                  />
                  <p>
                    <span>Sola<sup>&trade;</sup></span>
                  </p>
                </div>
              </Link>
              <Link to={urlDirectory + 'electronic-locks/range/'}>
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-range-600x497.png'}
                      loading={'lazy'}
                      width={200}
                      height={148}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="Range Electronic Lock"
                  />
                  <p>
                    <span>Range<sup>&trade;</sup></span>
                  </p>
                </div>
              </Link>

            </div>
            <div className="row">
              <Link to={'/support/electronic-locks/a-series-standard/'}>
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-4Gstand-600x497.png'}
                      loading={'lazy'}
                      width={200}
                      height={148}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="Standard"
                  />
                  <p>A Series Standard</p>
                </div>
              </Link>
              <Link to={'/support/electronic-locks/a-series-vertical/'}>
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-4Gvertical-600x497.png'}
                      loading={'lazy'}
                      width={200}
                      height={150}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="Vertical"
                  />
                  <p>A Series Vertical</p>
                </div>
              </Link>
              <Link to={'/support/electronic-locks/classic-cam/'}>
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-classiccam-600x497.png'}
                      loading={'lazy'}
                      width={200}
                      height={150}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="Vertical"
                  />
                  <p>Classic Cam</p>
                </div>
              </Link>
            </div>
            {
              isSupport ?
                  <div className="row">
                    <Link to={urlDirectory + 'electronic-locks/t-series/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-tseries-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={150}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="T-series"
                        />
                        <p>T-series</p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'electronic-locks/kte-kpe/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-ktekpe-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={150}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="KTE/KPE"
                        />
                        <p>KTE/KPE</p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'electronic-locks/2nd-generation/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-2G-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={150}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="2nd Generation"
                        />
                        <p>2nd Generation</p>
                      </div>
                    </Link>
                    <Link to={urlDirectory + 'electronic-locks/1st-generation/'}>
                      <div className="thumbnail">
                        <StaticImage
                            src={'../../images/locks/DL22-1G-600x497.png'}
                            loading={'lazy'}
                            width={200}
                            height={150}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="1st Generation"
                        />
                        <p>1st Generation</p>
                      </div>
                    </Link>
                  </div>
                  : null
            }
          </div>
        </section>
        <div className="section-delimeter container"/>
        <section className="electronic-locks">
          <div className="container mech">
            <h2 className="sub">
              <Trans>
                mechanical_lock
              </Trans>
            </h2>
            {
              !isSupport ?
                  <p><Trans>mechanical_lock_copy</Trans></p>
                  :
                  null
            }
            <div className="row mech">
              <Link to={urlDirectory + 'mechanical-locks/mech/'}>
                <div className="thumbnail">
                  <StaticImage
                      src={'../../images/locks/DL22-mech-600x497.png'}
                      loading={'lazy'}
                      width={200}
                      height={148}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <span>Mech<sup>&trade;</sup></span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </>
  )
};
export default Locks;
