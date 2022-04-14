
import React from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';
import locales from '../../constants/locales/locales'

const LanguageSwitcher = () => {
  const {languages, originalPath} = useI18next();

  console.log('languages', languages);
  console.log('originalPath', originalPath);

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

  return (

      <div className={'custom-select'}>
        <select name="" id="">
          {
            localesArr.map(function(locale, index) {
              return <option
                  key={index}
                  value={localesArr[index].path}
              >
                {createOptionLabel(index)}
              </option>
            })};
          }
        </select>
        <span className="custom-arrow" />
      </div>

  )

};

export default LanguageSwitcher;
