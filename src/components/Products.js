import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { InnerWrapper } from './global/GlobalWrappers';
import { Gallery } from './Gallery';

export const Products = () => {
  const { submenuId } = useParams();
  let category = '';

  switch (submenuId) {
    case 'all':
      category = 'All';
      break;
    case 'cups':
      category = 'Cups';
      break;
    case 'plates':
      category = 'Plates';
      break;
    case 'bowls':
      category = 'Bowls';
      break;
    case 'other':
      category = 'Other';
      break;
    default:
      // Handle unknown submenuId
      break;
  }

  return (
    <InnerWrapper>
      <Content>
        {category && <Gallery category={category} />}
      </Content>
    </InnerWrapper>
  )
}

const Content = styled.div`
  padding: 5rem 0;
  text-align: center;
`