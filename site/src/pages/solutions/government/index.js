import React from "react";
import {Trans, useTranslation, I18nextContext} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/06-2-project-01a.jpg';
import Project02 from './images/project/06-2-project-02a.jpg';
import Project03 from './images/project/06-2-project-03a.jpg';
import Project04 from './images/project/06-2-project-04a.jpg';
import Project05 from './images/project/06-2-project-05a.jpg';
import Project06 from './images/project/06-2-project-06a.jpg';
import Project07 from './images/project/06-2-project-07a.jpg';
import Project08 from './images/project/06-2-project-08a.jpg';

const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project01,
      originalAlt: 'Digilock 4G Electronic Locks Securing Lockers at Le Louvre',
      thumbnail: Project01,
      thumbnailLabel: 'Le Louvre',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project02,
      originalAlt: 'US General Services Administration Office Utilizing Numeris Electronic Locks',
      thumbnail: Project02,
      thumbnailLabel: 'US General Services Administration',
      productLink: returnLocaleURL(sl, '/products/nextlock/sola/')
    },
    {
      original: Project03,
      originalAlt: 'Police Station Officer Lockers Secured with Versa Electronic Locks',
      thumbnail: Project03,
      thumbnailLabel: 'Police Station',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project04,
      originalAlt: 'Fire Station Employee Lockers with Digilock 4G Electronic Locks Installed',
      thumbnail: Project04,
      thumbnailLabel: 'Fire Station',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project05,
      originalAlt: 'Versa RFID on Cabinets in City Hall Amsterdam',
      thumbnail: Project05,
      thumbnailLabel: 'City Hall Amsterdam',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project06,
      originalAlt: 'Digilock 4G Electronic Locks on Cabinets at Bouwend',
      thumbnail: Project06,
      thumbnailLabel: 'Bouwend',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    },
    {
      original: Project07,
      originalAlt: 'Lockers Installed with Versa RFID Electronic Locks at Police Station',
      thumbnail: Project07,
      thumbnailLabel: 'Police Station',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')

    },
    {
      original: Project08,
      originalAlt: 'Aspire RFID on Cabinets in City Hall Amsterdam',
      thumbnail: Project08,
      thumbnailLabel: 'Municipal Offices De Rotterdam',
      productLink: returnLocaleURL(sl, '/products/electronic-locks/axis/')
    }
  ];
  const projectAsides = [
    '<h2>Le Louvre </h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Keypad</a></p>',

    '<h2>US General Services Administration</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Sola</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/sola/')+'">Keypad</a></p>',

    '<h2>Police Station</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Versa Standard</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">RFID</a></p>',

    '<h2>Fire Station</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">RFID</a></p>',

    '<h2>City Hall Amsterdam</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">Versa Mini</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/')+'">RFID</a></p>',

    '<h2>Bouwend</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Digilock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">RFID</a></p>',

    '<h2>Police Station</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Versa Mini</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">RFID</a></p>',

    '<h2>Municipal Offices De Rotterdam</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">NextLock</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">Axis</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/electronic-locks/axis/')+'">RFID</a></p>'
  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Digilock Government Solutions')}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-government.jpg"
                quality={100}
                layout={'fullWidth'}
                formats={["auto", "webp", "avif"]}
                alt="NEED ALT TAG"
            />
            <h6>
              <Trans>
                government
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
