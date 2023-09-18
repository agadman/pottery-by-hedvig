/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import HeroLarge from '../assets/hero_large.jpeg';
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
          <p>Pottery by Hedvig represents a passion for the hand made. My interest in pottery is life long and strongly bonds to my experiences visiting studios and ceramic shops on the charming island of Gotland situated just off the eastern coast of Sweden in the baltic sea. I have now taken on the journey of amplifying that interest by my own hands and creativity - and I am loving every minute of it.</p>
          <p>Each piece of my pottery is hand crafted with care and precision and the beauty is that no two pieces are ever exactly alike. It starts out with a lump of clay and turns into a one-of-a-kind addition to your home and everyday use. (Of course I carefully weigh and measure the pieces to make series of cups etc.)</p>
          <p>Please look further on the website to view my crafts and hopefully you find something you like! </p>
          <p>Much love,<br />Hedvig</p>
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
    background: url(${HeroLarge});
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