import React from "react";
import {Trans, useTranslation, I18nextContext, Link} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/02-2-project-01a.jpg'
import Project02 from './images/project/02-2-project-02a.jpg'
import Project03 from './images/project/02-2-project-03a.jpg'
import Project05 from './images/project/02-2-project-05a.jpg'
import Project06 from './images/project/02-2-project-06a.jpg'
import Project07 from './images/project/02-2-project-07a.jpg'
import Project08 from './images/project/02-2-project-08a.jpg'
import Project09 from './images/project/02-2-project-09a.jpg'
import Project10 from './images/project/02-2-project-10a.jpg'
import BCResponsivePlayer from "../../../components/video-player/BCResponsivePlayer";

const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project01,
      originalAlt: 'Locker Room Secured with Axis Locks at Let\'s Ride',
      thumbnail: Project01,
      thumbnailLabel: 'Let\'s Ride',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project02,
      originalAlt: 'Soul Cycle Locker Room Installed with Cue Electronic Locks.',
      thumbnail: Project02,
      thumbnailLabel: 'Soul Cycle',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project03,
      originalAlt: 'Digilock 4G Electronic Locks at Croatia Fitness',
      thumbnail: Project03,
      thumbnailLabel: 'Croatia Fitness',
      productLink: returnLocaleURL(sl, '/products/locks/')

    },
    {
      original: Project05,
      originalAlt: 'Axis Electronic Locks at Athlete Factory',
      thumbnail: Project05,
      thumbnailLabel: 'Athlete Factory',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project06,
      originalAlt: 'Mech Locks Installed on Trango Towers Cabinets',
      thumbnail: Project06,
      thumbnailLabel: 'Trango Towers',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project07,
      originalAlt: 'Electronic Lockers Secured with Cue at The Ride House',
      thumbnail: Project07,
      thumbnailLabel: 'The Ride House',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project08,
      originalAlt: 'UFC Locker Room Secured with Axis by Digilock',
      thumbnail: Project08,
      thumbnailLabel: 'UFC',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project09,
      originalAlt: 'Celare Electronic Lockers Secured with Custom Cue Locks at Earth Treks Climbing Gym',
      thumbnail: Project09,
      thumbnailLabel: 'Earth Treks',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project10,
      originalAlt: 'Digilock 4G Electronic Locks Installed at Roam Fitness',
      thumbnail: Project10,
      thumbnailLabel: 'Roam Fitness',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
  ]
  const projectAsides = [
    '<h2>Let\'s Ride</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'/">Keypad</a></p>',

    '<h2>Soul Cycle</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Croatia Fitness</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Cue</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Athlete Factory</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Trango Towers</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Dial Combo</a></p>',

    '<h2>The Ride House</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>UFC</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Earth Treks Climbing Gym</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Roam Fitness</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>'
  ]
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Keyless Lock Management for Athletic Facilities  | Digilock ')}
          description={'Digilock Keyless Lock Management With Our Athletic Facility Locker Locks offers convenience and Allows Guests To Worry Less About Personal Belongings. Learn How to Secure Your Athletic Facility and Offer Peace of Mind.'}
        />
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-health-fitness.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h1>
              <Trans>
                health_fitness
              </Trans>
            </h1>
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
          <section className="industry-copy health-fitness">
            <div className="container">
              <p>
                <Trans>health_fitness_copy</Trans>
              </p>
              <BCResponsivePlayer
                  vid={'6149132542001'}
                  cls={'digilink-video'}
                  dynId={'DigilinkVideo'}
              />
            </div>
          </section>
          <section className="industry-uses">
            <div className="container">
              <h2><Trans>popular_keyless</Trans></h2>
              <div className="uses-items">
                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/02-1-application-01a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>day_use_lockers</Trans>
                  </p>
                </Link>
                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/02-1-application-02a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>rental_lockers</Trans>
                  </p>
                </Link>
                <Link to={'/products/specialty-lockers/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/02-1-application-03a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>juicebar_charging_lockers</Trans>
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
