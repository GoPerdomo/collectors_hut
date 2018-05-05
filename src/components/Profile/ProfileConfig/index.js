import React from 'react';
import styled from 'styled-components';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const ProfileConfig = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (max-width: ${bp.breakFour}) {
    width: 20%;
  }
  @media (max-width: ${bp.minWidth}) {
    width: 100%;
  }
`

// ============== Component ==============
export default ({ children }) => (
  <ProfileConfig>
    {children}
  </ProfileConfig>
);
