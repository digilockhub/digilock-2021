import React, {useState, useEffect} from 'react';
import CompanySettings from '../../constants/company/settings';
import ContinentSettings from '../../constants/continents/geo-continents';

// components" : {
// "ISO_3166-1_alpha-2" : "US",
//     "ISO_3166-1_alpha-3" : "USA",
//     "ISO_3166-2" : [
//   "US-CA"
// ],
//     "_category" : "building",
//     "_type" : "building",
//     "city" : "Petaluma",
//     "continent" : "North America",
//     "country" : "United States",
//     "country_code" : "us",
//     "county" : "Sonoma County",
//     "house_number" : "1489",
//     "postcode" : "94954",
//     "road" : "North McDowell Boulevard",
//     "state" : "California",
//     "state_code" : "CA"
// }

const GeoLocation = () => {

  const [status, setStatus] = useState(ContinentSettings.NORTH_AMERICA);
  const isBrowser = typeof window !== "undefined";
  const openCageApi = (data) => {

    let api_key = '3065e69e55dd4512b0ba1772dd030e87';
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    let api_url = 'https://api.opencagedata.com/geocode/v1/json';
    let request_url = api_url
        + '?'
        + 'key=' + api_key
        + '&q=' + encodeURIComponent(latitude + ',' + longitude)
        + '&pretty=1'
        + '&no_annotations=1';

    let request = new XMLHttpRequest();
    request.open('GET', request_url, true);
    request.onload = function () {
      if (request.status === 200) {
        // Success!
        let data = JSON.parse(request.responseText);
        setStatus(data.results[0].components.continent); // print the location
        if(isBrowser) { //gatsby build workaround
          sessionStorage.setItem(ContinentSettings.SESSION_CONTINENT, data.results[0].components.continent);
          sessionStorage.setItem(ContinentSettings.SESSION_COUNTRY, data.results[0].components.country);
          sessionStorage.setItem(ContinentSettings.SESSION_COUNTRY_CODE, data.results[0].components.country_code);
          sessionStorage.setItem(ContinentSettings.SESSION_STATE, data.results[0].components.state);
          sessionStorage.setItem(ContinentSettings.SESSION_STATE_CODE, data.results[0].components.state_code);
        }
      } else if (request.status <= 500) {
        // We reached our target server, but it returned an error
        console.log("unable to geocode! Response code: " + request.status);
        let data = JSON.parse(request.responseText);
        console.log('error msg: ' + data.status.message);
      } else {
        console.log("server error");
      }
    };
    request.onerror = function () {
      // There was a connection error of some sort
      console.log("unable to connect to server");
    };
    request.send();  // make the request
  };

  const contNumbers = {
    [ContinentSettings.AFRICA]: CompanySettings.PHONE_SALES_AMERICAS,
    [ContinentSettings.ANTARCTICA]: CompanySettings.PHONE_SALES_AMERICAS,
    [ContinentSettings.ASIA]: CompanySettings.PHONE_SALES_ASIA,
    [ContinentSettings.EUROPE]: CompanySettings.PHONE_SALES_EUROPE,
    [ContinentSettings.OCEANIA]: CompanySettings.PHONE_SALES_AMERICAS,
    [ContinentSettings.NORTH_AMERICA]: CompanySettings.PHONE_SALES_AMERICAS,
    [ContinentSettings.SOUTH_AMERICA]: CompanySettings.PHONE_SALES_AMERICAS
  };

  useEffect(() => {
    if(isBrowser) {
      if(!sessionStorage.getItem(ContinentSettings.SESSION_CONTINENT)) {
        navigator.geolocation.getCurrentPosition(openCageApi, () => {
          //if error default to NA
          setStatus(ContinentSettings.NORTH_AMERICA);
          if(isBrowser) {
            sessionStorage.setItem(ContinentSettings.SESSION_CONTINENT, ContinentSettings.NORTH_AMERICA)
          }
        });
      }
    }
  }, []);

  return (
      <p>
        <a href={"tel:"+contNumbers[status]}>{contNumbers[status]}</a>
      </p>
  )
};
export default GeoLocation;