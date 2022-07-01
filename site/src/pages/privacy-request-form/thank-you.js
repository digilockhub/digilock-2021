import React, {useState, useEffect} from "react";
import {Trans} from 'gatsby-plugin-react-i18next';
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ContinentSettings from '../../constants/continents/geo-continents';
import CompanySettings from '../../constants/company/settings';
import {graphql} from 'gatsby';

const ThankYou = () => {

  const [linkedInURL, setLinkedInURL] = useState();

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    switch (isBrowser ? sessionStorage.getItem(ContinentSettings.SESSION_CONTINENT) : ContinentSettings.NORTH_AMERICA) {
      case ContinentSettings.EUROPE:
        setLinkedInURL(CompanySettings.LINKEDIN_EUROPE);
        break;
      case ContinentSettings.ASIA:
        setLinkedInURL(CompanySettings.LINKEDIN_ASIA);
        break;
      default:
        setLinkedInURL(CompanySettings.LINKEDIN_USA);
    }
  }, []);

  return (
      <Layout>
        <Seo title={'Thank you for your inquiry. Digilock Team'}/>
        <div className="contact">
          <section className="thank-you">
            <div className="container">
              <h1>
                <Trans>
                  thanks_inquiry
                </Trans>
              </h1>
              <p>
                <Trans>
                  thanks_team
                </Trans>
              </p>
              <p>
                <Trans>
                  thanks_news
                </Trans>
                <a href={linkedInURL}>LinkedIn</a>
              </p>
            </div>
          </section>
        </div>
      </Layout>
  )
};

export default ThankYou;

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
