import React from 'react';
import { Zoom } from 'react-slideshow-image';
import InspirationOne from 'assets/Inspiration/inspiration_1.jpeg';
import InspirationTwo from 'assets/Inspiration/inspiration_2.jpeg';
import InspirationThree from 'assets/Inspiration/inspiration_3.jpeg';
import InspirationFour from 'assets/Inspiration/inspiration_4.jpeg';
import 'react-slideshow-image/dist/styles.css';

const Carousel = () => {
  const imagesList = [
    {
      id: 1,
      src: InspirationOne,
      alt: 'Image 1'
    },
    {
      id: 2,
      src: InspirationTwo,
      alt: 'Image 2'
    },
    {
      id: 3,
      src: InspirationThree,
      alt: 'Image 3'
    },
    {
      id: 4,
      src: InspirationFour,
      alt: 'Image 4'
    }
  ];

  const indicators = () => (<div className="indicator" />);

  return (
    <Zoom indicators={indicators} scale={1.4}>
      {imagesList.map((item) => {
        return (
          <div className="each-slide-effect">
            <img src={item.src} alt={item.alt} />
          </div>
        )
      })}
    </Zoom>
  );
};

export default Carousel;