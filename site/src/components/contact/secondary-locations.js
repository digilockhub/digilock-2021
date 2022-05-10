import React, {useState} from 'react';
import {graphql} from 'gatsby';
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import companySettings from '../../constants/company/settings';
import InfoCard from '../../components/contact/info-card';

const SecondaryLocations = (props) => {
  const {t} = useTranslation();
  return (
      <div className={"secondary "+props.cls}>
        <InfoCard
            header={t('digilock_showroom')}
            address={t('digilock_showroom_address')}
            emailSales={t('email_sales')}
            phone={t('telephone')}
            phoneNumber={companySettings.PHONE_SALES_AMERICAS}
            tollFree={t('toll_free')}
            tollFreeNumber={companySettings.PHONE_SALES_TOLL_FREE_AMERICAS}
        />
        <InfoCard
            header={t('digilock_europe')}
            address={t('digilock_europe_address')}
            emailSales={t('email_sales')}
            phone={t('telephone')}
            phoneNumber={companySettings.PHONE_SALES_AMERICAS}
            tollFree={t('toll_free')}
            tollFreeNumber={companySettings.PHONE_SALES_TOLL_FREE_AMERICAS}
        />
        <InfoCard
            header={t('digilock_asia')}
            address={t('digilock_asia_address')}
            emailSales={t('contact_sales_asia')}
            phone={t('telephone')}
            phoneNumber={companySettings.PHONE_SALES_ASIA}
        />
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
