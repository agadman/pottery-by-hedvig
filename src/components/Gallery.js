import React from 'react';
import styled from 'styled-components';
import cups1 from '../assets/products/cups_1.jpeg';
import cups2 from '../assets/products/cups_2.jpeg';
import cups3 from '../assets/products/cups_3.jpeg';
import cups4 from '../assets/products/cups_4.jpeg';
import cups5 from '../assets/products/cups_5.jpeg';
import cups6 from '../assets/products/cups_6.jpeg';
import cups7 from '../assets/products/cups_7.jpeg';
import cups8 from '../assets/products/cups_8.jpeg';
import cups9 from '../assets/products/cups_9.jpeg';
import plates1 from '../assets/products/plates_1.jpeg';
import bowls1 from '../assets/products/bowls_1.jpeg';
import bowls2 from '../assets/products/bowls_2.jpeg';
import bowls3 from '../assets/products/bowls_3.jpeg';
import bowls4 from '../assets/products/bowls_4.jpeg';
import bowls5 from '../assets/products/bowls_5.jpeg';
import bowls6 from '../assets/products/bowls_6.jpeg';
import bowls7 from '../assets/products/bowls_7.jpeg';
import other1 from '../assets/products/other_1.jpeg';
import other2 from '../assets/products/other_2.jpeg';
import other3 from '../assets/products/other_3.jpeg';
import other4 from '../assets/products/other_4.jpeg';

export const CupsImages = () => {
  const Images = [
    cups1,
    cups2,
    cups3,
    cups4,
    cups5,
    cups6,
    cups7,
    cups8,
    cups9
  ];
  return (
    <>
      <h2>Cups</h2>
      <GalleryContainer>
        {Images.map((img) => (
          <ProductImage key={img} src={img} alt={img} />
        ))}
      </GalleryContainer>
    </>
  )
}

export const PlatesImages = () => {
  const Images = [
    plates1
  ];
  return (
    <>
      <h2>Plates</h2>
      <GalleryContainer>
        {Images.map((img) => (
          <ProductImage key={img} src={img} alt={img} />
        ))}
      </GalleryContainer>
    </>
  )
}
export const BowlsImages = () => {
  const Images = [
    bowls1,
    bowls2,
    bowls3,
    bowls4,
    bowls5,
    bowls6,
    bowls7
  ];
  return (
    <>
      <h2>Bowls</h2>
      <GalleryContainer>
        {Images.map((img) => (
          <ProductImage key={img} src={img} alt={img} />
        ))}
      </GalleryContainer>
    </>
  )
}
export const OtherImages = () => {
  const Images = [
    other1,
    other2,
    other3,
    other4
  ];
  return (
    <>
      <h2>Other</h2>
      <GalleryContainer>
        {Images.map((img) => (
          <ProductImage key={img} src={img} alt={img} />
        ))}
      </GalleryContainer>
    </>
  )
}
const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  @media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1206px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`