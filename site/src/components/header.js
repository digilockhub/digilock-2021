import React, {useEffect} from "react";
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

          {/*<div className="logo">*/}
          {/*  <StaticImage*/}
          {/*      src="../images/logos/digilock.png"*/}
          {/*      width={186}*/}
          {/*      quality={95}*/}
          {/*      formats={["auto", "webp", "avif"]}*/}
          {/*      alt="Digilock"*/}
          {/*  />*/}
          {/*</div>*/}

          <nav className="main-nav">
            <ul className="unstyled-list">
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
              <li><a href="">Link</a></li>
              <li><LanguageSwitcher/></li>
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
