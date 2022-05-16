import React from 'react';
import PropTypes from "prop-types";
import CompanySettings from '../../constants/company/settings';
import {useStaticQuery, graphql} from "gatsby";

const Dealers = (props) => {

  const northAmericaDealers = useStaticQuery(graphql`
    query MyQuery {
  allDealersXlsxNorthAmerica {
    edges {
      node {
        id
        company_name
        location
        street_po_box
        city
        state
        zip_code
        country
        phone
        fax
        email
        website
      }
    }
  }
}
  `);

  console.log(northAmericaDealers);

  return (
      <div className={'dealers'}>
        <h1>Dealers</h1>
      </div>
  )
};

Dealers.propTypes = {
  // header: PropTypes.string,
  // address: PropTypes.string,
  // phone: PropTypes.string,
  // phoneNumber: PropTypes.string,
  // tollFree: PropTypes.string,
  // tollFreeNumber: PropTypes.string,
  // emailSales: PropTypes.string,
  // cls: PropTypes.string
};

export default Dealers;
