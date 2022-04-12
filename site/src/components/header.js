import React, {useEffect} from "react";
import {Link, Trans} from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types";

import LanguageSwitcher from './locales/language-switcher';
import {StaticImage} from "gatsby-plugin-image";
import digilockLogo from '../images/shared/digilock.svg'

const Header = () => {

  useEffect(() => {
    const primaryNavigaton = document.getElementsByClassName('main-nav')[0];
    const navToggle = document.getElementsByClassName('mobile-nav-toggle')[0];

    navToggle.addEventListener('click', () => {
      const visibility = primaryNavigaton.getAttribute('data-visible');
      if(visibility === 'false') {
        primaryNavigaton.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
      } else {
        primaryNavigaton.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
      }

    })
  }, []);

  return (
      <header className={'main-header'}>

        <div className="container flex">
          <img src={digilockLogo} width={'135'} height={'32'} alt="Digilock"/>
          <button className={'mobile-nav-toggle'} aria-controls={'mainNav'} aria-expanded={'false'}>
            <span className={'sr-only'}>Menu</span>
          </button>

          <nav id={'mainNav'}
               className="main-nav"
               data-visible={'false'}
               aria-label={'primary navigation'}>

            <ul className={'menu-contact unstyled-list flex'}>
              <li>
                <LanguageSwitcher/>
              </li>
              <li>
                <Link to="/contact">
                  <Trans>contact</Trans>
                </Link>
              </li>
            </ul>

            <ul className="menu-main unstyled-list flex">
              <li>
                <Link to="#">
                  <Trans>industries</Trans>
                  <ul className={'dropdown unstyled-list'}>
                    <li>foo</li>
                    <li>foo</li>
                    <li>foo</li>
                    <li>foo</li>
                    <li>foo</li>
                    <li>foo</li>
                    <li>foo</li>
                    <li>foo</li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Trans>locks</Trans>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Trans>specialty_lockers</Trans>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Trans>about</Trans>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Trans>how_to_buy</Trans>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Trans>blog</Trans>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Trans>support</Trans>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Trans>search</Trans>
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </header>
      )

};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
