import React from 'react';
import { Slide } from 'react-slideshow-image';
import InspirationOne from 'assets/Inspiration/inspiration_1.jpeg';
import InspirationTwo from 'assets/Inspiration/inspiration_2.jpeg';
import InspirationThree from 'assets/Inspiration/inspiration_3.jpeg';
import InspirationFour from 'assets/Inspiration/inspiration_4.jpeg';
import InspirationFive from 'assets/Inspiration/inspiration_5.jpeg';
import InspirationSix from 'assets/Inspiration/inspiration_6.jpeg';
import InspirationSeven from 'assets/Inspiration/inspiration_7.jpeg';
import InspirationEight from 'assets/Inspiration/inspiration_8.jpeg';
import InspirationNine from 'assets/Inspiration/inspiration_9.jpeg';
import InspirationTen from 'assets/Inspiration/inspiration_10.jpeg';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }
];

const Carousel = () => {
  const imagesList = [
    {
      id: 1,
      src: InspirationOne,
      alt: 'Inspiration'
    },
    {
      id: 2,
      src: InspirationTwo,
      alt: 'Inspiration'
    },
    {
      id: 3,
      src: InspirationThree,
      alt: 'Inspiration'
    },
    {
      id: 4,
      src: InspirationFour,
      alt: 'Inspiration'
    },
    {
      id: 5,
      src: InspirationFive,
      alt: 'Inspiration'
    },
    {
      id: 6,
      src: InspirationSix,
      alt: 'Inspiration'
    },
    {
      id: 7,
      src: InspirationSeven,
      alt: 'Inspiration'
    },
    {
      id: 8,
      src: InspirationEight,
      alt: 'Inspiration'
    },
    {
      id: 9,
      src: InspirationNine,
      alt: 'Inspiration'
    },
    {
      id: 10,
      src: InspirationTen,
      alt: 'Inspiration'
    }
  ];

  return (
    <Slide slidesToScroll={1} slidesToShow={1} indicators responsive={responsiveSettings}>
      {imagesList.map((item) => {
        return (
          <div className="each-slide-effect" key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        )
      })}
    </Slide>
  );
};
export default Carousel;