import React from 'react';
import styled from 'styled-components';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  overflow: hidden;
  width: 25%;
  height: 200px;
  
  @media (max-width: ${bp.minWidth}) {
    width: 50%;
  }
`


const SearchItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

// ============== Component ==============
export default ({ photo, name }) => (
  <Wrapper>
    <SearchItem src={photo} alt={`Preview of ${name}`} />
  </Wrapper>
);
