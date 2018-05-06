import React from 'react';
import styled from 'styled-components';

import bp from '../../../helpers/breakpoints';

// ========== Styled Components ==========
const Logo = styled.img`
  width: 170px;

  @media (max-width: ${bp.breakSix}) {
    width: 200px;
  }
  @media (max-width: ${bp.breakNine}) {
    width: 170px;
  }
  @media (max-width: ${bp.breakNine}) {
    width: 210px;
  }
`

// ============== Component ==============
export default () => (
  <Logo src="/img/logo-horizontal-reverse.png" alt="Collectors Hut Logo" />
);
