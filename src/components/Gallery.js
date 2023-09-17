/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import ModalImage from 'react-modal-image';

const importAllImages = (context) => {
  return context.keys().map(context);
};

const imagesContext = require.context('../assets/products', false, /\.(jpeg)$/);

const categories = {
  All: new Set(importAllImages(imagesContext)),
  Cups: new Set(importAllImages(imagesContext).filter((img) => img.includes('cups'))),
  Plates: new Set(importAllImages(imagesContext).filter((img) => img.includes('plates'))),
  Bowls: new Set(importAllImages(imagesContext).filter((img) => img.includes('bowls'))),
  Other: new Set(importAllImages(imagesContext).filter((img) => img.includes('other')))
};

export const Gallery = ({ category }) => {
  const Images = Array.from(categories[category]);

  if (!Images || Images.length === 0) {
    return <p>No images found for this category.</p>;
  }

  return (
    <>
      <h2>{category}</h2>
      <GalleryContainer>
        {Images.map((img, index) => (
          <ModalImage
            className="product-image"
            key={index}
            small={img}
            large={img}
            alt="Hello World!" />
        ))}
      </GalleryContainer>
    </>
  );
};

const GalleryContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 gap: 10px;
 @media (min-width: 540px) {
   grid-template-columns: repeat(2, 1fr);
 }
 @media screen and (min-width: 940px) {
   grid-template-columns: repeat(3, 1fr);
   background-color: rgba(132, 85, 55, 0.3);
   padding: 30px;
 }
 @media screen and (min-width: 1206px) {
   grid-template-columns: repeat(4, 1fr);
   background-color: rgba(132, 85, 55, 0.3);
   padding: 30px;
 }
 .product-image {
   width: 100%;
   // height: 300px;
   object-fit: cover;
 }
`