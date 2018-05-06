import React from 'react';
import styled from 'styled-components';


// ========== Styled Components ==========
const Wrapper = styled.div`
  overflow: hidden;
  width: 50%;
  height: 200px;

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
