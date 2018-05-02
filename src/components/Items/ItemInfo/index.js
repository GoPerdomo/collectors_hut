import React from 'react';
import styled from 'styled-components';

import ItemPhoto from './ItemPhoto';
import ItemInfoList from './ItemInfoList';


// ========== Styled Components ==========
const ItemName = styled.h2`
  margin: auto;
  width: 85%;
  word-break: break-word;
`

const Wrapper = styled.div`
  display: flex;
  margin: 2em 0;
`

// ============== Component ==============
export default ({ currentCollection, currentItem, user }) => {
  const { photo, name } = currentItem;

  return (
    <section>
      <ItemName className="item-name">{name}</ItemName>
      <Wrapper className="item-info">
        <ItemPhoto name={name} photo={photo} />
        <ItemInfoList {...currentItem} />
      </Wrapper>
    </section>
  )
};
