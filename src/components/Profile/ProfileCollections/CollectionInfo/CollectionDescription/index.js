import React from 'react';
import styled from 'styled-components';


// ========== Styled Components ==========
const DescriptionWrapper = styled.div`
  height: 256px;
  padding: 0 25px;
  overflow-y: auto;
`

const Description = styled.p`
  color: #FFFFFF;
  margin-top: 10px;
  font-weight: 300;
  white-space: pre-line;
  word-wrap: break-word;
`

// ============== Component ==============
export default ({ collection }) => (
  <DescriptionWrapper>
    <Description>
      {collection.info}
    </Description>
  </DescriptionWrapper>
);
