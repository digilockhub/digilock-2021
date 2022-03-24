import React, {useState} from 'react';
import { Carousel } from 'react-carousel-minimal';


const CarouselWrapper = () => {

  const data = [
    {
      image: "https://placekitten.com/1200/462?image=1",
      caption: `<div>
                  San Francisco
                  <br/>
                  Next line
                </div>`
    },
    {
      image: "https://placekitten.com/1200/462?image=2",
      caption: "Scotland"
    },
    {
      image: "https://placekitten.com/1200/462?image=3",
      caption: "Darjeeling"
    },
    {
      image: "https://placekitten.com/1200/462?image=4",
      caption: "San Francisco"
    },
    {
      image: "https://placekitten.com/1200/462?image=5",
      caption: "Scotland"
    },
    {
      image: "https://placekitten.com/1200/462?image=6",
      caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    display: 'none',
    fontSize: '2em',
    fontWeight: 'bold'
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  };

  return (

      <div style={{ textAlign: "center" }}>
        <div>
          <Carousel
              data={data}
              time={2000}
              width="100%"
              height="462px"
              captionStyle={captionStyle}
              radius="0"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={false}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "none",
                maxHeight: "500px",
                margin: "0 auto",
              }}
          />
        </div>
      </div>

  )

};

export default CarouselWrapper;
