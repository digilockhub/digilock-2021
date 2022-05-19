import React, {useState} from 'react';
import {graphql} from 'gatsby';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {globalHistory} from "@reach/router";
import CompanySettings from '../constants/company/settings';
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
            <a href="#" className="btn btn--trans white lower-case">
              <Trans>button_chat</Trans>
            </a>
            <a href="/contact/"
               className={globalHistory.location.pathname.indexOf('/contact/') > -1 ?
                "btn btn--trans white lower-case selected" :
                "btn btn--trans white lower-case"}
            >
              <Trans>button_contact</Trans>
            </a>
            <a href="#"
               className="btn btn--trans white lower-case"
               style={{textTransform: 'uppercase'}}>
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
                <li>Telephone <a href={'tel:'+CompanySettings.PHONE_SALES_AMERICAS}>{CompanySettings.PHONE_SALES_AMERICAS}</a></li>
                <li>Toll-Free <a href={'tel:'+CompanySettings.PHONE_SALES_TOLL_FREE_AMERICAS}>{CompanySettings.PHONE_SALES_TOLL_FREE_AMERICAS}</a></li>
              </ul>
              <div className="social-icons">
                <h4>Follow U.S</h4>
                <a href={CompanySettings.LINKEDIN_USA}>
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
                <li>Telephone <a href={'tel:'+CompanySettings.PHONE_SALES_AMERICAS}>{CompanySettings.PHONE_SALES_AMERICAS}</a></li>
                <li>Toll-Free <a href={'tel:'+CompanySettings.PHONE_SALES_TOLL_FREE_AMERICAS}>{CompanySettings.PHONE_SALES_TOLL_FREE_AMERICAS}</a></li>
              </ul>
            </div>

            <div className="location americas">
              <h4>Digilock Europe BV</h4>
              <ul className={'unstyled-list'}>
                <li>The Netherlands</li>
                <li><span>Contact Sales / Europe</span></li>
                <li>Telephone <a href={'tel:'+CompanySettings.PHONE_SALES_EUROPE}>{CompanySettings.PHONE_SALES_EUROPE}</a></li>
              </ul>
              <div className="social-icons">
                <h4>Follow Europe</h4>
                <a href={CompanySettings.LINKEDIN_EUROPE}>
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
                <li>Telephone <a href={'tel:'+CompanySettings.PHONE_SALES_ASIA}>{CompanySettings.PHONE_SALES_ASIA}</a></li>
              </ul>
              <div className="social-icons">
                <h4>Follow Asia</h4>
                <a href={CompanySettings.LINKEDIN_ASIA}>
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
                  <Link to={'/find-dealers/'}>
                    <Trans>find_dealers</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'/support/'}>
                    <Trans>support</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'/contact/'}>
                    <Trans>contact</Trans>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Digilock</h4>
              <ul className={'unstyled-list'}>
                <li>
                  <Link to={'/careers/'}>
                    <Trans>careers</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'/about/'}>
                    <Trans>about</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'/mission/'}>
                    <Trans>mission</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'/blog/'}>
                    <Trans>blog</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'/privacy-policy/'}>
                    <Trans>privacy_policy</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'/privacy-request-form/'}>
                    <Trans>privacy_request_form</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'#'}>
                    <Trans>manage_cookies</Trans>
                  </Link>
                </li>
                <li>
                  <Link to={'/patents/'}>
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
