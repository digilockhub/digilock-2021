import React from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";

import logoVw from '../../images/home/client-logos/logo-vw.jpg';
import logoTesla from '../../images/home/client-logos/logo-tesla.jpg';
import logoSales from '../../images/home/client-logos/logo-salesforce.jpg';
import logoNike from '../../images/home/client-logos/logo-nike.jpg';
import logoLouvre from '../../images/home/client-logos/logo-louvre.jpg';
import logoIbm from '../../images/home/client-logos/logo-ibm.jpg';
import logoArmani from '../../images/home/client-logos/logo-armani.jpg';
import logoNiners from '../../images/home/client-logos/logo-niners.png';



class ReactSlick extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "ease",
      responsive: [
        {
          breakpoint: 972,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={logoVw} />
            </div>
            <div>
              <img src={logoTesla} />
            </div>
            <div>
              <img src={logoSales} />
            </div>
            <div>
              <img src={logoNike} />
            </div>
            <div>
              <img src={logoLouvre} />
            </div>
            <div>
              <img src={logoIbm} />
            </div>
            <div>
              <img src={logoArmani} />
            </div>
            <div>
              <img src={logoNiners} />
            </div>
          </Slider>
        </div>
    );
  }
}

export default ReactSlick;