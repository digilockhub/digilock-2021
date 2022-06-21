  import React, {useState} from 'react';
import {StaticImage} from "gatsby-plugin-image";
import {Trans, useI18next, I18nextContext} from "gatsby-plugin-react-i18next";
import Accordion from '../../../../components/ui/legacy/Accordion/Accordion'
import YouTube from "../../../../components/video-player/YouTube";
let youTubeVideos = {
  "rfid": {
    "de": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_ZKyGd1BIrACwB5Gt4_wofy",
    "en": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_Y3V4KeMddZqrCSE6lhFoYE",
    "es": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_bn75m9zQVyntqol5yCsceg",
    "fr": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_bqnxLZyut13OesYDxPpI4W"
  },
  "keypad": {
    "de": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_a7R28ZivO_-fd8Y-MTyZyj",
    "en": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_YgRaqo5bk3bsSfVb2KYvt3",
    "es": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_YMPHWCheMMqlPiZZ22ZLCk",
    "fr": "https://www.youtube.com/embed/videoseries?list=PLXWP8g8Rnc_bonduB1wy0onXVwUqN26bq"
  }
}

const Tab = (props) => {
  const {changeLanguage} = useI18next();
  const context = React.useContext(I18nextContext);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) => {
    return toggleState === index ? className : '';
  };

  return (
      <div className={'tab-container'}>
        <ul className="tab-list unstyled-list">
          <li
              className={getActiveClass(1, 'active')}
              onClick={() => toggleTab(1)}
          >
            A Series Standard <Trans>keypad</Trans>
          </li>
          <li
              className={getActiveClass(2, 'active')}
              onClick={() => toggleTab(2)}
          >
            A Series Standard <Trans>rfid</Trans>
          </li>
        </ul>
        <div className="tab-content-container">
          <div className={"tab-content "+getActiveClass(1, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'../../../../images/locks/fourth-generation/keypad-vertical.png'}
                  loading={'lazy'}
                  width={'268'}
                  height={'300'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'legacy-support'}>
                {/*VIDEOS*/}
                <div label="Standard Keypad Instructional Videos">
                  <YouTube videos={youTubeVideos.keypad} lang={context.language} videoTitle={'Standard Keypad Instructional Videos'} />
                </div>
                {/*VIDEOS*/}
                <div style={{display: 'none'}} label="Standard Keypad Instructional Videos">
                  <YouTube videos={youTubeVideos.keypad} lang={context.language} videoTitle={'Standard Keypad Instructional Videos'} />
                </div>
              </Accordion>
            </div>
          </div>
          <div className={"tab-content "+getActiveClass(2, 'active')}>
            <div className="front-rear">
              <StaticImage
                  src={'../../../../images/locks/fourth-generation/rfid-vertical.png'}
                  loading={'lazy'}
                  width={'268'}
                  height={'300'}
                  quality={100}
                  formats={["auto", "webp", "avif"]}
                  alt="Aspire Smart Lock"
              />
            </div>
            <div className="lists">
              <Accordion clsName={'legacy-support'}>
                {/*VIDEOS*/}
                <div label="Standard Keypad Instructional Videos">
                  <YouTube videos={youTubeVideos.rfid} lang={context.language} videoTitle={'Standard Keypad Instructional Videos'} />
                </div>
                {/*VIDEOS*/}
                <div style={{display: 'none'}} label="Standard Keypad Instructional Videos">
                  <YouTube videos={youTubeVideos.rfid} lang={context.language} videoTitle={'Standard Keypad Instructional Videos'} />
                </div>
              </Accordion>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Tab;