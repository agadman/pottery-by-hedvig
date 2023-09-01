import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { InnerWrapper } from './global/GlobalWrappers';
import { CupsImages, PlatesImages, BowlsImages, OtherImages } from './Gallery';

export const Products = () => {
  const { submenuId } = useParams();
  return (
    <InnerWrapper>
      <Content>
        {submenuId === 'all' && <p>Here you will see all products</p>}
        {submenuId === 'cups' && <CupsImages />}
        {submenuId === 'plates' && <PlatesImages />}
        {submenuId === 'bowls' && <BowlsImages />}
        {submenuId === 'other' && <OtherImages />}
      </Content>
    </InnerWrapper>
  )
}

const Content = styled.div`
  padding: 5rem 0;
  text-align: center;
`