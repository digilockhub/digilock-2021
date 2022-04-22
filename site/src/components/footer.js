import React, {useState} from 'react';
import {graphql} from 'gatsby';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import companySettings from '../constants/company/settings'

import linkedIn from '../images/shared/linkedin.svg';
import youtube from '../images/shared/youtube.svg';


const Footer = () => {
  const {t} = useTranslation();

  return (

      <footer>
        <div className="container">
          <h3>
            <Trans>have_questions</Trans>
          </h3>
          <div className="questions">
            <a href="#" className="btn btn--trans white">
              <Trans>button_chat</Trans>
            </a>
            <a href="#" className="btn btn--trans white">
              <Trans>button_contact</Trans>
            </a>
            <a href="#" className="btn btn--trans white">
              <Trans>button_faq</Trans>
            </a>
          </div>
          <div className="locations">
            <div className="location americas">
              <h4>Digilock Americas</h4>
              <ul className={'unstyled-list'}>
                <li>Petaluma, Ca | United States</li>
                <li><span>Contact Sales / US</span></li>
                <li>
                  <a href="mailto:sales@digilock.com">sales@digilock.com</a>
                </li>
                <li>Telephone +1 707-766-6000</li>
                <li>Toll-Free 800-989-0201</li>
              </ul>
              <div className="social-icons">
                <h4>Follow U.S</h4>
                <a href="#">
                  <img src={linkedIn} alt="follow us on linkedin"/>
                </a>
                <a href="#">
                  <img src={youtube} alt="follow us on YouTube"/>
                </a>
              </div>
            </div>
            <div className="location showroom">
              <h4>Digilock Showroom</h4>
              <ul className={'unstyled-list'}>
                <li>theMart | Chicago, IL 60654</li>
                <li><span><a href="#">Discover Our Showroom</a></span></li>
                <li>
                  <a href="mailto:sales@digilock.com">sales@digilock.com</a>
                </li>
                <li>Telephone +1 707-766-6000</li>
                <li>Toll-Free 800-989-0201</li>
              </ul>
            </div>

            <div className="location americas">
              <h4>Digilock Europe BV</h4>
              <ul className={'unstyled-list'}>
                <li>The Netherlands</li>
                <li><span>Contact Sales / Europe</span></li>
                <li>Telephone +31 0 20 303 3060</li>
              </ul>
              <div className="social-icons">
                <h4>Follow Europe</h4>
                <a href="#">
                  <img src={linkedIn} alt="follow us on linkedin"/>
                </a>
                <a href="#">
                  <img src={youtube} alt="follow us on YouTube"/>
                </a>
              </div>
            </div>
            <div className="location americas">
              <h4>Digilock Asia</h4>
              <ul className={'unstyled-list'}>
                <li>Hong Kong</li>
                <li><span>Contact Sales / Asia</span></li>
                <li>Telephone +852 27776 0800</li>
              </ul>
              <div className="social-icons">
                <h4>Follow Asia</h4>
                <a href="#">
                  <img src={linkedIn} alt="follow us on linkedin"/>
                </a>
                <a href="#">
                  <img src={youtube} alt="follow us on YouTube"/>
                </a>
              </div>
            </div>
          </div>
          <div className="section-delimeter"/>
          <div className="customer-care">
            <div>
              <h4><Trans>customer_care</Trans></h4>
              <ul className={'unstyled-list'}>
                <li>
                  <Link to={'#'}>
                    <Trans>find_dealers</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>support</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>contact</Trans>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Digilock</h4>
              <ul className={'unstyled-list'}>
                <li>
                  <Link to={'#'}>
                    <Trans>careers</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>about</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>mission</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>blog</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>privacy_policy</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>privacy_request_form</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>manage_cookies</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>patents</Trans>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={'copyright container'}>
            &copy; {new Date().getFullYear()} Digilock. All rights reserved.
          </div>
        </div>
      </footer>

  )

};

export default Footer;
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
