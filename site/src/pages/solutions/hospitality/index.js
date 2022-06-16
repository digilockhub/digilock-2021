import React from "react";
import {Trans, useTranslation, I18nextContext, Link} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/03-2-project-01a.jpg';
import Project02 from './images/project/03-2-project-02a.jpg';
import Project03 from './images/project/03-2-project-03a.jpg';
import Project04 from './images/project/03-2-project-04a.jpg';
import Project05 from './images/project/03-2-project-05a.jpg';
import Project06 from './images/project/03-2-project-06a.jpg';
import Project07 from './images/project/03-2-project-07a.jpg';
import Project08 from './images/project/03-2-project-08a.jpg';
import Project09 from './images/project/03-2-project-09a.jpg';

const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project01,
      originalAlt: 'Armani Hotel Room',
      thumbnail: Project01,
      thumbnailLabel: 'Armani Hotel',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project02,
      originalAlt: 'Digilock 4G Locks in the Spa at the Mirage',
      thumbnail: Project02,
      thumbnailLabel: 'The Mirage',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project03,
      originalAlt: 'Versa Electronic Locks Securing Lockers at the Ibis Hotel',
      thumbnail: Project03,
      thumbnailLabel: 'Ibis Hotel',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/sola/')
    },
    {
      original: Project04,
      originalAlt: 'Aspire Vertical Body in the Spa at the Edition Hotel',
      thumbnail: Project04,
      thumbnailLabel: 'Edition Hotel',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project05,
      originalAlt: 'Aspire Standard Keypad Installed at the Adare Manor',
      thumbnail: Project05,
      thumbnailLabel: 'Adare Manor',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project06,
      originalAlt: 'Custom Aspire Electronic Locks at the Ananti Club',
      thumbnail: Project06,
      thumbnailLabel: 'Ananti Club',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project07,
      originalAlt: 'Aspire Vertical Body Installed at Great Northern Golf',
      thumbnail: Project07,
      thumbnailLabel: 'Great Northern Golf',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project08,
      originalAlt: 'Yas Links Cabinets Secured with Aspire Electronic Locks',
      thumbnail: Project08,
      thumbnailLabel: 'Yas Links',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project09,
      originalAlt: 'Greenville Country Club Locker Room with Aspire Locks Installed',
      thumbnail: Project09,
      thumbnailLabel: 'Greenville Country Club',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    }
  ];
  const projectAsides = [
    '<h2>Armani Hotel</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>The Mirage</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Ibis Hotel</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Sola</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Keypad</a></p>',

    '<h2>Edition Hotel</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Adare Manor</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Ananti Club</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'/">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Great Northern Golf</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Yas Links</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Greenville Country Club</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>'
  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Digilock Hospitality Solutions')}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-hospitality.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                hospitality
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
          <section className="industry-copy">
            <div className="container">
              <p>
                <Trans>hospitality_copy</Trans>
              </p>
            </div>
          </section>
          <section className="industry-uses">
            <div className="container">
              <h2><Trans>popular_keyless</Trans></h2>
              <div className="uses-items">
                <Link to={'/products/smart-locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/03-1-application-03a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>staff_locker_rooms</Trans>
                  </p>
                </Link>
                <Link to={'/products/smart-locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/03-1-application-01a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>in_room_storage</Trans>
                  </p>
                </Link>
                <Link to={'/products/smart-locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/03-1-application-02a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>spa_fitness_center</Trans>
                  </p>
                </Link>
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
