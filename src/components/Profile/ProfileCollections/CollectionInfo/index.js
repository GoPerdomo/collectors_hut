import React from 'react';
import styled from 'styled-components';

import CollectionName from './CollectionName';
import CollectionDescription from './CollectionDescription';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 41%;
  height: inherit;
  text-align: left;
  background-color: #6D8EAD;
  overflow: hidden;
`

// ============== Component ==============
export default props => (
  <Wrapper>
    <CollectionName  {...props} />
    <CollectionDescription {...props} />
  </Wrapper>
);
