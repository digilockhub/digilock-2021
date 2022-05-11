import React, {useState} from 'react';
import {graphql} from 'gatsby';
import PropTypes from "prop-types";
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import companySettings from '../../constants/company/settings';
import InfoCard from '../../components/contact/info-card';

const SecondaryLocations = (props) => {
  const {t} = useTranslation();

  return (
      <div className={"secondary "+props.cls}>

        {
          props.geo !== 'North America'
            ? <InfoCard
                  header={t('digilock_americas')}
                  address={t('digilock_americas_address')}
                  emailSales={t('email_sales')}
                  phone={t('telephone')}
                  phoneNumber={companySettings.PHONE_SALES_AMERICAS}
                  tollFree={t('toll_free')}
                  tollFreeNumber={companySettings.PHONE_SALES_TOLL_FREE_AMERICAS}
              />
              : null
        }

        <InfoCard
            header={t('digilock_showroom')}
            address={t('digilock_showroom_address')}
            emailSales={t('email_sales')}
            phone={t('telephone')}
            phoneNumber={companySettings.PHONE_SALES_AMERICAS}
            tollFree={t('toll_free')}
            tollFreeNumber={companySettings.PHONE_SALES_TOLL_FREE_AMERICAS}
        />

        {
          props.geo !== 'Europe'
            ? <InfoCard
                  header={t('digilock_europe')}
                  address={t('digilock_europe_address')}
                  emailSales={t('email_sales')}
                  phone={t('telephone')}
                  phoneNumber={companySettings.PHONE_SALES_AMERICAS}
                  tollFree={t('toll_free')}
                  tollFreeNumber={companySettings.PHONE_SALES_TOLL_FREE_AMERICAS}
              />
              : null
        }

        {
          props.geo !== 'Asia'
            ? <InfoCard
                  header={t('digilock_asia')}
                  address={t('digilock_asia_address')}
                  emailSales={t('contact_sales_asia')}
                  phone={t('telephone')}
                  phoneNumber={companySettings.PHONE_SALES_ASIA}
              />
              : null
        }
      </div>
  )
};

SecondaryLocations.propTypes = {
  cls: PropTypes.string,
  geo: PropTypes.string
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
