import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import aspireLogo from '../../../images/logos/logo-aspire.svg';
import versaLogo from '../../../images/logos/logo-versa.svg';
import orbitLogo from '../../../images/logos/logo-orbit.svg';
import axisLogo from '../../../images/logos/logo-axis.svg';
import cueLogo from '../../../images/logos/logo-cue.svg';
import solaLogo from '../../../images/logos/logo-sola.svg';
import rangeLogo from '../../../images/logos/logo-range.svg';
import Modal from '../../../components/modals/modal';

const IndexPage = () => {

  const {t} = useTranslation();
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    const bodyElm = document.body;
    setShowModal(prevShowModal => !prevShowModal);
    bodyElm.classList.toggle('stop-body-scroll');
  }

  return (
      <Layout>
        <Seo
            title={t('Digilock Commercial Keyless Locks For Hospitals, Hospitality and Corporations')}
            description={'Learn about the best industry commercial keyless locks that leverage proprietary technology and is supported by a dedicated customer service team.'}
        />
        <div className="products electronic-locks-page">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/electronic-locks/hero-electronic.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                electronic_locks
              </Trans>
            </h6>
          </section>
          <section className={'smart-locks-overview'}>
            <div className="container">
              <h1>
                <Trans>
                  el_headline
                </Trans>
              </h1>
              <p>
                <Trans>
                  el_headline_copy
                </Trans>
              </p>
              <div className="center">
                <ul>
                  <li><Trans>el_headline_list_1</Trans></li>
                  <li><Trans>el_headline_list_2</Trans></li>
                  <li><Trans>el_headline_list_3</Trans></li>
                  <li><span onClick={handleShowModal}><Trans>el_headline_list_4</Trans></span></li>
                  <li><Trans>el_headline_list_5</Trans></li>
                  <li><Trans>el_headline_list_6</Trans></li>
                  <li><Trans>el_headline_list_7</Trans></li>
                  <li><Trans>el_headline_list_8</Trans></li>
                  <li><Trans>el_headline_list_9</Trans></li>
                </ul>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="smart-aspire">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/electronic-locks/elec-aspire-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single">
                  <img src={aspireLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>el_aspire_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>el_aspire_list1</Trans></li>
                    <li><Trans>el_aspire_list2</Trans></li>
                    <li><Trans>el_aspire_list3</Trans></li>
                    <li><Trans>el_aspire_list4</Trans></li>
                    <li><Trans>el_aspire_list5</Trans></li>
                    <li><Trans>el_aspire_list6</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>see_specs</Trans>
                    </a>
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>download_keypad_brochure</Trans>
                    </a>
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>download_rfid_brochure</Trans>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="smart-versa">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single is-reversable">
                  <img src={versaLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>el_versa_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>el_versa_list1</Trans></li>
                    <li><Trans>el_versa_list2</Trans></li>
                    <li><Trans>el_versa_list3</Trans></li>
                    <li><Trans>el_versa_list4</Trans></li>
                    <li><Trans>el_versa_list5</Trans></li>
                    <li><Trans>el_versa_list6</Trans></li>
                    <li><Trans>el_versa_list7</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>see_specs</Trans>
                    </a>
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>download_brochure</Trans>
                    </a>
                  </div>
                </div>
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/electronic-locks/elec-versa-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="smart-orbit">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/electronic-locks/elec-orbit-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single">
                  <img src={orbitLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>el_orbit_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>el_orbit_list1</Trans></li>
                    <li><Trans>el_orbit_list2</Trans></li>
                    <li><Trans>el_orbit_list3</Trans></li>
                    <li><Trans>el_orbit_list4</Trans></li>
                    <li><Trans>el_orbit_list5</Trans></li>
                    <li><Trans>el_orbit_list6</Trans></li>
                    <li><Trans>el_orbit_list7</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/locks/" className="btn btn--orange">
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
          <div className="section-delimeter container" />
          <section className="legacy-locks-overview">
            <div className="container">
              <h2>
                <Trans>
                  legacy_headline
                </Trans>
              </h2>
              <p>
                <Trans>
                  legacy_headline_copy
                </Trans>
              </p>
              <div className="center">
                <ul>
                  <li><span onClick={handleShowModal}><Trans>legacy_headline_list_1</Trans></span></li>
                  <li><Trans>legacy_headline_list_2</Trans></li>
                  <li><Trans>legacy_headline_list_3</Trans></li>
                  <li><Trans>legacy_headline_list_4</Trans></li>
                  <li><Trans>legacy_headline_list_5</Trans></li>
                </ul>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="legacy-axis">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single is-reversable">
                  <img src={axisLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>el_axis_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>el_axis_list1</Trans></li>
                    <li><Trans>el_axis_list2</Trans></li>
                    <li><Trans>el_axis_list3</Trans></li>
                    <li><Trans>el_axis_list4</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>see_specs</Trans>
                    </a>
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>download_brochure</Trans>
                    </a>
                  </div>
                </div>
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/electronic-locks/elec-axis-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="legacy-cue">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/electronic-locks/elec-cue-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single">
                  <img src={cueLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>el_cue_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>el_cue_list1</Trans></li>
                    <li><Trans>el_cue_list2</Trans></li>
                    <li><Trans>el_cue_list3</Trans></li>
                    <li><Trans>el_cue_list4</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/locks/" className="btn btn--orange">
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
          <div className="section-delimeter container" />
          <section className="legacy-sola">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single is-reversable">
                  <img src={solaLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>el_sola_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>el_sola_list1</Trans></li>
                    <li><Trans>el_sola_list2</Trans></li>
                    <li><Trans>el_sola_list3</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>see_specs</Trans>
                    </a>
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>download_brochure</Trans>
                    </a>
                  </div>
                </div>
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/electronic-locks/elec-sola-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="legacy-range">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/electronic-locks/elec-range-four.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single">
                  <img src={rangeLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>el_range_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>el_range_list1</Trans></li>
                    <li><Trans>el_range_list2</Trans></li>
                    <li><Trans>el_range_list3</Trans></li>
                    <li><Trans>el_range_list4</Trans></li>
                    <li><Trans>el_range_list5</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/locks/" className="btn btn--orange">
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
          <Modal show={showModal} handleClose={handleShowModal}>
            <div className="modal-content">
              <p dangerouslySetInnerHTML={{__html:t('sl_modal_shared')}} />
              <p dangerouslySetInnerHTML={{__html:t('sl_modal_assigned')}} />
            </div>
          </Modal>
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
