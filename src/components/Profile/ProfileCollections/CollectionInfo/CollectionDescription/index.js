import React from 'react';
import styled from 'styled-components';

import bp from '../../../../../utils/breakpoints';


// ========== Styled Components ==========
const DescriptionWrapper = styled.div`
  padding: 0 25px;
  overflow-y: auto;

  @media (max-width: ${bp.minWidth}) {
    max-height: 256px;
    min-height: 120px;
  }
}
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
