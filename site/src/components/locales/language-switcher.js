import React, {useState, useEffect} from 'react';
import {useI18next, I18nextContext} from 'gatsby-plugin-react-i18next';
import locales from '../../constants/locales/locales'

const LanguageSwitcher = () => {
  const {changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);
  const [isMenuOpen, setIsMenuOpen] = useState(0);
  const [selectedLang] = useState(locales[context.language].locale);

  let localesArr = Object.keys(locales).map(function (key) {
    return locales[key];
  });

  function createOptionLabel(ind) {
    return localesArr[ind].locale;
  }

  function handleSelectTrigger() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLangChange(e) {
    changeLanguage(e.target.getAttribute('data-value'));
  }

  return (
      <div className={isMenuOpen ? 'custom-select open' : 'custom-select'} onClick={handleSelectTrigger}>
        <div className="custom-select-trigger">
          {locales[context.language].locale}
          <div className="arrow" />
        </div>
        <div className="custom-select-options">
          {
            localesArr.map(function (locale, index) {
              let lg = localesArr[index].path;
              return <span
                  className={createOptionLabel(index) === selectedLang ? 'custom-select-option selected' : 'custom-select-option'}
                  key={index}
                  onClick={handleLangChange}
                  data-value={lg}>
                  {createOptionLabel(index)}
                </span>
            })
          }
        </div>
      </div>
  )
};

export default LanguageSwitcher;