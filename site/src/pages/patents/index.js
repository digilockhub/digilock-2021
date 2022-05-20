import React, {useState} from "react";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {graphql} from 'gatsby';


const IndexPage = () => {

  const {t} = useTranslation();

  return (
      <Layout>
        <Seo
            title={t('Digilock is the leader in electronic locking solutions.')}
            description={t('Digilock is the leader in electronic locking solutions.')}
        />
        <div className="patents">
          <section className="hero">
            <div className="container">
              <h1>Virtual Patent Marking</h1>
              <p>Security People, Inc. DBA Digilock has been the leader in electronic locking solutions for personal
                storage for over 40 years, and continues to
                develop innovative new products and technologies that improve the daily lives of our customers.
              </p>
              <p>
                As permitted under the United States Patent Laws (see 35 USC &sect; 287), this site provides patent
                information for select Digilock products. Not all
                Digilock products are included. Categories of products are identified for convenience only, and no
                restriction of patent coverage shall be read
                into such categorization. Other Digilock products that are not listed here may be protected by one or
                more
                patents. The patents listed below are
                only applicable in the U.S., and there may be patents in other countries. By necessity, this list is an
                evolving list, as new patents are granted and
                issued, while other patents may expire over time.
              </p>
              <p>
                The following list of products may be covered by one or more of the associated U.S. Patents.
              </p>
            </div>
          </section>
          <section className={'table-container'}>
            <div className="container">
              <table>
                <thead>
                <tr>
                  <th>Category</th>
                  <th>Product Name</th>
                  <th>Patents and Published Applications</th>
                </tr>
                </thead>
                <tr>
                  <td rowSpan={'3'}>Electronic Locks</td>
                  <td>Orbit</td>
                  <td>
                    10,697,203 <br/>
                    10,711,489 <br/>
                    2020/0378157
                  </td>
                </tr>
                <tr>
                  {/*<td>&nbsp;</td>*/}
                  <td>
                    Versa <br/>
                    Sola <br/>
                    Classic
                  </td>
                  <td>
                    <div>
                      <div>
                        <p>8,490,443</p>
                        <p>8,495,898</p>
                        <p>9,208,628</p>
                        <p>9,273,492</p>
                        <p>9,222,284</p>
                        <p>9,536,359</p>
                        <p>9,631,399</p>
                        <p>10,909,789</p>
                        <p>10,930,099</p>
                        <p>D720,200</p>
                        <p>D720,201</p>
                        <p>D720,202</p>
                        <p>D730,712</p>
                      </div>
                      <div>
                        <p>D731,286</p>
                        <p>D731,287</p>
                        <p>D737,114</p>
                        <p>D752,945</p>
                        <p>D752,947</p>
                        <p>D752,948</p>
                        <p>D752,949</p>
                        <p>D753,463</p>
                        <p>D762,100</p>
                        <p>D762,101</p>
                        <p>D764,255</p>
                        <p>D764,892</p>
                        <p>D764,893</p>
                      </div>
                      <div>
                        <p>D804,278</p>
                        <p>D804,279</p>
                        <p>D832,074</p>
                        <p>D832,075</p>
                        <p>D832,076</p>
                        <p>D832,077</p>
                        <p>D832,078</p>
                        <p>D832,079</p>
                        <p>D832,080</p>
                        <p>D832,081</p>
                        <p>D832,676</p>
                        <p>D832,677</p>
                        <p>2021/0225105</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  {/*<td>Locker Locks</td>*/}
                  <td>
                    Aspire <br/>
                    Axis <br/>
                    Cue <br/>
                    Range <br/>
                    4th Gen.
                  </td>
                  <td>
                    <div>
                      <div>
                        <p>9,672,673</p>
                        <p>9,422,746</p>
                        <p>8,161,781</p>
                        <p>7,336,150</p>
                        <p>D902,001</p>
                        <p>D902,002</p>
                        <p>D902,688</p>
                        <p>D902,003</p>
                        <p>D897,187</p>
                        <p>D896,613</p>
                      </div>
                      <div>
                        <p>D896,612</p>
                        <p>D863,035</p>
                        <p>D863,034</p>
                        <p>D863,033</p>
                        <p>D863,032</p>
                        <p>D863,031</p>
                        <p>D863,030</p>
                        <p>D863,029</p>
                        <p>D863,028</p>
                        <p>D863,027</p>
                        <p>D863,026</p>
                      </div>
                      <div>
                        <p>D863,025</p>
                        <p>D863,024</p>
                        <p>D836,418</p>
                        <p>D836,417</p>
                        <p>D835,968</p>
                        <p>D764,891</p>
                        <p>D762,103</p>
                        <p>D762,102</p>
                        <p>D733,519</p>
                        <p>D730,715</p>
                        <p>D730,714</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Lockers</td>
                  <td>PackageHold</td>
                  <td>
                    9,536,359 <br/>
                    6,791,450 <br/>
                    D918,525 <br/>
                    D926,419 <br/>
                    D927,820 <br/>
                    D927,119 <br/>
                    2020/0349796 <br/>
                    2021/0225104
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>Juice Bar</td>
                  <td>10,135,268</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>
                    NextLocker <br/>
                    Core <br/>
                    Celare
                  </td>
                  <td>
                    D790,266 <br/>
                    D790,265 <br/>
                    D789,716 <br/>
                    D789,715 <br/>
                    D758,114 <br/>
                    D737,084 <br/>
                    D737,083 <br/>
                    D672,585
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>
                    PackageHold
                  </td>
                  <td>
                    9,536,359 <br/>
                    6,791,450 <br/>
                    D918,525 <br/>
                    D926,419 <br/>
                    D927,820 <br/>
                    D927,119 <br/>
                    2020/0349796 <br/>
                    2021/0225104
                  </td>
                </tr>
              </table>
            </div>
          </section>
        </div>
      </Layout>
  )
};

export default IndexPage;

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
