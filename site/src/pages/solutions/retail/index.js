 import React from "react";
import {Trans, useTranslation, I18nextContext, Link} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/08-2-project-01a.jpg';
import Project02 from './images/project/08-2-project-02a.jpg';
import Project03 from './images/project/08-2-project-03a.jpg';
import Project04 from './images/project/08-2-project-04a.jpg';
import Project05 from './images/project/08-2-project-05a.jpg';
import Project07 from './images/project/08-2-project-07a.jpg';
import Project08 from './images/project/08-2-project-08a.jpg';
import Project09 from './images/project/Tommy Hilfiger_b-1440x520.png';
import BCResponsivePlayer from "../../../components/video-player/BCResponsivePlayer";

const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project09,
      originalAlt: 'Tommy Hilfiger',
      thumbnail: Project09,
      thumbnailLabel: 'Tommy Hilfiger',
      productLink: returnLocaleURL(sl, '/products/locks/')

    },
    {
      original: Project01,
      originalAlt: 'Digilock 4G Electronic Locks Installed at La Maison Simons',
      thumbnail: Project01,
      thumbnailLabel: 'La Maison Simons',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project02,
      originalAlt: 'Joann Fabrics and Crafts Employee Lockers Secured with Digilock Cue',
      thumbnail: Project02,
      thumbnailLabel: 'Joann Fabrics',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project03,
      originalAlt: 'Aspire Vertical Body Electronic Locks in the Estonian Mall',
      thumbnail: Project03,
      thumbnailLabel: 'Estonian Mall',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project04,
      originalAlt: 'Versa Standard Keypad Securing Bubble Stitch Lockers',
      thumbnail: Project04,
      thumbnailLabel: 'Bubble Stitch',
      productLink: returnLocaleURL(sl, '/products/nextlock/sola/')
    },
    {
      original: Project05,
      originalAlt: 'Digilock 4G Electronic Locks Installed at Unilever Office',
      thumbnail: Project05,
      thumbnailLabel: 'Unilever',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project07,
      originalAlt: 'Riga Mall Charging Station Secured with Horizontal Body Versa Lock',
      thumbnail: Project07,
      thumbnailLabel: 'Riga Mall',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project08,
      originalAlt: 'Walgreens Employee Lockers with Cue Electronic Locks',
      thumbnail: Project08,
      thumbnailLabel: 'Walgreens',
      productLink: returnLocaleURL(sl, '/products/locks/')

    }
  ];
  const projectAsides = [
    '<h2>Tommy Hilfiger</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Sola</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>La Maison Simons</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'/">4G</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Joann Fabrics</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Lockup Lockers</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Lockup</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Estonian Mall</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Axis</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Bubble Stitch</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">NextLock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Classic</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Unilever</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Riga Mall</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Walgreens</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Lockup Lockers</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Lockup</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>'
  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Keyless Locks for Retail Facilities  | Digilock ')}
        description={'Digilock Helps Businesses Create a More Secure and Inviting Environment for Customers, Employees and Merchandise, See Our Selection of Keyless Electronic Lock Solutions.'}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-retail.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h1>
              <Trans>
                retail
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
          <section className="industry-copy">
            <div className="container">
              <p>
                <Trans>retail_copy</Trans>
              </p>
            </div>
          </section>
          <section className="industry-uses">
            <div className="container">
              <h2><Trans>popular_keyless</Trans></h2>
              <div className="uses-items">

                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/08-1-application-01a.jpg"
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
                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/08-1-application-02a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>merch_displays</Trans>
                  </p>
                </Link>
                <Link to={'/products/specialty-lockers/#gotoJuiceBar'} className="uses-item">
                  <StaticImage
                      src="./images/applications/08-1-application-03a.jpg"
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
                <Link to={'/products/specialty-lockers/#gotoPackageHold'} className="uses-item">
                  <StaticImage
                      src="./images/applications/08-1-application-04a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>customer_lockers</Trans>
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
