import React, {useState} from 'react';
import PropTypes from "prop-types";
import {useTranslation} from 'gatsby-plugin-react-i18next';
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
                  email={companySettings.SALES_EMAIL}
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
            email={companySettings.SALES_EMAIL}
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
                  email={companySettings.SALES_EMAIL_EUROPE}
                  phone={t('telephone')}
                  phoneNumber={companySettings.PHONE_SALES_EUROPE}
              />
              : null
        }

        {
          props.geo !== 'Asia'
            ? <InfoCard
                  header={t('digilock_asia')}
                  address={t('digilock_asia_address')}
                  emailSales={t('email_sales')}
                  email={companySettings.SALES_EMAIL_ASIA}
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
