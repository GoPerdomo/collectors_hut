import React from 'react';
import styled from 'styled-components';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  height: 130px;

  @media (max-width: ${bp.breakEight}) {
    width: 100%;
    height: 210px;
  }
`

const Logo = styled.img`
  height: inherit;

  @media (max-width: ${bp.breakEight}) {
    margin: auto;
  }
`

// ============== Component ==============
export default () => (
  <Wrapper>
    <Logo src="/img/logo-vertical-reverse.png" alt="Collectors Hut Logo" />
  </Wrapper>
);
