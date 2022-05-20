import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import ContinentSettings from '../../constants/continents/geo-continents';
import {useStaticQuery, graphql} from "gatsby";
import {Trans} from "react-i18next";

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
  const [selectedDealer, setSelectedDealer] = useState(ContinentSettings.NORTH_AMERICA);

  function handleDealers(e) {
    switch (e.target.getAttribute('data-dealers')) {
      case ContinentSettings.EUROPE:
        setCurrentDealers(Dealers.allDealersXlsxEurope.edges);
        setSelectedDealer(ContinentSettings.EUROPE);
        break;
      case ContinentSettings.AFRICA:
        setCurrentDealers(Dealers.allDealersXlsxMiddleEast.edges);
        setSelectedDealer(ContinentSettings.AFRICA);
        break;
      case ContinentSettings.ASIA:
        setCurrentDealers(Dealers.allDealersXlsxAsia.edges);
        setSelectedDealer(ContinentSettings.ASIA);
        break;
      case ContinentSettings.SOUTH_AMERICA:
        setCurrentDealers(Dealers.allDealersXlsxLatin.edges);
        setSelectedDealer(ContinentSettings.SOUTH_AMERICA);
        break;
      default:
        setCurrentDealers(Dealers.allDealersXlsxNorthAmerica.edges);
        setSelectedDealer(ContinentSettings.NORTH_AMERICA);

    }
  }

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
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
  }, []);

  return (
      <section className="find-partner">
        <div className="container">
          <h1>
            <Trans>
              find_partner
            </Trans>
          </h1>
          <div className={'dealers'}>
            <div className="buttons">
              <button
                  className={selectedDealer === ContinentSettings.NORTH_AMERICA ? 'selected' : ''}
                  id={'buttonNorthAmerica'}
                  onClick={handleDealers}
                  data-dealers={ContinentSettings.NORTH_AMERICA}>
                North America
              </button>
              <button
                  className={selectedDealer === ContinentSettings.EUROPE ? 'selected' : ''}
                  id={'buttonEurope'}
                  onClick={handleDealers}
                  data-dealers={ContinentSettings.EUROPE}>
                Europe
              </button>
              <button
                  className={selectedDealer === ContinentSettings.AFRICA ? 'selected' : ''}
                  id={'buttonMiddleEast'}
                  onClick={handleDealers}
                  data-dealers={ContinentSettings.AFRICA}>
                Middle East
              </button>
              <button
                  className={selectedDealer === ContinentSettings.ASIA ? 'selected' : ''}
                  id={'buttonAsia'}
                  onClick={handleDealers}
                  data-dealers={ContinentSettings.ASIA}>
                Asia
              </button>
              <button
                  className={selectedDealer === ContinentSettings.SOUTH_AMERICA ? 'selected' : ''}
                  id={'buttonSouthAmerica'}
                  onClick={handleDealers}
                  data-dealers={ContinentSettings.SOUTH_AMERICA}>
                Latin America
              </button>
            </div>

            <div className="dealer-locations">
              {
                currentDealers.map(({node: dealer}, index) => (
                    <div className={'dealer'} key={index}>
                      <h4>{dealer.company_name}</h4>
                      <p>
                        {dealer.street_po_box}<br/>
                        {dealer.city} {dealer.state}<br/>
                        <a href={"tel:" + dealer.phone}>{dealer.phone}</a><br/>
                        {dealer.country}<br/>
                        {dealer.email}<br/>
                        <a href={'mailto:' + dealer.email}>
                          {props.emailPartner}
                        </a><br/>
                        <a href={dealer.website}>
                          {props.visitPartner}
                        </a>

                      </p>
                    </div>
                ))
              }
            </div>

          </div>
        </div>
      </section>
  )


};

Dealers.propTypes = {
  emailPartner: PropTypes.string,
  visitPartner: PropTypes.string
};

export default Dealers;
