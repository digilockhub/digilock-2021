import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import LanguageSwitcher from './locales/language-switcher';
import {StaticImage} from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header>
    <div className={'container grid'}>
      <div className="digilock-logo">
        <StaticImage
            src="../images/logos/digilock-logo2x.png"
            width={216}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Digilock"
        />
      </div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <LanguageSwitcher />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
