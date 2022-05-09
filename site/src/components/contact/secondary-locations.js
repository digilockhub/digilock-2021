import React, {useState} from 'react';
import {graphql} from 'gatsby';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import companySettings from '../../constants/company/settings'



const SecondaryLocations = (props) => {
  const {t} = useTranslation();

  return (

      <div className={"secondary "+props.cls}>
        <div className="info-card secondary">
          <p className="header">
            DIGILOCK SHOWROOM
          </p>
          <p>
            TheMart <br/>
            222 Merchandise Mart Plaza <br/>
            Suite 1098 <br/>
            Chicago, IL 60654
          </p>
          <p>
            Email Sales / US <br/>
            Telephone +1 707-766-6000 <br/>
            Toll-Free 800-989-0201
          </p>
        </div>
        <div className="info-card secondary">
          <p className="header">
            DIGILOCK EUROPE BV
          </p>
          <p>
            Schillingweg 22 <br/>
            2153 PL Nieuw-Vennep <br/>
            The Netherlands
          </p>
          <p>
            Contact Sales / US <br/>
            Telephone +1 707-766-6000 <br/>
            Toll-Free 800-989-0201
          </p>
        </div>
        <div className="info-card secondary">
          <p className="header">
            DIGILOCK ASIA
          </p>
          <p>
            Flat B, 27th Floor Grandion Plaza <br/>
            No. 932 Cheung Sha Wan Road <br/>
            Hong Kong
          </p>
          <p>
            Contact Sales / Asia <br/>
            Telephone +852 2776 0800
          </p>
        </div>
      </div>

  )

};

export default SecondaryLocations;
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
