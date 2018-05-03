import React from 'react';
import styled from 'styled-components';

import bp from '../../../utils/breakpoints';

// ========== Styled Components ==========
const Logo = styled.img`
  width: 170px;

  @media (max-width: ${bp.breakSix}) {
    width: 200px;
  }
  @media (max-width: ${bp.soon}) {
    width: 170px;
  }
`

// ============== Component ==============
export default () => (
  <Logo src="/img/logo-horizontal-reverse.png" alt="Collectors Hut Logo" />
);
