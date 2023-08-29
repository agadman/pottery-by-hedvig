/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import Hero from '../assets/HeroImage_desktop.jpeg'
import { InnerWrapper } from './global/GlobalWrappers';
import { InspirationCard } from './InspirationCard'
import data from '../data.json'
import 'react-slideshow-image/dist/styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export const Home = () => {
  return (
    <>
      <HeroImage />
      <InnerWrapper>
        <PotterySection>
          <h2>Pottery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet massa pulvinar, lacinia quam ac, euismod velit. Mauris accumsan libero quis ultrices molestie. Ut scelerisque est purus, at cursus tellus pellentesque sed. Vivamus consequat, dolor non lacinia dignissim, felis lectus ornare nisl, nec porta tortor ipsum at magna.</p>
        </PotterySection>
        <h2>Inspiration</h2>
        <CarouselWrapper>
          <Carousel>
            {data.filter((project) => project.featured).reverse().map((project) => (
              <InspirationCard
                key={project.id}
                image={project.image}
                featured />
            ))}
          </Carousel>
        </CarouselWrapper>
      </InnerWrapper>
    </>
  )
}

const CarouselWrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
  width: 50%;
  }
`

const HeroImage = styled.div`
    height: 75vh;
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