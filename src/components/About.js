/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { InnerWrapper } from './global/GlobalWrappers';
import Hedvig from '../assets/headshot_hedvig.jpeg';

export const About = () => {
  return (
    <InnerWrapper>
      <AboutContainer>
        <RightSide>
          <ImageContainer>
            <HeadShotImage src={Hedvig} alt="Image of Artist" />
          </ImageContainer>
        </RightSide>
        <LeftSide>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet massa pulvinar, lacinia quam ac, euismod velit. Mauris accumsan libero quis ultrices molestie. Ut scelerisque est purus, at cursus tellus pellentesque sed. Vivamus consequat, dolor non lacinia dignissim, felis lectus ornare nisl, nec porta tortor ipsum at magna.</p>
        </LeftSide>
      </AboutContainer>
    </InnerWrapper>
  )
}

const AboutContainer = styled.div`
margin: 8rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`

const RightSide = styled.div`
@media screen and (min-width: 768px) {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`
const LeftSide = styled.div`
@media screen and (min-width: 768px) {
  width: 100%;
  padding: 8rem 0;
  }
@media screen and (min-width: 1024px) {
  width: 100%;
  padding-right: 8rem;
  }
`
const ImageContainer = styled.div`
  background-color: none;

  @media screen and (min-width: 768px) {
  display: block;
  background-color: rgba(132, 85, 55, 0.6);
  width: 100%;
  height: 500px;
  position: relative;
  }

@media screen and (min-width: 1024px) {
  display: block;
  background-color: rgba(132, 85, 55, 0.6);
  width: 100%;
  height: 500px;
  position: relative;
  }
`
const HeadShotImage = styled.img`
@media screen and (min-width: 768px) {
  border: 5px solid #fff;
  height: 500px;
  width: 500px;
  object-fit: cover;
  position: absolute;
  top: 50px;
  left: -60px;
  } 
@media screen and (min-width: 1024px) {
  border: 5px solid #fff;
  height: 500px;
  width: 500px;
  object-fit: cover;
  position: absolute;
  top: 50px;
  left: -60px;
  } 
`