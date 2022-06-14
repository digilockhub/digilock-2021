import React from "react";
import {Trans, useTranslation, I18nextContext} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';
import {StaticImage} from "gatsby-plugin-image";
import {returnLocaleURL} from "../../../utils/utils";
import {createMarkup} from "../../../utils/utils";

import CarouselWrapper from '../../../components/carousel/CarouselWrapper';
import Project01 from './images/project/01-2-project-01a.jpg';
import Project02 from './images/project/01-2-project-02a.jpg';
import Project04 from './images/project/01-2-project-04a.jpg';
import Project05 from './images/project/01-2-project-05a.jpg';
import Project06 from './images/project/01-2-project-06a.jpg';
import Project07 from './images/project/01-2-project-07a.jpg';
import Project09 from './images/project/01-2-project-09a.jpg';
import Project10 from './images/project/01-2-project-10a.jpg';
import Project11 from './images/project/01-2-project-11a.jpg';
import Project12 from './images/project/01-2-project-12a.jpg';
import Project13 from './images/project/01-2-project-13a.jpg';
import Project14 from './images/project/01-2-project-14a.jpg';

const IndexPage = () => {

  const {t} = useTranslation();
  const context = React.useContext(I18nextContext);
  let sl = context.language;

  const projectImages = [
    {
      original: Project01,
      originalAlt: 'Versa Electronic Locks at Amazon Headquarters',
      thumbnail: Project01,
      thumbnailLabel: 'Amazon',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project02,
      originalAlt: 'Pedestals Secured with Versa Mini at Genentech Workspace',
      thumbnail: Project02,
      thumbnailLabel: 'Genentech',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project04,
      originalAlt: 'Workplace Lockers Installed with Aspire at Accenture',
      thumbnail: Project04,
      thumbnailLabel: 'Accenture',
      productLink: returnLocaleURL(sl, '/products/smart-locks/aspire/')
    },
    {
      original: Project05,
      originalAlt: 'Jones Langsalle Custom Cabinets Secured with Aspire by Digilock',
      thumbnail: Project05,
      thumbnailLabel: 'Jones Lang LaSalle',
      productLink: returnLocaleURL(sl, '/products/smart-locks/aspire/')
    },
    {
      original: Project06,
      originalAlt: 'Employee Lockers with Custom Aspire Locks at the Salesforce Headquarters',
      thumbnail: Project06,
      thumbnailLabel: 'SalesForce',
      productLink: returnLocaleURL(sl, '/products/smart-locks/aspire/')
    },
    {
      original: Project07,
      originalAlt: 'Electronic Lockers Installed with Custom Cue by Digilock Locks at Accenture',
      thumbnail: Project07,
      thumbnailLabel: 'Accenture',
      productLink: returnLocaleURL(sl, '/products/smart-locks/aspire/')
    },
    {
      original: Project09,
      originalAlt: 'Filing Cabinets Locked with Versa at Nike office',
      thumbnail: Project09,
      thumbnailLabel: 'Nike',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project10,
      originalAlt: 'Cue Electronic Locks Installed for IBM Employees',
      thumbnail: Project10,
      thumbnailLabel: 'IBM',
      productLink: returnLocaleURL(sl, '/products/smart-locks/aspire/')
    },
    {
      original: Project11,
      originalAlt: 'Fannie Mae Workspace Secured with Custom Aspire Locks',
      thumbnail: Project11,
      thumbnailLabel: 'Fannie Mae',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project12,
      originalAlt: 'Mastercard employee Lockers Installed with Aspire RFID',
      thumbnail: Project12,
      thumbnailLabel: 'Mastercard',
      productLink: returnLocaleURL(sl, '/products/smart-locks/aspire/')
    },
    {
      original: Project13,
      originalAlt: 'Amgen Office with Lockers Secured by Versa',
      thumbnail: Project13,
      thumbnailLabel: 'Amgen',
      productLink: returnLocaleURL(sl, '/products/smart-locks/versa/')
    },
    {
      original: Project14,
      originalAlt: 'Astellas Pharma Employee Lockers Installed with Digilock Cue with Pull Handle',
      thumbnail: Project14,
      thumbnailLabel: 'Astellas Pharma',
      productLink: returnLocaleURL(sl, '/products/smart-locks/aspire/')
    }
  ];
  const projectAsides = [
    '<h2>Amazon</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Versa</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">RFID</a></p>',

    '<h2>Genentech</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Versa Small Profile</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Keypad</a></p>',

    '<h2>Accenture</h2><br />' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Keypad</a></p>',

    '<h2>Jones Lang Lasalle</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Keypad</a></p>',

    '<h2>Salesforce</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Aspire</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">RFID</a></p>',

    '<h2>Accenture</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Keypad</a></p>',

    '<h2>Nike</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Sola</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Keypad</a></p>',

    '<h2>IBM</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">RFID</a></p>',

    '<h2>Fannie Mae</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Versa</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">RFID</a></p>',

    '<h2>Mastercard</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Aspire</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">RFID</a></p>',

    '<h2>Amgen</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Versa</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/versa/')+'">Keypad</a></p>',

    '<h2>Astellas Pharma</h2><br>' +
    '<p>Brand: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">Numeris</a></p>' +
    '<p>Product: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">4G</a></p>' +
    '<p>Interface: <a href="'+returnLocaleURL(sl, '/products/smart-locks/aspire/')+'">RFID</a></p>'
  ];
  const ProjectAside = _ => <aside className={'dynamic-aside'}
                                   dangerouslySetInnerHTML={createMarkup(projectAsides[0])} />;

  return (
      <Layout>
        <Seo title={t('Digilock Workspace Solutions')}/>
        <div className="solutions">
          <section className="hero --hero-image no-pad">
            <StaticImage
                src="../../../images/industries/hero-workspace.jpg"
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
