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
          <h2>By my hands to yours</h2>
          <p>My love for pottery grew from a curiosity and urge of creating things with my hands. <br /> All my work is handmade, hand-thrown & in small batches.</p>
          <p>I am today working with different kinds of clay, from porcelain to darker chocolate brown as well as different glazes. As I evolve on my pottery journey I will weed out which clay I am most comfortable working with as well as what color tones are my calling - but for now, I love exploring different shapes and glazes. My ultimate aim is to work with earthy tones, shapes and palettes found in our shared landscapes.</p>
          <p>For the ones that are interested in a customised order this is a perfect match due to my flexibility. Please mind that every item is unique with its own irregularities evident in glazing and firing. All items are lead-free dishwasher, microwave and food safe. </p>
          <p>Hopefully you find something that catches your eye or have an idea of a product that I can realize for you. All I ask is that you love them as much as I have loved making them. Thank you for supporting me and my little shop, it means a lot to have my creations as a part of your home.</p>
          <LinkToAllProductsWrapper>
            <a href="/products/all">Take me to the products</a>
          </LinkToAllProductsWrapper>
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
  h2 {
    margin-top: 4rem;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 2rem 0;
    h2 {
    margin-top: 1rem;
  }
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
    background-color: rgba(132, 85, 55, 0.4);
    width: 100%;
    height: 500px;
    position: relative;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    background-color: rgba(132, 85, 55, 0.4);
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
  top: 20px;
  left: -15px;
} 
@media screen and (min-width: 1024px) {
  border: 5px solid #fff;
  height: 500px;
  width: 500px;
  object-fit: cover;
  position: absolute;
  top: 20px;
  left: -15px;
} 
`
const LinkToAllProductsWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-weight: 600;
  a {
    text-decoration: none;
    color: #464646
  }
  a:visited {
    color: #464646
  }
  a:hover {
    text-decoration: underline;
  }
`