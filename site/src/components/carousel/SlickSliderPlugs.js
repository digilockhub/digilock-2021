import React from "react";
import Slider from "react-slick";

import caroOneImage from './images-custom-plugs/MPLUG_Bisley_OW.png';
import caroTwoImage from './images-custom-plugs/MPLUG_hafele_OW.png';
import caroThreeImage from './images-custom-plugs/MPLUG_haworth_OW.png';
import caroFourImage from './images-custom-plugs/MPLUG_HermanMiller_OW.png';
import caroFiveImage from './images-custom-plugs/MPLUG_JuNie_OW.png';
import caroSixImage from './images-custom-plugs/MPLUG_Ocura_OW.png';
import caroSevenImage from './images-custom-plugs/MPLUG_Steelcase_OW.png';
import caroEightImage from './images-custom-plugs/MPLUG_Timberline_OW.png';
import caroNineImage from './images-custom-plugs/MPLUG_Wesko1_OW.png';
import caroTenImage from './images-custom-plugs/MPLUG_Wesko2_OW.png';
class ReactSlickPlugs extends React.Component {
  render() {
    let settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      // variableWidth: true,
      cssEase: "ease"
    };
    return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src={caroOneImage} />
            </div>
            <div>
              <img src={caroTwoImage} />
            </div>
            <div>
              <img src={caroThreeImage} />
            </div>
            <div>
              <img src={caroFourImage} />
            </div>
            <div>
              <img src={caroFiveImage} />
            </div>
            <div>
              <img src={caroSixImage} />
            </div>
            <div>
              <img src={caroSevenImage} />
            </div>
            <div>
              <img src={caroEightImage} />
            </div>
            <div>
              <img src={caroNineImage} />
            </div>
            <div>
              <img src={caroTenImage} />
            </div>
          </Slider>
        </div>
    );
  }
}

export default ReactSlickPlugs;