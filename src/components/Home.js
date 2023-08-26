/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Hero from '../assets/HeroImage_desktop.jpeg'
import { InnerWrapper } from './global/GlobalWrappers';

export const Home = () => {
  return (
    <>
      <HeroImage />
      <InnerWrapper>
        <PotterySection>
          <h2>Pottery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet massa pulvinar, lacinia quam ac, euismod velit. Mauris accumsan libero quis ultrices molestie. Ut scelerisque est purus, at cursus tellus pellentesque sed. Vivamus consequat, dolor non lacinia dignissim, felis lectus ornare nisl, nec porta tortor ipsum at magna.</p>
        </PotterySection>
      </InnerWrapper>
    </>
  )
}

const HeroImage = styled.div`
    height: 70vh;
    width: 100%;
    background: url(${Hero});
    background-repeat: no-repeat;background-repeat: no-repeat;
    background-position: center;
    background-size: cover; 
`
const PotterySection = styled.section`
width:75%;
text-align: center;
`