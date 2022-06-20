import React from 'react';

const YouTube = ({ videos, lang, videoTitle }) => {

  let useLang;
  videos[lang] === undefined ? useLang = 'en' : useLang = lang;

  return(
    <div className="yt-video">

      <iframe
        src={videos[useLang]+'&rel=0'}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}

export default YouTube;