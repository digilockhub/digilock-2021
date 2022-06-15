import React from "react";
import {Trans, useTranslation, I18nextContext} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/04-2-project-01a.jpg';
import Project02 from './images/project/04-2-project-02a.jpg';
import Project03 from './images/project/04-2-project-03a.jpg';
import Project04 from './images/project/04-2-project-04a.jpg';
import Project05 from './images/project/04-2-project-05a.jpg';
import Project06 from './images/project/04-2-project-06a.jpg';
import Project07 from './images/project/04-2-project-07a.jpg';
import Project08 from './images/project/04-2-project-08a.jpg';
import Project09 from './images/project/04-2-project-09a.jpg';
import BCResponsivePlayer from "../../../components/video-player/BCResponsivePlayer";

const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project01,
      originalAlt: 'Cabinets Secured with Digilock 4G at Erasmus MC',
      thumbnail: Project01,
      thumbnailLabel: 'Erasmus MC',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project02,
      originalAlt: 'Aspire Electronic Locks Installed at the Deltares Research Institutes',
      thumbnail: Project02,
      thumbnailLabel: 'Deltares Research Institute',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project03,
      originalAlt: 'St. Antonius Lockers Secured with Versa RFID',
      thumbnail: Project03,
      thumbnailLabel: 'St Antonius',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project04,
      originalAlt: 'VvAA Office with Aspire Electronic Locks',
      thumbnail: Project04,
      thumbnailLabel: 'VvAA',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project05,
      originalAlt: 'Versa Electronic Locks Installed in the Freezlab Cryogenics Locker Room',
      thumbnail: Project05,
      thumbnailLabel: 'Freezlab',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/sola/')
    },
    {
      original: Project06,
      originalAlt: 'Nextlock RFID Electronic Locks Installed at Roche Pharmaceuticals',
      thumbnail: Project06,
      thumbnailLabel: 'Roche Pharmaceuticals',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project07,
      originalAlt: 'Versa Standard Keypad in Lonza Locker Room',
      thumbnail: Project07,
      thumbnailLabel: 'Lonza',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/sola/')
    },
    {
      original: Project08,
      originalAlt: 'Aspire Standard Keypad with Pull Handle at SBOH',
      thumbnail: Project08,
      thumbnailLabel: 'SBOH',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project09,
      originalAlt: 'Distribution Systems International Medical Cart Secured with Horizontal Body Versa Mini RFID',
      thumbnail: Project09,
      thumbnailLabel: 'Distribution Systems Intl',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    }
  ];
  const projectAsides = [

    '<h2>Erasmus MC</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'/">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Deltares Research Institutes</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>St Antonius</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Versa Standard</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">RFID</a></p>',

    '<h2>VvAA</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Freezlab</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Sola</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Keypad</a></p>',

    '<h2>Roche Pharmaceuticals</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">RFID</a></p>',

    '<h2>Lonza</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Nextlock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Sola</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Keypad</a></p>',

    '<h2>SBOH</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Distribution Systems Intl</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Versa Small Profile</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">RFID</a></p>'
  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Digilock Healthcare Solutions')}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-healthcare.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                workspace
              </Trans>
            </h6>
          </section>
          <section className="industry-carousel">
            <div className="container">
              <CarouselWrapper
                  items={projectImages}
                  asides={projectAsides}
                  projectAside={<ProjectAside />}
                  showThumbnails={true}
                  showBullets={true}
                  dynamicAside={true}
                  allowImageClick={true}
              />
            </div>
          </section>
          <section className="industry-copy healthcare">
            <div className="container">
              <p>
                <Trans>education_copy</Trans>
              </p>
              <BCResponsivePlayer
                  vid={'6157021087001'}
                  cls={'digilink-video'}
                  dynId={'DigilinkVideo'}
              />
            </div>
          </section>
          <section className="industry-uses">
            <div className="container">
              <h2><Trans>popular_keyless</Trans></h2>
              <div className="uses-items">
                <div className="uses-item">
                  <StaticImage
                      src="./images/applications/04-1-application-04a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>patient_applications</Trans>
                  </p>
                </div>
                <div className="uses-item">
                  <StaticImage
                      src="./images/applications/04-1-application-02a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>staff_locker_rooms</Trans>
                  </p>
                </div>
                <div className="uses-item">
                  <StaticImage
                      src="./images/applications/04-1-application-03a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>medical_carts</Trans>
                  </p>
                </div>
                <div className="uses-item">
                  <StaticImage
                      src="./images/applications/04-1-application-01a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>exam_rooms</Trans>
                  </p>
                </div>
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
