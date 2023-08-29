import React from 'react';
import styled from 'styled-components';

export const InspirationCard = ({ featured, image }) => {
  return (
    <Card>
      {featured && (
        <InspirationImg src={image} alt="test" />
      )}
    </Card>
  )
}

const Card = styled.div`

`
const InspirationImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
`
