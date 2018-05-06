import React from 'react';
import styled from 'styled-components';

import ItemPhoto from '../../Images/ItemPhoto';
import ItemInfoList from './ItemInfoList';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const SectionWrapper = styled.section`
  @media (max-width: ${bp.breakThree}) {
    width: 85%;
    margin: auto;
  }
  @media (max-width: ${bp.breakFive}) {
    width: 90%;
  }
  @media (max-width: ${bp.breakNine}) {
    width: 100%;
  }
`

const ItemName = styled.h2`
  margin: auto;
  width: 85%;
  word-break: break-word;

  @media (max-width: ${bp.breakThree}) {
    width: 100%;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  margin: 2em 0;

  @media (max-width: ${bp.breakThree}) {
    flex-direction: column;
  }
`

// ============== Component ==============
export default ({ currentCollection, currentItem, user }) => {
  const { photo, name } = currentItem;

  return (
    <SectionWrapper>
      <ItemName>{name}</ItemName>
      <ItemWrapper>
        <ItemPhoto name={name} photo={photo} />
        <ItemInfoList {...currentItem} />
      </ItemWrapper>
    </SectionWrapper>
  )
};
