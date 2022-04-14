
import React from 'react';
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

const LanguageSwitcher = () => {
  const {languages, originalPath} = useI18next();
  return (

      <div className={'custom-select'}>
        <select name="" id="">
          <option value="zh">Chinese | 中文</option>
          <option value="nl">Dutch | Nederlands</option>
          <option selected="" value="en">English</option>
          <option value="fr">French | Français</option>
          <option value="de">German | Deutsche</option>
          <option value="ja">Japanese | 日本語</option>
          <option value="ko">Korean | 한국어</option>
          <option value="pt">Portuguese | Português</option>
          <option value="es">Spanish | Español</option>
          <option value="tr">Turkish | Türk</option>
        {/*{languages.map((lng) => (*/}
        {/*    <option key={lng} value={''}>*/}
        {/*      {'English'}*/}
        {/*    </option>*/}
        {/*))}*/}
        </select>
        <span className="custom-arrow"></span>
      </div>

  )

};

export default LanguageSwitcher;


{/*<div className="custom-select">*/}
{/*  <select name="" id="">*/}
{/*    <option value="">English</option>*/}
{/*    <option value="">EnglishEnglish</option>*/}
{/*    <option value="">Item 3</option>*/}
{/*    <option value="">Item 4</option>*/}
{/*    <option value="">Item 5</option>*/}
{/*  </select>*/}
{/*  <span className="custom-arrow"></span>*/}
{/*</div>*/}

{/*<Link to={originalPath} language={lng}>*/}
{/*  {*/}
{/*    lng*/}
{/*  }*/}
{/*</Link>*/}
