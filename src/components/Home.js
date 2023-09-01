/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import InspirationOne from 'assets/Inspiration/inspiration_1.jpeg';
import InspirationTwo from 'assets/Inspiration/inspiration_2.jpeg';
import InspirationThree from 'assets/Inspiration/inspiration_3.jpeg';
import Flickity from 'react-flickity-component';
import Hero from '../assets/HeroImage_desktop.jpeg';
import HeroSmall from '../assets/hero_small.jpeg';
import { InnerWrapper } from './global/GlobalWrappers';
import { Slider } from './Swiper';

const CarouselTwo = () => {
  const flickityOptions = {
    initialIndex: 2
  }
  return (
    <Flickity
      className="carousel" // default ''
      elementType="div" // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static>
      <img src={InspirationOne} />
      <img src={InspirationTwo} />
      <img src={InspirationThree} />
    </Flickity>
  );
}

export const Home = () => {
  return (
    <>
      <HeroImage />
      <InnerWrapper>
        <PotterySection>
          <h2>Pottery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet massa pulvinar, lacinia quam ac, euismod velit. Mauris accumsan libero quis ultrices molestie. Ut scelerisque est purus, at cursus tellus pellentesque sed. Vivamus consequat, dolor non lacinia dignissim, felis lectus ornare nisl, nec porta tortor ipsum at magna.</p>
        </PotterySection>
        <InspirationSection>
          <h2>Inspiration</h2>
          <Slider />
          <CarouselTwo />
        </InspirationSection>
      </InnerWrapper>
    </>
  )
}

const HeroImage = styled.div`
    height: 100vh;
    width: 100%;
    background: url(${HeroSmall});
    background-repeat: no-repeat;background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
    @media screen and (min-width: 768px) {
      background: url(${Hero});
      background-repeat: no-repeat;background-repeat: no-repeat;
      background-position: center;
      background-size: cover; 
  }
`
const PotterySection = styled.section`
width:75%;
text-align: center;
padding: 5rem 0;
`
const InspirationSection = styled.section`
padding-bottom: 5rem;
text-align: center;
width: 50%;
`