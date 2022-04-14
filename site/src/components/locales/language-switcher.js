
import React, {useEffect} from 'react';
import {useI18next, I18nextContext} from 'gatsby-plugin-react-i18next';
import locales from '../../constants/locales/locales'

const LanguageSwitcher = () => {
  const {changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);


  useEffect(() => {
    updateLangMenu();
  });

  let localesArr = Object.keys(locales).map(function(key) {
    return locales[key];
  });

  function createOptionLabel(ind) {
    if(localesArr[ind].locale === 'English') {
      return localesArr[ind].locale;
    } else {
      return localesArr[ind].locale + ' | '+localesArr[ind].native;
    }
  }

  function handleLangChange(e) {
    changeLanguage(e.target.value);
  }

  function updateLangMenu() {
    let selectMen = document.getElementById('selectLanguages');
    for (let i = 0; i < selectMen.options.length; ++i) {
      if (selectMen.options[i].value === context.language) {
        selectMen.options[i].selected = true;
      }
    }
  }

  return (

      <div className={'custom-select'}>
        <select name="" id="selectLanguages" onChange={handleLangChange}>
          {
            localesArr.map(function(locale, index) {
              let lg = localesArr[index].path;
              return <option key={index} value={lg}>{createOptionLabel(index)}</option>
            })};
          }
        </select>
        <span className="custom-arrow" />
      </div>

  )

};

export default LanguageSwitcher;