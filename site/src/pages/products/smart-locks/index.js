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
            title={t('Digilock Commercial Keyless Locks For Hospitals, Hospitality and Corporations')}
            description={'Learn about the best industry commercial keyless locks that leverage proprietary technology and is supported by a dedicated customer service team.'}
        />
        <div className="products smart-locks-page">
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
                smart_locks
              </Trans>
            </h6>
          </section>
          <section className={'smart-locks-overview'}>
            <div className="container">
              <h1>
                <Trans>
                  sl_headline
                </Trans>
              </h1>
              <p>
                <Trans>
                  sl_headline_copy
                </Trans>
              </p>
              <div className="center">
                <ul>
                  <li><Trans>sl_headline_list_1</Trans></li>
                  <li><Trans>sl_headline_list_2</Trans></li>
                  <li><Trans>sl_headline_list_3</Trans></li>
                  <li><Trans>sl_headline_list_4</Trans></li>
                  <li><span onClick={handleShowModal}><Trans>sl_headline_list_5</Trans></span> <Trans>functionality</Trans></li>
                  <li><Trans>sl_headline_list_6</Trans></li>
                  <li><Trans>sl_headline_list_7</Trans></li>
                  <li><Trans>sl_headline_list_8</Trans></li>
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
                      src="../../../images/smart-locks/smart-aspire-four.png"
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
                    <Trans>sl_aspire_headline</Trans>
                  </h2>
                  <ul>
                    <li><Trans>sl_aspire_list1</Trans></li>
                    <li><Trans>sl_aspire_list2</Trans></li>
                    <li><Trans>sl_aspire_list3</Trans></li>
                    <li><Trans>sl_aspire_list4</Trans></li>
                    <li><Trans>sl_aspire_list5</Trans></li>
                  </ul>
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
