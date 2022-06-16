import React from "react";
import {Trans, useTranslation, I18nextContext, Link} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/05-2-project-01a.jpg';
import Project02 from './images/project/05-2-project-02a.jpg';
import Project03 from './images/project/05-2-project-03a.jpg';
import Project04 from './images/project/05-2-project-04a.jpg';
import Project05 from './images/project/05-2-project-05a.jpg';
import Project06 from './images/project/05-2-project-06a.jpg';
import Project07 from './images/project/05-2-project-07a.jpg';
import Project08 from './images/project/05-2-project-08a.jpg';


const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project01,
      originalAlt: 'Day Use Lockers Secured with Cue by Digilock at Mount Royal State University',
      thumbnail: Project01,
      thumbnailLabel: 'Mount Royal University',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project02,
      originalAlt: 'Iowa State University Athletic Lockers Secured by Cue Electronic Locks',
      thumbnail: Project02,
      thumbnailLabel: 'Iowa State University',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project03,
      originalAlt: 'The John & Jeanne McCoy Locker Room at Ohio State University',
      thumbnail: Project03,
      thumbnailLabel: 'Ohio State University',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project04,
      originalAlt: 'Longhorn\'s Locker Room at the University of Texas',
      thumbnail: Project04,
      thumbnailLabel: 'University of Texas',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project05,
      originalAlt: 'Student Lockers secured with Axis at Alfa College',
      thumbnail: Project05,
      thumbnailLabel: 'Alfa College',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project06,
      originalAlt: 'Colorado College Student Lockers with Cue Electronic Locks',
      thumbnail: Project06,
      thumbnailLabel: 'Colorado College',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project07,
      originalAlt: 'Loyola University Locker Room Installed with Cue Electronic Locks',
      thumbnail: Project07,
      thumbnailLabel: 'Loyola University',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project08,
      originalAlt: 'Cue by Digilock in Princeton University Student Locker Room',
      thumbnail: Project08,
      thumbnailLabel: 'Princeton University',
      productLink: returnLocaleURL(sl, '/products/locks/')

    }
  ];
  const projectAsides = [

    '<h2>Mount Royal University</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Iowa State University</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Ohio State University</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>University of Texas</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Alfa College</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Versa Mini</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Colorado College</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Cue</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Loyola University</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Princeton University</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Cue</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>'

  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Digilock Education Solutions')}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-education.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                education
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
                <Trans>education_copy</Trans>
              </p>
            </div>
          </section>
          <section className="industry-uses">
            <div className="container">
              <h2><Trans>popular_keyless</Trans></h2>
              <div className="uses-items">
                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/05-1-application-01a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>athletic_facilities</Trans>
                  </p>
                </Link>
                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/05-1-application-02a.jpg"
                      loading={'lazy'}
                      width={353}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>library_storage</Trans>
                  </p>
                </Link>
                <Link to={'/products/specialty-lockers/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/05-1-application-03a.jpg"
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
