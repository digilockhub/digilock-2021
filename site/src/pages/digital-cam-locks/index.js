import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';

import numerisLogo from '../../images/legacy-landing/global/logos/numeris-logo.png'
import aspireImage from '../../images/legacy-landing/global/icons/locks/s_aspire.png'
import aspireLogo from '../../images/legacy-landing/global/logos/aspire-black-small-logo.svg'
import versaImage from '../../images/legacy-landing/global/icons/locks/s_versa.png'
import versaLogo from '../../images/legacy-landing/global/logos/versa-standard-black-small-logo.svg'
import versaMiniImage from '../../images/legacy-landing/global/icons/locks/s_versa-mini.png'
import versaMiniLogo from '../../images/legacy-landing/global/logos/versa-mini-black-small-logo.svg'
import nextLogo from '../../images/legacy-landing/global/logos/NextLock-by-Digilock_Color.png'
import solaImage from '../../images/legacy-landing/global/icons/locks/s_sola.png'
import solaLogo from '../../images/legacy-landing/global/logos/sola-black-small-logo.svg'
import classicImage from '../../images/legacy-landing/global/icons/locks/s_classic.png'
import classicLogo from '../../images/legacy-landing/global/logos/classic-cam-black-small-logo.svg'
const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Digital Cam Locks | Cabinet Locks | Locker Locks | Furniture Locks | Digilock')}
            description={t('Numeris & NextLock by Digilock is secured with Keypad or RFID credential access and a variety of locking mechanism, allowing you to seamlessly transform and simplify any locker room, cabinet, or personal storage need while increasing security and enhancing overall aesthetics.')}
        />
        <div className="legacy-landing about">
          <section className="hero">
            <div className="container">
              <p>Digital Cam Lock solutions by Digilock a cam that rotates 90&#xB0; or 180&#xB0; with the knob or ADA compliant lever providing a simple yet elegant design. Keypad or RFID interfaces integrate seamlessly as surface or recess mount while providing the perfect complement to any locker, cabinet, or furniture application.</p>
              <p className={'aside'}>Not sure which solution is right for you?  <Link to={'/contact/'} role={'button'}>Contact your Digilock Sales Representative</Link> and learn more about our standard product and quick ship program.</p>
            </div>
          </section>
          <section className={'section-locks'}>
            <div className="container">
              <img className={'main-logo'} src={numerisLogo} alt="Numeris"/>
              <h2>
                Designed for Workspace, Healthcare, Hospitality, Retail, Manufacturing, and Government.
              </h2>
              <p>
                Numeris by Digilock offers advanced firmware for a flexible management system that increases security in the workplace. A variety of available finishes and body-styles enhance the aesthetics of any furniture, cabinet or locker while keypad or RFID interface allows for seamless operation across a facility.
              </p>
              <div className="row">
                <div className="content-row">
                  <Link
                      to={'/products/numeris/versa-standard/'}
                      role={'button'}>
                    <div className="content-block versa">
                      <div className="product">
                        <img src={versaImage}
                             className={'img-responsive'}
                             alt="Versa"/>
                        <div className="label">
                          <img src={versaLogo} alt="Versa"/>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                      to={'/products/numeris/versa-mini/'}
                      role={'button'}>
                    <div className="content-block versa">
                      <div className="product">
                        <img src={versaMiniImage}
                             className={'img-responsive'}
                             alt="Versa"/>
                        <div className="label">
                          <img src={versaMiniLogo} alt="Versa"/>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className={'section-locks'}>
            <div className="container">
              <img className={'main-logo'} src={nextLogo} alt="NextLock"/>
              <h2>
                Designed for  Health and Fitness, Education, and Pro Sports
              </h2>
              <p>
                NextLock by Digilock is the easy way to manage your locker room for day use, rental lockers, or a combination of both.  A simple user-interface, featuring either keypad or RFID credential, and bold aesthetics, elevate the locker room experience in any facility. A variety of locking mechanisms are available for new as well as retrofit installations.
              </p>
              {/*ROW ONE*/}
              <div className="row">
                <div className="content-row adword-fix">
                  <Link
                      to={'/products/nextlock/sola/'}
                      role={'button'}>
                    <div className="content-block sola">
                      <div className="product">
                        <img src={solaImage}
                             className={'img-responsive'}
                             alt="Sola"/>
                        <div className="label">
                          <img src={solaLogo} alt="Sola"/>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                      to={'/products/nextlock/classic/'}
                      role={'button'}>
                    <div className="content-block classic">
                      <div className="product">
                        <img src={classicImage}
                             className={'img-responsive'}
                             alt="Classic"/>
                        <div className="label">
                          <img src={classicLogo} alt="Classic"/>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
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
