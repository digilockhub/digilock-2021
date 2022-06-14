import React from "react";
import {Trans, useTranslation, I18nextContext} from 'gatsby-plugin-react-i18next';
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
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project02,
      originalAlt: 'Horizontal Body Axis Locks Installed at the New Orleans Saints Home Locker Room',
      thumbnail: Project02,
      thumbnailLabel: 'New Orleans Saints',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project03,
      originalAlt: 'Digilock 4G Electronic Locks Securing the Jacksonville Jaguars Athletic Lockers',
      thumbnail: Project03,
      thumbnailLabel: 'Jacksonville Jaguars',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project04,
      originalAlt: 'Atlanta Falcons Athlete Locker Room Installed with Axis Standard Keypad Locks',
      thumbnail: Project04,
      thumbnailLabel: 'Atlanta Falcons',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    }
  ];
  const projectAsides = [
    '<h2>San Francisco 49er\'s</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>New Orleans Saints</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Jacksonville Jaguars</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>Atlanta Falcons</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>'
  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Digilock Pro Sports Solutions')}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-pro-sports.jpg"
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
          <section className="">
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
