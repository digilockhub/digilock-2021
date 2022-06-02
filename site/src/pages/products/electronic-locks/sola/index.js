import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../../components/layout";
import Seo from "../../../../components/seo";
import {graphql} from 'gatsby';
import RevealerWrapper from '../../../../components/Revealer/RevealerWrapper';
import VideoIcons from '../../../../components/video-player/VideoIcons';
import BCPlayer360 from '../../../../components/video-player/BCPlayer360';
import {createMarkup} from '../../../../utils/utils';
import compareLeft from './images/NKSOLA3KPBN_360ROT_FF.jpg';
import compareRight from './images/NKSOLA3RFBN_360ROT_FF.jpg';
import {StaticImage} from "gatsby-plugin-image";
import BCPlayerPlugs from '../../../../components/video-player/BCPlayerPlugs';
import ReactSlickPlugs from '../../../../components/carousel/SlickSliderPlugs';


const Axis = (props) => {

  const {t} = useTranslation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [bcVideoId, setBcVideoId] = useState('6151937549001');

  function videoIconClickHandler(index, vid) {
    setCurrentVideoIndex(index);
    setBcVideoId(vid);
  }



  return (
      <Layout>
        <Seo
            title={t('Digilock Commercial Keyless Locks For Hospitals, Hospitality and Corporations')}
            description={'Learn about the best industry commercial keyless locks that leverage proprietary technology and is supported by a dedicated customer service team.'}
        />
        <div className={'products electronic-locks sola'}>
          <section className="details">
            <div className="container">
              <h1>Sola {t('product_details')}</h1>
              <div className={'grid-two-col'}>

                <div className="grid-two-col-item">
                  <div className="revealer center-top">
                    <RevealerWrapper
                        compareLeft={compareRight}
                        compareRight={compareLeft}
                        width={140}
                        sliderPosition={0.7}
                        labelLeft={createMarkup(t('standard')+'<br />'+t('keypad'))}
                        labelRight={createMarkup(t('rfid'))}
                        clsName={'nextlock'}
                    />
                  </div>
                  <div className="product-copy">
                    <h2>
                      {t('interface')}
                    </h2>
                    <h3>
                      {t('front_unit')}
                    </h3>
                    <h3>
                      {t('standard')} {t('keypad')} : {t('rfid')}
                    </h3>
                    <p className={'pad-top'}>
                      {t('sola_interface_copy')}
                    </p>
                    <h3>
                      {t('power')} | 2 CR2450 or 4 AA {t('batteries')}
                    </h3>
                    <p className={'pad-top'}>
                      {t('interface_power_copy_3')}*
                    </p>
                    <p className={'footnote'}>
                      <em>
                        *{t('based_on_average_usage')}
                      </em>
                    </p>
                  </div>
                </div>
                <div className="grid-two-col-item">
                  <div className="video-360">
                    <BCPlayer360 vid={bcVideoId} loc={'nextlock'}  />
                  </div>
                  <div className="product-copy">
                    <h2>
                      {t('body_style')}
                    </h2>
                    <h3>
                      {t('front_unit')}
                    </h3>
                    <h3>
                      {t('finish')} | {t('brushed_nickel')} : {t('black')}
                    </h3>
                    <p>
                      {t('body_finish_copy')}
                    </p>
                    <h3>
                      {t('body')} | {t('vertical')} : {t('horizontal')}
                    </h3>
                    <p>
                      {t('sola_body_copy')}
                    </p>
                    <VideoIcons
                        currentVideoIndex={currentVideoIndex}
                        videoIconClickHandler={videoIconClickHandler}
                        toggleClassNames={
                          [
                            'icon-vs-kpd',
                            'icon-vs-rfid'
                          ]
                        }
                        bcVideoIds={
                          [
                            '6151937549001',
                            '6151938004001'
                          ]
                        }
                    >&nbsp;</VideoIcons>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="rear-units">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item">
                  <div>
                    <StaticImage
                        src={'./images/01_CAM_OPTIONS_ILF.png'}
                        loading={'lazy'}
                        width={579}
                        height={656}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
                  </div>
                  <div>
                    <h2>
                      {t('locking_options')}
                    </h2>
                    <h3>
                      {t('manual_locking')}
                    </h3>
                    <p>
                      {t('manual_locking_copy')}
                    </p>
                    <h3>
                      {t('auto_relocking')}
                    </h3>
                    <p>
                      {t('auto_relocking_copy')}
                    </p>
                  </div>
                </div>
                <div className="grid-two-col-item">
                  <div>
                    <BCPlayerPlugs vid={'6152986872001'} />
                    <div style={{width:'351px'}}>
                      <ReactSlickPlugs />
                    </div>
                  </div>
                  <div>
                    <h2>
                      {t('custom_plug')}
                    </h2>
                    <h3>
                      {t('retrofit')}
                    </h3>
                    <p>
                      {t('retrofit_copy')}
                    </p>
                    <h3>
                      {t('three_step_mounting')}
                    </h3>
                    <p>
                      {t('three_step_mounting_copy')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-delimeter container" />
          <section className="management">
            <div className="container">
              <div className="grid-two-col">
                <div className="grid-two-col-item">
                  <div>
                    <StaticImage
                        src={'../../../../images/locks/management/app-manage-keys-all.png'}
                        loading={'lazy'}
                        width={169}
                        height={192}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
                  </div>
                  <div>
                    <h2>
                      {t('key_management')}
                    </h2>
                    <p>
                      {t('key_management_copy')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
  );
};

export default Axis;
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
