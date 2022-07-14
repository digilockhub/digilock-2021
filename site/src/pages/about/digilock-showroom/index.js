import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';

import heroImage from './images/cs-sf-hero.jpg';
import blockQuoteImage from './images/PR_pullquote.svg';
import officeImage from './images/showroom.jpg';
import skylineImage from './images/middle.jpg';



const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Digilock Develops Secure Storage Solutions with Innovative Keyless Locks')}
            description={t('Learn about the best keyless lock for theft prevention, security, and other needs for your business.')}
        />
        <div className="about-digilock-showroom">
          <section className={'hero'}>
            <div className="container">
              <div className="hero-img-container">
                <img src={heroImage} className={'img-responsive'} alt=""/>
                <h1>
                  Digilock Expands into chicago's <br />iconic design center at <span>the</span>Mart
                </h1>
              </div>
            </div>
          </section>
          {/*top*/}
          <div className="columns container">
            <div className="col left">
              <p>Digilock, the global leader in providing electronic locks and locker security solutions for more than 40 years, announces a new way to experience its products: at its first-ever brick-and-mortar showroom in the world’s largest commercial building and design center in Chicago, Illinois.</p>
              <p>A premier international business location, Chicago’s Design Center at theMART is home to hundreds of year-round showrooms displaying the finest products for designers, including <a href={'/products/smart-locks/'}> Digilock smart locks</a>, now in Suite 1098 on the 10th floor. Digilock builds flawless, innovative electronic locks and locker security solutions trusted by designers, furniture dealers, manufacturers, and, ultimately, the clients, employees, and guests they serve.</p>
              <div className="bq-container">
                <img src={blockQuoteImage} alt="block quote"/>
              </div>
            </div>
            <div className="col right">
              <img src={officeImage} className={'img-responsive'} alt=""/>
              <p>
                Digilock’s showroom in theMART offers an interactive experience where visitors can view its locks and lockers in action, ask questions, and receive personalized guidance from an onsite expert.
                Digilock will also be participating in a few upcoming events at theMART, including <a href={'https://designcenter.com/event/design-center-at-neocon-2/'}> Design Center @ NeoCon</a>.
              </p>
            </div>
          </div>
          <section className={'hero middle'}>
            <div className="container">
              <img src={skylineImage} className={'img-responsive'} alt=""/>
            </div>
          </section>
          {/*bottom*/}
          <section className="divider">
            &nbsp;
          </section>
          <div className="columns bottom container">
            <div className="col left">
              <p>Curious about which Digilock products are displayed in our Chicago showroom? Below is just a sample.
              </p><p>ASPIRE — Digilock’s simple, elegant <a href="/products/smart-locks/aspire/">keypad and RFID Aspire locks</a> work the way customers need them
              to, whether they’re securing office lockers or healthcare facility cabinets.</p><p>VERSA — Built to be
              versatile, these locks retrofit horizontally and vertically to meet design aesthetics, and they can secure
              belongings with either a <a href={'/products/smart-locks/versa/'}> keypad PIN or RFID technology</a>.</p><p>
              ORBIT — Orbit is Digilock’s hidden gem — literally. Its “barely there” RFID interface offers a <a href={'/products/smart-locks/orbit/'}> clean, touch-free solution</a> to any piece of furniture.</p>
            </div>
            <div className="col right bottom">
              <p>PACKAGEHOLD — Digilock’s improving the <a href={'/products/packagehold/'}> buy online, pick up in-store experience</a>. Customers receive a unique QR code when their package is ready. Then they unlock the locker and get what they need without the help of a desk attendant or floor staff.</p>
              <p>JUICEBAR — This <a href={'/products/juicebar/'}> compact locker</a> with either keypad or RFID interface keeps patrons’ personal belongings safe while charging their devices. Perfect for gyms, restaurants, bars, and entertainment venues.</p>

              <div className="closer">
                <div className="bar" />
                <p>
                  Visit Digilock’s showroom in Chicago’s Design Center: theMART, Floor 10, Suite 1098. For an appointment or information, contact Carolee McKanna, Regional Sales Manager: (224) 383-5095 or <a href={'mailto:sales@digilock.com'}> sales@digilock.com.</a>
                </p>
              </div>
            </div>
          </div>
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
