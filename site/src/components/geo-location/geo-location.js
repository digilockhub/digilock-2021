import React, {useState, useEffect} from 'react';
import CompanySettings from '../../constants/company/settings';


const GeoLocation = () => {

  const [status, setStatus] = useState('North America');
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
          sessionStorage.setItem('geo', data.results[0].components.continent);
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
    "Africa": CompanySettings.PHONE_SALES_AMERICAS,
    "Antarctica": CompanySettings.PHONE_SALES_AMERICAS,
    "Asia": CompanySettings.PHONE_SALES_ASIA,
    "Europe": CompanySettings.PHONE_SALES_EUROPE,
    "Oceania": CompanySettings.PHONE_SALES_AMERICAS,
    "North America": CompanySettings.PHONE_SALES_AMERICAS,
    "South America": CompanySettings.PHONE_SALES_AMERICAS
  };

  useEffect(() => {
    if(isBrowser) {
      if(!sessionStorage.getItem('geo')) {
        navigator.geolocation.getCurrentPosition(openCageApi, () => {
        });
      } else {
        setStatus(sessionStorage.getItem('geo'));
      }
    }
  }, []);

  return (

      <p>
        {contNumbers[status]}
      </p>

  )

};

export default GeoLocation;