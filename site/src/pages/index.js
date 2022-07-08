import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../components/layout";
import Seo from "../components/seo";
import {graphql} from 'gatsby';
import BCResponsivePlayerDynId from '../components/video-player/BCResponsivePlayerDynId'
import BCResponsivePlayer from '../components/video-player/BCResponsivePlayer'
import SlickSlider from '../components/carousel/SlickSlider';
import Modal from '../components/modals/modal'


import clientLogos from '../images/home/client-logos/logos_group.png'

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(prevShowModal => !prevShowModal)
  }

  const {t} = useTranslation();
  return (
      <Layout>
        <Seo
            title={t('Digilock Electronic Locks Secure Organizational Storage')}
            description={'Keyless locks are electronic digital locks that are often more secure, more convenient, and more effective than traditional mechanical locks. Find out how they work and how to install them.'}
        />
        <div className="home">
          <section className="hero">
            <BCResponsivePlayerDynId
                vid={'6302604050001'}
                dynId={'HeroVideo'}
                translation={t('hero_video_caption')}
            />

          </section>
          <section className={'lock-solutions'}>
            <div className="container">
              <h1>
                <Trans>section_one_headline</Trans>
              </h1>
              <div className={'grid'}>
                <div className="col copy-container right">
                  <h2>
                    <Trans>section_one_headline_2</Trans>
                  </h2>
                  <p>
                    <Trans>section_one_headline_2_copy</Trans>
                  </p>
                </div>
                <div className="delimeter"/>
                <div className="col copy-container left">
                  <h2>
                    <Trans>section_one_headline_3</Trans>
                  </h2>
                  <p>
                    <Trans>section_one_headline_3_copy</Trans>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container"/>

          <section className="clients">
            <div className="container">
              <h2>
                Known and Trusted
              </h2>
              <div>
                <SlickSlider />
              </div>
            </div>
          </section>

          <div className="section-delimeter bump-up container"/>
          <section className="industries">
            <div className="container">
              <h1>Solutions tailored to your industry</h1>

              <div className="industries-grid">
                <Link to={'/solutions/workspace/'}>
                  <div className="col btn-industry workspace">
                    <span><Trans>workspace</Trans></span>
                  </div>
                </Link>
                <Link to={'/solutions/education/'}>
                  <div className="col btn-industry education">
                    <span><Trans>education</Trans></span>
                  </div>
                </Link>
                <Link to={'/solutions/health-fitness/'}>
                  <div className="col btn-industry health-fitness">
                    <span><Trans>health_fitness</Trans></span>
                  </div>
                </Link>
                <Link to={'/solutions/healthcare/'}>
                  <div className="col btn-industry healthcare">
                    <span><Trans>healthcare</Trans></span>
                  </div>
                </Link>
                <Link to={'/solutions/retail/'}>
                  <div className="col btn-industry retail">
                    <span><Trans>retail</Trans></span>
                  </div>
                </Link>
                <Link to={'/solutions/hospitality/'}>
                  <div className="col btn-industry hospitality">
                    <span><Trans>hospitality</Trans></span>
                  </div>
                </Link>
                <Link to={'/solutions/pro-sports/'}>
                  <div className="col btn-industry pro-sports">
                    <span><Trans>pro_sports</Trans></span>
                  </div>
                </Link>
                <Link to={'/solutions/manufacturing/'}>
                  <div className="col btn-industry manufacturing">
                    <span><Trans>manufacturing</Trans></span>
                  </div>
                </Link>
                <Link to={'/solutions/government/'}>
                  <div className="col btn-industry government">
                    <span><Trans>government</Trans></span>
                  </div>
                </Link>

              </div>
            </div>
          </section>
          <div className="section-delimeter container"/>
          <section className="smart">
            <div className="container">
              <h1><Trans>generation_smart</Trans></h1>
              <p><Trans>
                generation_smart_copy
              </Trans></p>
              <BCResponsivePlayer
                  vid={'6216703423001'}
                  cls={'digilink-video'}
                  dynId={'DigilinkVideo'}
                  translation={t('intro_digilink')}
              />
            </div>
          </section>
          <section className="see-locks">
            <div className="container">
              <a href="/products/locks/" className="btn btn--orange">
                <Trans>see_locks</Trans>
              </a>
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
