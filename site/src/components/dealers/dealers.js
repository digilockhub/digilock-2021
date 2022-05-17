import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import ContinentSettings from '../../constants/continents/geo-continents';
import {useStaticQuery, graphql} from "gatsby";

const Dealers = (props) => {
  const Dealers = useStaticQuery(graphql`
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
  allDealersXlsxMiddleEast {
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
  allDealersXlsxLatin {
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
  allDealersXlsxEurope {
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
  allDealersXlsxAsia {
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

  const [currentDealers, setCurrentDealers] = useState(Dealers.allDealersXlsxNorthAmerica.edges);

  function handleDealers(e) {
    switch (e.target.getAttribute('data-dealers')) {
      case ContinentSettings.EUROPE:
        setCurrentDealers(Dealers.allDealersXlsxEurope.edges);
        break;
      case ContinentSettings.AFRICA:
        setCurrentDealers(Dealers.allDealersXlsxMiddleEast.edges);
        break;
      case ContinentSettings.ASIA:
        setCurrentDealers(Dealers.allDealersXlsxAsia.edges);
        break;
      case ContinentSettings.SOUTH_AMERICA:
        setCurrentDealers(Dealers.allDealersXlsxLatin.edges);
        break;
      default:
          setCurrentDealers(Dealers.allDealersXlsxNorthAmerica.edges);
    }
  }

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    if(isBrowser) {
      switch (sessionStorage.getItem('geo-continent')) {
        case ContinentSettings.EUROPE:
          document.getElementById('buttonEurope').click();
          break;
        case ContinentSettings.AFRICA:
          document.getElementById('buttonMiddleEast').click();
          break;
        case ContinentSettings.ASIA:
          document.getElementById('buttonAsia').click();
          break;
        case ContinentSettings.SOUTH_AMERICA:
          document.getElementById('buttonSouthAmerica').click();
          break;
        default:
          //NA
      }
    }
  },[]);

  return (
      <div className={'dealers'}>
        <h1>Dealers</h1>
        <div className="buttons">
          <button id={'buttonNorthAmerica'} onClick={handleDealers} data-dealers={ContinentSettings.NORTH_AMERICA}>North America</button>
          <button id={'buttonEurope'} onClick={handleDealers} data-dealers={ContinentSettings.EUROPE}>Europe</button>
          <button id={'buttonMiddleEast'} onClick={handleDealers} data-dealers={ContinentSettings.AFRICA}>Middle East</button>
          <button id={'buttonAsia'} onClick={handleDealers} data-dealers={ContinentSettings.ASIA}>Asia</button>
          <button id={'buttonSouthAmerica'} onClick={handleDealers} data-dealers={ContinentSettings.SOUTH_AMERICA}>Latin America</button>
        </div>
        <div className="dealer-cards">
          {
            currentDealers.map(({node: dealer}, index) => (
                <p key={index}>{dealer.company_name}</p>
            ))
          }
        </div>
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
