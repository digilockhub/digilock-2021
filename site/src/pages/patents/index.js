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
              <h1>
                <Trans>patent_headline</Trans>
              </h1>
              <p>
                <Trans>hero_copy</Trans>
              </p>
              <p>
                <Trans>hero_copy_2</Trans>
              </p>
              <p>
                <Trans>hero_copy_3</Trans>
              </p>
            </div>
          </section>
          <section className={'table-container'}>
            <div className="container">
              <table>
                <thead>
                <tr>
                  <th>
                    <Trans>category</Trans>
                  </th>
                  <th>
                    <Trans>product_name</Trans>
                  </th>
                  <th>
                    <Trans>patents_applications</Trans>
                  </th>
                </tr>
                </thead>
                <tr>
                  <td rowSpan={'3'}><Trans>electronic_locks</Trans></td>
                  <td>Orbit</td>
                  <td className={'css-grid'}>
                    <p>10,697,203</p>
                    <p>10,711,489</p>
                    <p>2020/0378157</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    Versa <br/>
                    Sola <br/>
                    Classic
                  </td>
                  <td className={'css-grid'}>
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
                  </td>
                </tr>
                <tr>
                  <td>
                    Aspire <br/>
                    Axis <br/>
                    Cue <br/>
                    Range <br/>
                    4th Generation
                  </td>
                  <td className={'css-grid'}>
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

                  </td>
                </tr>
                <tr>
                  <td rowSpan={'3'}>Lockers</td>
                  <td>PackageHold</td>
                  <td className={'css-grid'}>
                    <p>9,536,359</p>
                    <p>6,791,450</p>
                    <p>D918,525</p>
                    <p>D926,419</p>
                    <p>D927,820</p>
                    <p>D927,119</p>
                    <p>2020/0349796</p>
                    <p>2021/0225104</p>
                  </td>
                </tr>
                <tr>
                  <td>Juice Bar</td>
                  <td className={'css-grid'}>10,135,268</td>
                </tr>
                <tr>
                  <td>
                    NextLocker <br/>
                    Core <br/>
                    Celare
                  </td>
                  <td>
                    <p>D790,266</p>
                    <p>D790,265</p>
                    <p>D789,716</p>
                    <p>D789,715</p>
                    <p>D758,114</p>
                    <p>D737,084</p>
                    <p>D737,083</p>
                    <p>D672,585</p>
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
