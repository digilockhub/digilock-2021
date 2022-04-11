import React, {useEffect} from "react";
import {Link, Trans} from 'gatsby-plugin-react-i18next';
import PropTypes from "prop-types";

import LanguageSwitcher from './locales/language-switcher';
import {StaticImage} from "gatsby-plugin-image";

const Header = () => {

  useEffect(() => {
    const mainNavigation = document.getElementsByClassName('main-nav')[0];
    const toggler = document.getElementsByClassName('nav-toggle')[0];
    const hamburger = document.getElementsByClassName('hamburger')[0];
    toggler.addEventListener('click', () => {
      mainNavigation.classList.toggle('is-open');
      hamburger.classList.toggle('is-open');
    })
  });

  return (
      <header className={'main-header'}>

        <div className="container grid">

          <div className="logo">
            <StaticImage
                src="../images/logos/digilock.png"
                width={186}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Digilock"
            />
          </div>

          <nav className="main-nav" aria-label={'primary navigation'}>
            <ul className={'unstyled-list'}>
              <li>
                <LanguageSwitcher/>
              </li>
              <li>
                <Link to="/contact">
                  <Trans>contact</Trans>
                </Link>
              </li>
            </ul>
            <ul className="unstyled-list">
              <li>
                <Link to="#">
                  <Trans>industries</Trans>
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

          <div className="nav-toggle">
            <div className="hamburger"></div>
          </div>

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
