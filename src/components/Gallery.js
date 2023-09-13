import React from 'react';
import styled from 'styled-components';
import cups1 from '../assets/products/cups_1.jpeg';
import cups2 from '../assets/products/cups_2.jpeg';
import cups3 from '../assets/products/cups_3.jpeg';
import cups4 from '../assets/products/cups_4.jpeg';
import cups5 from '../assets/products/cups_5.jpeg';
import cups6 from '../assets/products/cups_6.jpeg';
import cups7 from '../assets/products/cups_7.jpeg';
import plates1 from '../assets/products/plates_1.jpeg';
import bowls1 from '../assets/products/bowls_1.jpeg';
import bowls2 from '../assets/products/bowls_2.jpeg';
import bowls3 from '../assets/products/bowls_3.jpeg';
import bowls4 from '../assets/products/bowls_4.jpeg';
import bowls5 from '../assets/products/bowls_5.jpeg';
import bowls6 from '../assets/products/bowls_6.jpeg';
import bowls7 from '../assets/products/bowls_7.jpeg';
import bowls8 from '../assets/products/bowls_8.jpeg';
import bowls9 from '../assets/products/bowls_9.jpeg';
import bowls10 from '../assets/products/bowls_10.jpeg';
import bowls11 from '../assets/products/bowls_11.jpeg';
import bowls12 from '../assets/products/bowls_12.jpeg';
import other1 from '../assets/products/other_1.jpeg';
import other2 from '../assets/products/other_2.jpeg';
import other3 from '../assets/products/other_3.jpeg';
import other4 from '../assets/products/other_4.jpeg';
import other5 from '../assets/products/other_5.jpeg';
import other6 from '../assets/products/other_6.jpeg';
import other7 from '../assets/products/other_7.jpeg';
import other8 from '../assets/products/other_8.jpeg';
import other9 from '../assets/products/other_9.jpeg';
import other10 from '../assets/products/other_10.jpeg';
import other11 from '../assets/products/other_11.jpeg';
import other12 from '../assets/products/other_12.jpeg';
import other13 from '../assets/products/other_13.jpeg';
import other14 from '../assets/products/other_14.jpeg';

export const AllImages = () => {
  const Images = [
    cups1,
    cups2,
    cups3,
    cups4,
    cups5,
    cups6,
    cups7,
    plates1,
    bowls1,
    bowls2,
    bowls3,
    bowls4,
    bowls5,
    bowls6,
    bowls7,
    bowls8,
    bowls9,
    bowls10,
    bowls11,
    bowls12,
    other1,
    other2,
    other3,
    other4,
    other5,
    other6,
    other7,
    other8,
    other9,
    other10,
    other11,
    other12,
    other13,
    other14
  ];
  return (
    <>
      <h2>All Products</h2>
      <GalleryContainer>
        {Images.map((img) => (
          <ProductImage key={img} src={img} alt={img} />
        ))}
      </GalleryContainer>
    </>
  )
}

export const CupsImages = () => {
  const Images = [
    cups1,
    cups2,
    cups3,
    cups4,
    cups5,
    cups6,
    cups7
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
    bowls7,
    bowls8,
    bowls9,
    bowls10,
    bowls11,
    bowls12
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
    other4,
    other5,
    other6,
    other7,
    other8,
    other9,
    other10,
    other11,
    other12,
    other13,
    other14
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