import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../../components/layout";
import Seo from "../../../../components/seo";
import {graphql} from 'gatsby';
import VideoIcons from '../../../../components/video-player/VideoIcons';
import BCPlayer360 from '../../../../components/video-player/BCPlayer360';
import {createMarkup} from '../../../../utils/utils';
import {StaticImage} from "gatsby-plugin-image";


const Axis = (props) => {

  const {t} = useTranslation();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [bcVideoId, setBcVideoId] = useState('6151952804001');
  const [whichInterface, setWhichInterface] = useState('dial');

  function videoIconClickHandler(index, vid) {
    setCurrentVideoIndex(index);
    setBcVideoId(vid);
  }

  function setInterfaceHandler(e) {
    setWhichInterface(e.target.getAttribute('data-value'));
  }

  return (
      <Layout>
        <Seo
            title={t('Digilock Commercial Keyless Locks For Hospitals, Hospitality and Corporations')}
            description={'Learn about the best industry commercial keyless locks that leverage proprietary technology and is supported by a dedicated customer service team.'}
        />
        <div className={'products electronic-locks mech'}>
          <section className="details">
            <div className="container">
              <h1>Mech {t('product_details')}</h1>
              <div className={'grid-two-col'}>

                <div className="grid-two-col-item">
                  <div className="revealer">

                    {whichInterface === 'dial' ? <StaticImage
                        src={'./images/NKDC_360ROT_FF.jpg'}
                        loading={'lazy'}
                        width={173}
                        height={319}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    /> : null}
                    {whichInterface === 'hasp' ? <StaticImage
                        src={'./images/hasp.png'}
                        loading={'lazy'}
                        width={213}
                        height={359}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    /> : null}
                    {whichInterface === 'laser-cam' ? <StaticImage
                        src={'./images/laser-cam.png'}
                        loading={'lazy'}
                        width={213}
                        height={359}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    /> : null}
                  </div>
                  <div>
                    <h2>
                      {t('interface')}
                    </h2>
                    <h3>
                      {t('front_unit')}
                    </h3>
                    <h3>
                      <span
                          data-value={'dial'}
                          onClick={setInterfaceHandler}>
                        {t('dial')}
                      </span> :&nbsp;
                      <span
                          data-value={'hasp'}
                          onClick={setInterfaceHandler}>
                        {t('hasp')}
                      </span> :&nbsp;
                      <span
                          data-value={'laser-cam'}
                          onClick={setInterfaceHandler}>
                        {t('laser_cam')}
                      </span>
                    </h3>
                    <p className={'pad-top'}>
                      {whichInterface === 'dial' ? t('mech_dial_copy') : null}
                      {whichInterface === 'hasp' ? t('mech_hasp_copy') : null}
                      {whichInterface === 'laser-cam' ? t('mech_laser_cam_copy') : null}
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
                      {t('body')} | {t('dial')} : {t('hasp')} : {t('laser_cam')}
                    </h3>
                    <p>
                      {currentVideoIndex === 0 ? t('mech_body_style_copy') + ' '+ t('mech_body_style_copy_with_cam') : null}
                      {currentVideoIndex > 0 ? t('mech_body_style_copy') : null}
                    </p>
                    <VideoIcons
                        currentVideoIndex={currentVideoIndex}
                        videoIconClickHandler={videoIconClickHandler}
                        toggleClassNames={
                          [
                            'icon-mech-dial',
                            'icon-mech-hasp',
                            'icon-mech-cam '
                          ]
                        }
                        bcVideoIds={
                          [
                            '6151952804001',
                            '6151953273001',
                            '6151952911001'
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
                        src={'./images/mech-keys.png'}
                        loading={'lazy'}
                        width={190}
                        height={207}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
                  </div>
                  <div>
                    <h2>
                      {t('mech_lock_management')}
                    </h2>
                    <p>
                      {t('mech_lock_management_copy')}<br /><Link to='/contact/'>{t('contact_digilock_sales')}</Link>
                    </p>
                  </div>
                </div>
                <div className="grid-two-col-item">
                  <div>
                    <StaticImage
                        src={'./images/nk_mech_br_isometric_0TS2x.png'}
                        loading={'lazy'}
                        width={267}
                        height={281}
                        quality={100}
                        formats={["auto", "webp", "avif"]}
                        alt="NEED ALT TAG"
                    />
                  </div>
                  <div>
                    <h2>
                      {t('finish')}
                    </h2>
                    <p>
                      {t('mech_finish_copy')}
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
