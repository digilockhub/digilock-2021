import React from "react";
import {Trans, useTranslation, I18nextContext, Link} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/09-2-project-01a.jpg';
import Project02 from './images/project/09-2-project-02a.jpg';
import Project03 from './images/project/09-2-project-03a.jpg';
import Project04 from './images/project/09-2-project-04a.jpg';
import Project05 from './images/project/09-2-project-05a.jpg';
import Project06 from './images/project/09-2-project-06a.jpg';
import Project07 from './images/project/09-2-project-07a.jpg';

const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project01,
      originalAlt: 'Polycarbonate Electronic Lockers Secured with Digilock Cue at California Tesla Factory',
      thumbnail: Project01,
      thumbnailLabel: 'Tesla',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/cue/')

    },
    {
      original: Project02,
      originalAlt: 'Versa Electronic Locks Installed on Employee Lockers at Vreugdenhil Dairy Foods',
      thumbnail: Project02,
      thumbnailLabel: 'Vreugdenhil Dairy Foods',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project03,
      originalAlt: 'Axis RFID Electronic Locks at Huybregts Locker Room',
      thumbnail: Project03,
      thumbnailLabel: 'Huybregts',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project04,
      originalAlt: 'Bohemilk Lockers Installed with Axis RFID Electronic Locks',
      thumbnail: Project04,
      thumbnailLabel: 'Bohemilk',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project05,
      originalAlt: 'Lockers Secured with Digilock 4G Electronic Locks at Fitbit',
      thumbnail: Project05,
      thumbnailLabel: 'Fitbit',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project06,
      originalAlt: 'Volkswagen Headquarters Employee Lockers Secured with Axis RFID',
      thumbnail: Project06,
      thumbnailLabel: 'Volkswagen',
      productLink: returnLocaleURL(sl, '/products/numeris/aspire/')
    },
    {
      original: Project07,
      originalAlt: 'LIG Next1 Lockers Installed with Digilock 4G Electronic Locks',
      thumbnail: Project07,
      thumbnailLabel: 'LIG Nex1',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    }
  ];
  const projectAsides = [
    '<h2>Tesla<span>California</span></h2><br />' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/cue/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/cue/')+'">Cue</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/cue/')+'">Keypad</a></p>',

    '<h2>Vreugdenhil Dairy Foods</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Versa Standard</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">RFID</a></p>',

    '<h2>Huybregts</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">RFID</a></p>',

    '<h2>Bohemilk</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">RFID</a></p>',

    '<h2>Fitbit</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Volkswagen</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Aspire</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">RFID</a></p>',

    '<h2>LIG Nex1</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>'
  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Digilock Manufacturing Solutions')}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-manufacturing.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                manufacturing
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
                <Trans>manufacturing_copy</Trans>
              </p>
            </div>
          </section>
          <section className="industry-uses">
            <div className="container">
              <h2><Trans>popular_keyless</Trans></h2>
              <div className="uses-items">
                <Link to={'/products/smart-locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/09-1-application-01a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>staff_lockers</Trans>
                  </p>
                </Link>
                <Link to={'/products/smart-locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/solutions2.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>tool_storage</Trans>
                  </p>
                </Link>
                <Link to={'/products/specialty-lockers/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/09-1-application-03a.jpg"
                      loading={'lazy'}
                      width={349}
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
