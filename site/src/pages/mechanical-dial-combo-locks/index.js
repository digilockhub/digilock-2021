import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';

import numerisLogo from '../../images/legacy-landing/global/logos/numeris-logo.png'
import aspireImage from '../../images/legacy-landing/global/icons/locks/s_aspire.png'
import aspireLogo from '../../images/legacy-landing/global/logos/aspire-black-small-logo.svg'
import nextLogo from '../../images/legacy-landing/global/logos/NextLock-by-Digilock_Color.png'
import axisImage from '../../images/legacy-landing/global/icons/locks/s_axis.png'
import axisLogo from '../../images/legacy-landing/global/logos/axis-black-small-logo.svg'
import cueImage from '../../images/legacy-landing/global/icons/locks/s_cue.png'
import cueLogo from '../../images/legacy-landing/global/logos/cue-black-small-logo.svg'
import solaImage from '../../images/legacy-landing/global/icons/locks/s_sola.png'
import solaLogo from '../../images/legacy-landing/global/logos/sola-black-small-logo.svg'
import mechImage from '../../images/legacy-landing/global/icons/locks/s_mech.png'
import mechLogo from '../../images/legacy-landing/global/logos/mech-black-small-logo.svg'

import versaImage from '../../images/legacy-landing/global/icons/locks/s_versa.png'
import versaLogo from '../../images/legacy-landing/global/logos/versa-standard-black-small-logo.svg'
import versaMiniImage from '../../images/legacy-landing/global/icons/locks/s_versa-mini.png'
import versaMiniLogo from '../../images/legacy-landing/global/logos/versa-mini-black-small-logo.svg'
const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Mechanical Dial Combo Locks | Cabinet Locks | Locker Locks | Furniture Locks | Digilock')}
            description={t('Numeris & NextLock by Digilock is secured with Keypad or RFID credential access and a variety of locking mechanism, allowing you to seamlessly transform and simplify any locker room, cabinet, or personal storage need while increasing security and enhancing overall aesthetics.')}
        />
        <div className="legacy-landing about">
          <section className="hero">
            <div className="container">
              <p>NextLock Mechanical Dial Combo Locks by Digilock provide shared or assigned use functionality with a user selected code. Mech is the perfect battery-less solution that provides simplified maintenance free functionality without sacrificing security.j</p>
              <p className={'aside'}>Not sure which solution is right for you?  <Link to={'/contact/'} role={'button'}>Contact your Digilock Sales Representative</Link> and learn more about our standard product and quick ship program.</p>
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
                      to={'/products/mechanical-locks/'}
                      role={'button'}>
                    <div className="content-block mech">
                      <div className="product">
                        <img src={mechImage}
                             className={'img-responsive'}
                             alt="Cue"/>
                        <p>Discover More</p>
                        <div className="label">
                          <img src={mechLogo} alt="Mech"/>
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
