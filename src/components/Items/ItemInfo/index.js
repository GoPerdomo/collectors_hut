import React from 'react';
import styled from 'styled-components';

import ItemPhoto from '../../Images/ItemPhoto';
import ItemInfoList from './ItemInfoList';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const ItemName = styled.h2`
  margin: auto;
  width: 85%;
  word-break: break-word;
`

const Wrapper = styled.div`
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
    <section>
      <ItemName>{name}</ItemName>
      <Wrapper>
        <ItemPhoto name={name} photo={photo} />
        <ItemInfoList {...currentItem} />
      </Wrapper>
    </section>
  )
};
