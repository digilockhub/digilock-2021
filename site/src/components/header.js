import React, {useState, useEffect} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import CustomLocalizedLink from '../components/locales/custom-localized-link';
import {globalHistory} from "@reach/router";


import PropTypes from "prop-types";
import LanguageSwitcher from './locales/language-switcher';
import digilockLogo from '../images/shared/digilock.svg'
import {graphql} from "gatsby";


const Header = () => {
  const {t} = useTranslation();
  const [siteLocation, setSiteLocation] = useState('/');

  function checkSiteLocaton(loc) {
    return siteLocation.indexOf(loc) > -1;
  }

  function clearDropDowns() {
    let dropdowns = document.getElementsByClassName('dropdown'); // need here because win/doc not available for build
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove('show');
    }
  }

  function handleParentNavClick(e) {
    //IF MOBILE
    let intViewportWidth = window.innerWidth;
    if (intViewportWidth <= 771 && e.target.matches('.has-dropdown')) {
      clearDropDowns();
      e.target.nextElementSibling.classList.add('show');
    } else {
      clearDropDowns();
    }
  }

  useEffect(() => {
    setSiteLocation(globalHistory.location.pathname);
    const primaryNavigaton = document.getElementsByClassName('main-nav')[0];
    const navToggle = document.getElementsByClassName('mobile-nav-toggle')[0];
    const navOverlay = document.getElementsByClassName('nav-overlay')[0];
    primaryNavigaton.addEventListener('click', handleParentNavClick);

    //DESKTOP MOBILE TOGGLE
    navToggle.addEventListener('click', () => {
      const visibility = primaryNavigaton.getAttribute('data-visible');
      if (visibility === 'false') {
        primaryNavigaton.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        navOverlay.classList.add('show');
      } else {
        primaryNavigaton.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        navOverlay.classList.remove('show');
      }

    })
  }, []);

  return (
      <header className={'main-header'}>
        <div className="contact">
          <div className="container flex">
            <ul className={'menu-contact unstyled-list flex'}>
              <li>
                <LanguageSwitcher/>
              </li>
              <li>
                <CustomLocalizedLink
                    goto={'/contact/'}
                    cls={checkSiteLocaton('/contact/') ? 'btn btn--contact selected' : 'btn btn--contact'}
                    label={'Contact'}/>
              </li>
            </ul>
          </div>

        </div>

        <div className="main flex">
          <div className="container flex">
            <Link to={'/'}>
              <img src={digilockLogo} width={'135'} height={'32'} alt="Digilock"/>
            </Link>
            <button className={'mobile-nav-toggle'} aria-controls={'mainNav'} aria-expanded={'false'}>
              <span className={'sr-only'}>Menu</span>
            </button>
            <nav id={'mainNav'}
                 className="main-nav"
                 data-visible={'false'}
                 aria-label={'primary navigation'}>
              <ul className="menu-main unstyled-list flex">
                <li>
                  <CustomLocalizedLink
                      goto={'/industries/'}
                      cls={checkSiteLocaton('/industries/') ? 'selected has-dropdown' : 'has-dropdown'}
                      label={t('industries')}/>
                  <ul className={'dropdown unstyled-list'}>
                    <li>
                      <CustomLocalizedLink
                          goto="/industries/workspace/"
                          cls={checkSiteLocaton('/industries/workspace/') ? 'selected' : ''}
                          label={t('workspace')}/>
                    </li>
                    <li>
                      <CustomLocalizedLink
                          goto="/industries/healthcare/"
                          cls={checkSiteLocaton('/industries/healthcare/') ? 'selected' : ''}
                          label={t('healthcare')}/>
                    </li>
                    <li>
                      <CustomLocalizedLink
                          goto="/industries/pro-sports/"
                          cls={checkSiteLocaton('/industries/pro-sports/') ? 'selected' : ''}
                          label={t('pro_sports')}/>
                    </li>
                    <li>
                      <CustomLocalizedLink
                          goto="/industries/education/"
                          cls={checkSiteLocaton('/industries/education/') ? 'selected' : ''}
                          label={t('education')} />
                    </li>
                    <li>
                      <CustomLocalizedLink
                          goto="/industries/retail/"
                          cls={checkSiteLocaton('/industries/retail/') ? 'selected' : ''}
                          label={t('retail')} />
                    </li>
                    <li>
                      <CustomLocalizedLink
                          goto="/industries/manufacturing/"
                          cls={checkSiteLocaton('/industries/manufacturing/') ? 'selected' : ''}
                          label={t('manufacturing')} />
                    </li>
                    <li>
                      <CustomLocalizedLink
                          goto="/industries/health-fitness/"
                          cls={checkSiteLocaton('/industries/health-fitness/') ? 'selected' : ''}
                          label={t('health_fitness')} />
                    </li>
                    <li>
                      <CustomLocalizedLink
                          goto="/industries/hospitality/"
                          cls={checkSiteLocaton('/industries/hospitality/') ? 'selected' : ''}
                          label={t('hospitality')} />
                    </li>
                  </ul>
                </li>
                <li>
                  <CustomLocalizedLink
                      goto={'/locks/'}
                      cls={checkSiteLocaton('/locks/') ? 'selected has-dropdown' : 'has-dropdown'}
                      label={t('locks')}/>
                  <ul className="dropdown unstyled-list">
                    <li>
                      <Link to={'#'}>
                        Foo
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'}>
                        Foo
                      </Link>
                    </li>
                    <li>
                      <Link to={'#'}>
                        Foo
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <CustomLocalizedLink
                      goto="/specialty-lockers/"
                      cls={checkSiteLocaton('/specialty-lockers/') ? 'selected' : ''}
                      label={t('specialty_lockers')}/>
                </li>
                <li>
                  <CustomLocalizedLink
                      goto="/about/"
                      cls={checkSiteLocaton('/about/') ? 'selected' : ''}
                      label={t('about')}/>
                </li>
                <li>
                  <CustomLocalizedLink
                      goto="/how-to-buy/"
                      cls={checkSiteLocaton('/how-to-buy/') ? 'selected' : ''}
                      label={t('how_to_buy')}/>
                </li>
                <li>
                  <CustomLocalizedLink
                      goto="/blog/"
                      cls={checkSiteLocaton('/blog/') ? 'selected' : ''}
                      label={t('blog')}/>
                </li>
                <li>
                  <CustomLocalizedLink
                      goto="/support/"
                      cls={checkSiteLocaton('/support/') ? 'selected' : ''}
                      label={t('support')}/>
                </li>
                <li>
                  <Link to="#">
                    <Trans>search</Trans>
                  </Link>
                </li>
              </ul>
            </nav>
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