import React from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../../../components/layout";
import Seo from "../../../../components/seo";
import {graphql} from 'gatsby';
import RevealerWrapper from '../../../../components/Revealer/RevealerWrapper';
import {createMarkup} from '../../../../utils/utils';
import compareLeft from './images/NKAXSTWPKPBN_360ROT_FF.jpg';
import compareRight from './images/NKAXSTWPRFBN_360ROT_FF.jpg';


const Axis = (props) => {
  const {t} = useTranslation();
  return (
      <Layout>
        <Seo
            title={t('Digilock Commercial Keyless Locks For Hospitals, Hospitality and Corporations')}
            description={'Learn about the best industry commercial keyless locks that leverage proprietary technology and is supported by a dedicated customer service team.'}
        />
        <div className={'electronic-locks axis'}>
          <section className="details">
            <div className="container">
              <h1>Axis Product Details</h1>
              <div className={'grid-two-col'}>

                <div className="interface">
                  <div className="revealer">
                    <RevealerWrapper
                        compareLeft={compareRight}
                        compareRight={compareLeft}
                        width={180}
                        labelLeft={createMarkup(t('touch'))}
                        labelRight={createMarkup(t('standard'))}
                        clsName={'nextlock'}
                    />
                  </div>
                  <div className="revealer-copy">
                    <h1 className={'callout locker'}>
                      {t('interface')}
                    </h1>
                    <h2 className={'front-unit'}>
                      {t('front_unit')}
                    </h2>
                    <h2>
                      {t('standard')} {t('keypad')} : {t('rfid')}
                    </h2>
                    <p className={'pad-top'}>
                      Axis {t('interface_copy')}
                    </p>
                    <h2>
                      {t('power')} | 4 AA {t('batteries')}
                    </h2>
                    <p className={'pad-top'}>
                      {t('interface_power_copy')}*
                    </p>
                    <p className={'footnote'}>
                      <em>
                        *{t('based_on_average_usage')}
                      </em>
                    </p>
                  </div>
                </div>
                <div className="body-style">
                  <h2>Body Style</h2>
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
