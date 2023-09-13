/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Hero from '../assets/HeroImage_desktop.jpeg';
// import HeroSmall from '../assets/hero_small.jpeg';
import MobileImg from '../assets/mobileImg.jpeg';
import { InnerWrapper } from './global/GlobalWrappers';
import Carousel from './Carousel.js'

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
          <Carousel />
        </InspirationSection>
      </InnerWrapper>
    </>
  )
}

const HeroImage = styled.div`
    height: 100vh;
    width: 100%;
    background: url(${MobileImg});
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
width: 100%;
text-align: center;
padding: 5rem 0;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`
const InspirationSection = styled.section`
padding-bottom: 5rem;
text-align: center;
width: 100%;
`