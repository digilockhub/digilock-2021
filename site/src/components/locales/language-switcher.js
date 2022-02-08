
import React from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

const LanguageSwitcher = () => {
  const {languages, originalPath} = useI18next();
  return (

      <ul className={'language-switcher'}>
        {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} language={lng}>
                {lng}
              </Link>
            </li>
        ))}
      </ul>

  )

};

export default LanguageSwitcher;
