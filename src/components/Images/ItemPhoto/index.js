import React from 'react';
import styled from 'styled-components';

import bp from '../../../utils/breakpoints';

// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 48%;
  margin: 0 auto;

  @media (max-width: ${bp.breakThree}) {
    width: 80%;
    margin: 0 auto 3em;
  }
  `

const ItemPhoto = styled.img`
  margin: auto;

  @media (max-width: ${bp.breakThree}) {
    max-height: 600px;
  }
}
`

// ============== Component ==============
export default ({ photo, name }) => (
  <Wrapper className="item-photo">
    <ItemPhoto src={photo} alt={name} />
  </Wrapper>
);
