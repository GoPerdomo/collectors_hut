import React from 'react';
import styled from 'styled-components';

import CollectionName from './CollectionName';
import CollectionDescription from './CollectionDescription';

import bp from '../../../../utils/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 41%;
  height: inherit;
  text-align: left;
  background-color: #6D8EAD;
  overflow: hidden;

  @media (max-width: ${bp.minWidth}) {
    width: 100%;
  }
`

// ============== Component ==============
export default props => (
  <Wrapper>
    <CollectionName  {...props} />
    <CollectionDescription {...props} />
  </Wrapper>
);
