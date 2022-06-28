import React from "react";
import Slider from "react-slick";

import logoVw from '../../images/home/client-logos/VW_Volkswagen.svg';
import logoTesla from '../../images/home/client-logos/Tesla-logo.svg';
import logoSales from '../../images/home/client-logos/salesforce.svg';
import logoNike from '../../images/home/client-logos/logo-nike.jpg';
import logoLouvre from '../../images/home/client-logos/louvre.png';
import logoIbm from '../../images/home/client-logos/ibm_logo.svg';
import logoArmani from '../../images/home/client-logos/armani.svg';
import logoNiners from '../../images/home/client-logos/49ers_logo.svg';



class ReactSlick extends React.Component {
  render() {
    let settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      swipeToSlide: true,
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