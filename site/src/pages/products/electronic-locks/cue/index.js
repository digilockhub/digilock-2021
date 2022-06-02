import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../../components/layout";
import Seo from "../../../../components/seo";
import {graphql} from 'gatsby';
import RevealerWrapper from '../../../../components/Revealer/RevealerWrapper';
import VideoIcons from '../../../../components/video-player/VideoIcons';
import BCPlayer360 from '../../../../components/video-player/BCPlayer360';
import {createMarkup} from '../../../../utils/utils';
import compareLeft from './images/NKCUE5GKPBN_360ROT_FF.jpg';
import compareRight from './images/NKCUE5GRFBN_360ROT_FF.jpg';
import {StaticImage} from "gatsby-plugin-image";


const Axis = (props) => {

  const {t} = useTranslation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [bcVideoId, setBcVideoId] = useState('6151935992001');

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
        <div className={'products electronic-locks cue'}>
          <section className="details">
            <div className="container">
              <h1>Cue {t('product_details')}</h1>
              <div className={'grid-two-col'}>

                <div className="grid-two-col-item">
                  <div className="revealer center-top">
                    <RevealerWrapper
                        compareLeft={compareRight}
                        compareRight={compareLeft}
                        width={200}
                        labelLeft={createMarkup(t('rfid'))}
                        labelRight={createMarkup(t('standard')+'<br />'+t('keypad'))}
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
                      {t('cue_interface_copy')}
                    </p>
                    <h3>
                      {t('power')} | 4 AA {t('batteries')}
                    </h3>
                    <p className={'pad-top'}>
                      {t('interface_power_copy_2')}*
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
                      {t('finish')} | {t('brushed_nickel')}
                    </h3>
                    <p>
                      {t('cue_body_finish_copy')}
                    </p>
                    <h3>
                      {t('body')} | {t('standard')}
                    </h3>
                    <p>
                      {t('cue_body_copy')}
                    </p>
                    <VideoIcons
                        currentVideoIndex={currentVideoIndex}
                        videoIconClickHandler={videoIconClickHandler}
                        toggleClassNames={
                          [
                            'icon-standard-keypad',
                            'icon-standard-touch'
                          ]
                        }
                        bcVideoIds={
                          [
                            '6151935992001',
                            '6151930395001'
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
                        src={'../../../../images/locks/rear-units/5g-latch.png'}
                        loading={'lazy'}
                        width={364}
                        height={247}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
                  </div>
                  <div>
                    <h2>
                      {t('deadlatch')}
                    </h2>
                    <h3>
                      {t('rear_unit')}
                    </h3>
                    <p>
                      {t('deadlatch_rear_unit_copy')}
                    </p>
                    <h3>
                      {t('assigned_use')}
                    </h3>
                    <p>
                      {t('deadlatch_assigned_use_copy')}
                    </p>
                  </div>
                </div>
                <div className="grid-two-col-item">
                  <div>
                    <StaticImage
                        src={'../../../../images/locks/rear-units/5g-bolt.png'}
                        loading={'lazy'}
                        width={364}
                        height={247}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
                  </div>
                  <div>
                    <h2>
                      {t('deadbolt')}
                    </h2>
                    <h3>
                      {t('rear_unit')}
                    </h3>
                    <p>
                      {t('deadbolt_rear_unit_copy')}
                    </p>
                    <h3>
                      {t('shared_use')}
                    </h3>
                    <p>
                      {t('deadbolt_shared_use_copy')}
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
