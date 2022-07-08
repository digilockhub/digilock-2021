import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import {graphql} from 'gatsby';

import heroImage from './images/cs-sf-hero.jpg';
import subheadLine from './images/subhead-line.png';
import locksImage from './images/locks.png';
import officeImage from './images/cs-sf-office.jpg';
import skylineImage from './images/skyline.jpg';

const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Digilock Develops Secure Storage Solutions with Innovative Keyless Locks')}
            description={t('Learn about the best keyless lock for theft prevention, security, and other needs for your business.')}
        />
        <div className="case-studies-workspace">
          <section className={'hero'}>
            <div className="container">
              <img src={heroImage} className={'img-responsive'} alt=""/>
              <h1>
                Tech Giant Future-Proofs Personal Security
              </h1>
              <div className="sub-container">
                <h2>
                  CHALLENGE:
                  <span>
                The company’s Open Office Layout Lacked Personal Storage
              </span>
                  <img src={subheadLine} alt=""/>
                </h2>
              </div>
            </div>
          </section>
          {/*top*/}
          <div className="columns container">
            <div className="col left">
              <p>For many full-time employees, especially those who have longer commutes and/or use public transit, the
                office becomes a second home. As a result, it’s increasingly important for employers to provide a safe,
                secure place to stow away personal belongings.</p><p>But what about those companies with open offices?
              Although this layout maximizes space and inspires innovation and collaboration, it doesn’t usually provide
              employees with a designated area to store their possessions long term. At the end of each day, with shared
              workstations, employees must pack up all of their items, take them home, then return again the very next
              day with those same items.</p><p>One global software company ran into this exact issue and needed to find
              a secure storage solution that could evolve with its needs. That’s when Digilock stepped in.</p>
              <div className="bq-container">
                <blockquote>
                  <div className="line" />
                  “We had a tight timeline on this project, and Digilock made it happen much to the delight of the project manager who exclaimed, ‘These guys are magicians!’”
                  <div className="line" />
                </blockquote>
              </div>

            </div>
            <div className="col right">
              <img src={officeImage} className={'img-responsive'} alt=""/>

            </div>
          </div>
          <section className={'hero middle container'}>
            <img src={skylineImage} className={'img-responsive'} alt=""/>
          </section>
          {/*bottom*/}
          <div className="columns container">
            <div className="col left">
              <div className="lock-container">
                <img src={locksImage} className={'img-responsive'} alt=""/>
              </div>
              <div className="description">
                <p>SMART & CUSTOMIZED</p>
                <p>Left to right:</p>
                <p>5G Aspire RFID with Narrow Body and Pull, 6G Networked Aspire RFID with Narrow Body and Pull, 6G Networked Aspire RFID with custom color.</p>
              </div>
            </div>
            <div className="col right">
              <div className="sub-container">
                <h2>
                  solution:
                  <span>
                Digilock’s Fifth-Generation
Locks Met Their Needs
              </span>
                  <img src={subheadLine} alt=""/>
                </h2>
              </div>
              <p>For this particular global technology firm, it was important that the office environment reflect the ethos of the company. Digilock’s fifth-generation lock offered the best solution as the firm switched to a new office layout.</p>
              <p>When assigning a user to a lock, a manager key is usually required. However, to streamline this process, Digilock provided a way to assign lockers using an employee badge. And to maintain the corporate office aesthetics, Digilock matched the locks to the color of the lockers to make them uniquely theirs.</p>
              <div className="sub-container">
                <h2>
                  The evolution:
                  <span>
               Sixth-generation global management from a single&nbsp;System
              </span>
                  <img src={subheadLine} alt=""/>
                </h2>
              </div>
              <p>Today, this company continues to partner with Digilock to determine what the future of secured storage
                looks like in its offices.
              </p>
              <p>New installation sites have now been specified with Digilock’s sixth-generation smart locks, which
                easily retrofit into existing lockers.</p>
              <p>
                Using DigiLink, a cloud-based lock management system, the company can monitor all of its locks through
                real-time analytics and manage them remotely—whether an administrator is down the hall or outside of the
                country. And because these locks have wireless data and power, they can be placed into furniture and
                moved to any location. Digilock’s 6G solutions are designed to grow and change with the company’s
                needs.
              </p>
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
