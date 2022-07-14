import React from "react";
import {Trans, useTranslation, I18nextContext, Link} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/11-2-project-01a.jpg';
import Project02 from './images/project/11-2-project-02a.jpg';
import Project03 from './images/project/11-2-project-03a.jpg';
import Project04 from './images/project/11-2-project-04a.jpg';

const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project01,
      originalAlt: 'San Francisco 49ers Athlete Locker Room Secured with Digilock 4G Locks',
      thumbnail: Project01,
      thumbnailLabel: 'San Francisco 49er\'s',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project02,
      originalAlt: 'Horizontal Body Axis Locks Installed at the New Orleans Saints Home Locker Room',
      thumbnail: Project02,
      thumbnailLabel: 'New Orleans Saints',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project03,
      originalAlt: 'Digilock 4G Electronic Locks Securing the Jacksonville Jaguars Athletic Lockers',
      thumbnail: Project03,
      thumbnailLabel: 'Jacksonville Jaguars',
      productLink: returnLocaleURL(sl, '/products/locks/')
    },
    {
      original: Project04,
      originalAlt: 'Atlanta Falcons Athlete Locker Room Installed with Axis Standard Keypad Locks',
      thumbnail: Project04,
      thumbnailLabel: 'Atlanta Falcons',
      productLink: returnLocaleURL(sl, '/products/locks/')
    }
  ];
  const projectAsides = [
    '<h2>San Francisco 49er\'s</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>New Orleans Saints</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Axis</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Jacksonville Jaguars</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>',

    '<h2>Atlanta Falcons</h2><br>' +
    '<p>'+t('brand')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Digilock</a></p>' +
    '<p>'+t('product')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">4G</a></p>' +
    '<p>'+t('interface')+': <a href="'+returnLocaleURL(sl, '/products/locks/')+'">Keypad</a></p>'
  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Locker Locks for Pro Sports Facilities | Digilock')} description={'Digilock Locker Locks Are Durable, Adaptive and Easy to Manage.'}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-pro-sports.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h1>
              <Trans>
                pro_sports
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
                <Trans>pro_sports_copy</Trans>
              </p>
            </div>
          </section>
          <section className="industry-uses">
            <div className="container">
              <h2><Trans>popular_keyless</Trans></h2>
              <div className="uses-items">
                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/11-1-application-01a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>team_lockers</Trans>
                  </p>
                </Link>
                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/11-1-application-03a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>equipment_storage</Trans>
                  </p>
                </Link>
                <Link to={'/products/locks/'} className="uses-item">
                  <StaticImage
                      src="./images/applications/11-1-application-02a.jpg"
                      loading={'lazy'}
                      width={349}
                      height={225}
                      quality={100}
                      formats={["auto", "webp", "avif"]}
                      alt="NEED ALT TAG"
                  />
                  <p>
                    <Trans>staff_office_furniture</Trans>
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
