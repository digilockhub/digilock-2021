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
        <Seo title={t('Home')}/>
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
                <Link to={'#'}>
                  <div className="col btn-industry workspace">
                    <span><Trans>workspace</Trans></span>
                  </div>
                </Link>
                <Link to={'#'}>
                  <div className="col btn-industry education">
                    <span><Trans>education</Trans></span>
                  </div>
                </Link>
                <Link to={'#'}>
                  <div className="col btn-industry health-fitness">
                    <span><Trans>health_fitness</Trans></span>
                  </div>
                </Link>
                <Link to={'#'}>
                  <div className="col btn-industry healthcare">
                    <span><Trans>healthcare</Trans></span>
                  </div>
                </Link>
                <Link to={'#'}>
                  <div className="col btn-industry retail">
                    <span><Trans>retail</Trans></span>
                  </div>
                </Link>
                <Link to={'#'}>
                  <div className="col btn-industry hospitality">
                    <span><Trans>hospitality</Trans></span>
                  </div>
                </Link>
                <Link to={'#'}>
                  <div className="col btn-industry pro-sports">
                    <span><Trans>pro_sports</Trans></span>
                  </div>
                </Link>
                <Link to={'#'}>
                  <div className="col btn-industry manufacturing">
                    <span><Trans>manufacturing</Trans></span>
                  </div>
                </Link>
                <Link to={'#'}>
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
              <a href="" className="btn btn--orange">
                <Trans>see_locks</Trans>
              </a>
            </div>
          </section>


          {/*<a href="" className="btn btn--blue">Primary Button</a>*/}
          {/*<a href="" className="btn btn--trans">Secondary Button</a>*/}
          {/*<a href="" className="btn btn--orange">Secondary Button</a>*/}
          {/*<p>*/}
          {/*  <button type="button" onClick={handleShowModal}>*/}
          {/*    Open Announcement*/}
          {/*  </button>*/}
          {/*</p>*/}
          {/*<Modal show={showModal} handleClose={handleShowModal}>*/}
          {/*  <h1>Announcement</h1>*/}
          {/*  <p>*/}
          {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis eros, luctus in interdum a, consectetur in ligula. Aenean non leo vitae purus viverra interdum. Donec nec nulla vitae risus luctus feugiat. Donec aliquam aliquam metus non fermentum. Sed laoreet ultricies luctus. Donec pellentesque ipsum in sapien cursus, vitae faucibus mi dignissim. Donec rhoncus massa suscipit magna tempus, at congue velit congue. Integer tempus est dui. Suspendisse vestibulum vel leo eu eleifend. Nulla ac arcu iaculis, consequat nunc vel, vestibulum arcu. Nullam tellus dui, tincidunt vestibulum nisi vitae, aliquam pharetra ex. In tristique volutpat tellus at blandit. Phasellus diam mi, posuere vel auctor at, placerat nec libero. Nullam quis diam tempus, dictum leo non, ornare leo. Praesent tincidunt malesuada magna vel consequat. Donec vehicula placerat risus.*/}
          {/*  </p>*/}
          {/*</Modal>*/}
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
