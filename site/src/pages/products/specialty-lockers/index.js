import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import aspireLogo from '../../../images/logos/logo-aspire.svg';
import versaLogo from '../../../images/logos/logo-versa.svg';
import orbitLogo from '../../../images/logos/logo-orbit.svg';
import digilinkLogo from '../../../images/logos/logo-digilink.svg';
import phLogo from '../../../images/logos/logo-packagehold.svg';
import BCResponsivePlayer from "../../../components/video-player/BCResponsivePlayer";
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
            title={t('Specialty Lockers')}
            description={'FPO, Need Description'}
        />
        <div className="products specialty-lockers">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/smart-locks/hero-smart.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                specialty_lockers
              </Trans>
            </h6>
          </section>
          <section className="locker-solutions">
            <div className="container">
              <h1><Trans>spl_headline</Trans></h1>
              <div className="grid-two-col">
                <div className="grid-two-col-item-single center">
                  <h2><Trans>packagehold</Trans></h2>
                  <p><Trans>package_solutions_copy</Trans></p>
                  <a><Trans>learn_more_about</Trans><Trans>packagehold</Trans></a>
                  <StaticImage
                      src="../../../images/lockers/locker-solutions-ph.png"
                      loading={'lazy'}
                      width={508}
                      height={307}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single center">
                  <h2><Trans>juicebar</Trans></h2>
                  <p><Trans>juice_solutions_copy</Trans></p>
                  <a><Trans>learn_more_about</Trans><Trans>juicebar</Trans></a>
                  <StaticImage
                      src="../../../images/lockers/locker-solutions-jb.png"
                      loading={'lazy'}
                      width={508}
                      height={307}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="packagehold">
            <div className="container">
              <img src={phLogo} alt="PackageHold"/>
              <div className="ph-overview">
                <h1><Trans>package_headline</Trans></h1>
                <p><Trans>package_headline_copy</Trans></p>
              </div>
              <div className="grid-two-col">
                <div className="grid-two-col-item-single is-reversable">
                  <img src={versaLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>sl_versa_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>sl_versa_list1</Trans></li>
                    <li><Trans>sl_versa_list2</Trans></li>
                    <li><Trans>sl_versa_list3</Trans></li>
                    <li><Trans>sl_versa_list4</Trans></li>
                    <li><Trans>sl_versa_list5</Trans></li>
                    <li><Trans>sl_versa_list6</Trans></li>
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
                      src="../../../images/smart-locks/smart-versa-four.png"
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
                      src="../../../images/smart-locks/smart-orbit-four.png"
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
                    <Trans>sl_orbit_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>sl_orbit_list1</Trans></li>
                    <li><Trans>sl_orbit_list2</Trans></li>
                    <li><Trans>sl_orbit_list3</Trans></li>
                    <li><Trans>sl_orbit_list4</Trans></li>
                    <li><Trans>sl_orbit_list5</Trans></li>
                    <li><Trans>sl_orbit_list6</Trans></li>
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
          <section className="smart-digilink">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <img className={'item-single-logo'} src={digilinkLogo} width={'225'} height={'88'} alt=""/>
                  <h2>
                    <Trans>sl_digilink_headline</Trans>
                  </h2>
                  <p><Trans>sl_digilink_headline_copy</Trans></p>
                  <ul>
                    <li><Trans>sl_digilink_list1</Trans></li>
                    <li><Trans>sl_digilink_list2</Trans></li>
                    <li><Trans>sl_digilink_list3</Trans></li>
                    <li><Trans>sl_digilink_list4</Trans></li>
                    <li><Trans>sl_digilink_list5</Trans></li>
                  </ul>
                  <div className="sl-buttons">
                    <a href="/products/locks/" className="btn btn--orange">
                      <Trans>download_brochure</Trans>
                    </a>
                  </div>
                </div>
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/smart-locks/smart-digilink.png"
                      loading={'lazy'}
                      width={624}
                      height={461}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <BCResponsivePlayer
                      vid={'6216703423001'}
                      cls={'digilink-video'}
                      dynId={'DigilinkVideo'}
                      translation={t('intro_digilink')}
                  />
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
