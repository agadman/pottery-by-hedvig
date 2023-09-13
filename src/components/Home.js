/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Hero from '../assets/HeroImage_desktop.jpeg';
import HeroSmall from '../assets/hero_small.jpeg';
import { InnerWrapper } from './global/GlobalWrappers';
import Carousel from './Carousel.js'

export const Home = () => {
  return (
    <>
      <HeroImage />
      <InnerWrapper>
        <PotterySection>
          <HeadingWrapper>
            <h2>Welcome to Pottery by Hedvig</h2>
          </HeadingWrapper>
          <p>Pottery by Hedvig represents the pursuit of embracing a passion originating from a young age, venturing into various pottery studios and ceramic shops on the charming island of Gotland in the Baltic Sea, situated just off the eastern coast of Sweden.</p>
          <p>Each piece of my pottery is hand crafted with care and precision, ensuring that no two are exactly alike. Every piece undergoes the transformation from a simple lump of clay to a functional work of art adding a one-of-a-kind addition to your home or collection. Please look further on the website to view my crafts and hopefully you find something you like!</p>
        </PotterySection>
        <InspirationSection>
          <h3>Follow Me On My Journey</h3>
          <Carousel />
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
width: 100%;
padding: 5rem 0;
  @media screen and (min-width: 768px) {
    width: 75%;
    text-align: center;
  }
`
const HeadingWrapper = styled.div`
  width: 100%;
  text-align: center;
`
const InspirationSection = styled.section`
padding-bottom: 5rem;
text-align: center;
width: 100%;
`