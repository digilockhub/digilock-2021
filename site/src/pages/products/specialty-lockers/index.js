import React, {useState, useEffect} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import phLogo from '../../../images/logos/logo-packagehold.svg';
import jbLogo from '../../../images/logos/logo-juicebar.svg';
import CustomLocalizedLink from "../../../components/locales/custom-localized-link";


const IndexPage = () => {

  const {t} = useTranslation();
  const [showModal, setShowModal] = useState(false);

  function handleScrollTo(elmID) {
    let offset = 150;
    if(elmID === 'juiceBar') {
      offset = 180;
    }
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: document.getElementById(elmID).offsetTop - offset
    });
  }

  useEffect(() => {
    if (document.location.hash === '#gotoJuiceBar') {
      handleScrollTo("juiceBar");
    }
    if (document.location.hash === '#gotoPackageHold') {
      handleScrollTo("packageHold");
    }
  }, []);

  return (
      <Layout>
        <Seo
            title={t('Specialty Lockers')}
            description={'FPO, Need Description'}
        />
        <div className="products specialty-lockers">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/lockers/hero-specialty.png"
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
                  <a onClick={(e) => {
                    handleScrollTo('packageHold')
                  }}><Trans>learn_more_about</Trans><Trans>packagehold</Trans></a>
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
                <div className="section-delimeter spacer"></div>
                <div className="grid-two-col-item-single center">
                  <h2><Trans>juicebar</Trans></h2>
                  <p><Trans>juice_solutions_copy</Trans></p>
                  <a onClick={(e) => {
                    handleScrollTo('juiceBar')
                  }}><Trans>learn_more_about</Trans><Trans>juicebar</Trans></a>
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
          <div id={'packageHold'} className="section-delimeter container"/>
          <section className="packagehold">
            <div className="container">
              <img src={phLogo} alt="PackageHold" width={'306'} height={'56'}/>
              <div className="ph-overview">
                <h1><Trans>package_headline</Trans></h1>
                <p><Trans>package_headline_copy</Trans></p>
              </div>
              <div className="grid-two-col">
                <div className="grid-two-col-item-single gtc-description is-reversable">
                  <div>
                    <h2><Trans>how_it_works</Trans></h2>
                    <ol>
                      <li><span><Trans>buy</Trans></span>. <Trans>ph_works_list1</Trans></li>
                      <li><span><Trans>ship</Trans></span>. <Trans>ph_works_list2</Trans></li>
                      <li><span><Trans>notify</Trans></span>. <Trans>ph_works_list3</Trans></li>
                      <li><span><Trans>pick_up</Trans></span>. <Trans>ph_works_list4</Trans></li>
                    </ol>
                  </div>
                </div>
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/lockers/ph-how-it-works.jpg"
                      loading={'lazy'}
                      width={490}
                      height={340}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
              </div>
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/lockers/ph-why-it-works.jpg"
                      loading={'lazy'}
                      width={490}
                      height={340}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single gtc-description is-reversable">
                  <div>
                    <h2><Trans>why_it_works</Trans></h2>
                    <ul>
                      <li><Trans>ph_why_list1</Trans></li>
                      <li><Trans>ph_why_list2</Trans></li>
                      <li><Trans>ph_why_list3</Trans></li>
                      <li><Trans>ph_why_list4</Trans></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid-two-col">
                <div className="grid-two-col-item-single gtc-description is-reversable">
                  <div>
                    <h2><Trans>where_it_works</Trans></h2>
                    <ol>
                      <li><span><Trans>workplace</Trans></span>. <Trans>ph_where_list1</Trans></li>
                      <li><span><Trans>residential</Trans></span>. <Trans>ph_where_list2</Trans></li>
                      <li><span><Trans>retail</Trans></span>. <Trans>ph_where_list3</Trans></li>
                      <li><span><Trans>university</Trans></span>. <Trans>ph_where_list4</Trans></li>
                    </ol>
                  </div>
                </div>
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/lockers/ph-where-it-works.jpg"
                      loading={'lazy'}
                      width={490}
                      height={340}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container"/>
          <section id={'juiceBar'} className="juicebar">
            <div className="container">
              <img className={'logo-jb'} src={jbLogo} alt="PackageHold" width={'272'} height={'64'}/>
              <div className="grid-two-col">
                <div className="grid-two-col-item-single">
                  <StaticImage
                      src="../../../images/lockers/jb-cafe.jpg"
                      loading={'lazy'}
                      width={490}
                      height={340}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                </div>
                <div className="grid-two-col-item-single gtc-description is-reversable">
                  <div>
                    <h2><Trans>jb_headline</Trans></h2>
                    <p><Trans>jb_headline_copy</Trans></p>
                    <ul>
                      <li><Trans>jb_list1</Trans></li>
                      <li><Trans>jb_list2</Trans></li>
                      <li><Trans>jb_list3</Trans></li>
                      <li><Trans>jb_list4</Trans></li>
                      <li><Trans>jb_list5</Trans></li>
                      <li><Trans>jb_list6</Trans></li>
                      <li><Trans>jb_list7</Trans></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="jb-gallery">
                <StaticImage
                    src="../../../images/lockers/jb-aquarium.jpg"
                    loading={'lazy'}
                    layout={'fixed'}
                    width={347}
                    height={266}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="NEED ALT TAG"
                />
                <StaticImage
                    src="../../../images/lockers/jb-apartment.jpg"
                    loading={'lazy'}
                    width={347}
                    height={266}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="NEED ALT TAG"
                />
                <StaticImage
                    src="../../../images/lockers/jb-gym.jpg"
                    loading={'lazy'}
                    width={347}
                    height={266}
                    quality={100}
                    formats={["auto", "webp", "avif"]}
                    alt="NEED ALT TAG"
                />
              </div>
            </div>
          </section>
          <section className="questions">
            <div className="container">
              <CustomLocalizedLink
                  goto="/contact/"
                  cls="btn btn--orange"
                  label={t('get_questions_answered')}
              />
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
