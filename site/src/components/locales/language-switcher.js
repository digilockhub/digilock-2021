
import React from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

const LanguageSwitcher = () => {
  const {languages, originalPath} = useI18next();
  return (

      <div className={'language-switcher'}>
        {languages.map((lng) => (
            <span key={lng}>
              <Link to={originalPath} language={lng}>
                {
                  lng
                }
              </Link>
            </span>
        ))}
      </div>

  )

};

export default LanguageSwitcher;
