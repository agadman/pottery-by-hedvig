import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import image1 from '../assets/products/cups_1.jpeg';
import image2 from '../assets/products/cups_2.jpeg';
import image3 from '../assets/products/cups_3.jpeg';
import image4 from '../assets/products/cups_4.jpeg';
import image5 from '../assets/products/cups_5.jpeg';
import { InnerWrapper } from './global/GlobalWrappers';

const CupsImages = () => {
  const Images = [
    image1,
    image2,
    image3,
    image4,
    image5
  ];
  return (
    <InnerWrapper>
      <h2>Cups</h2>
      <GalleryContainer>
        {Images.map((img) => (
          <ProductImage key={img} src={img} alt={img} />
        ))}
      </GalleryContainer>
    </InnerWrapper>

  )
}

export const Products = () => {
  const { submenuId } = useParams();
  return (
    <div>
      {submenuId === 'all' && <p>Here you will see all products</p>}
      {submenuId === 'cups' && <CupsImages />}
      {submenuId === 'plates' && <p>Here you will see all plates</p>}
      {submenuId === 'bowls' && <p>Here you will see all bowls</p>}
      {submenuId === 'other' && <p>Here you will see all other items</p>}
    </div>
  )
}

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  @media (min-width: 440px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`