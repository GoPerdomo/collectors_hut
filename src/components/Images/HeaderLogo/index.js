import React from 'react';
import styled from 'styled-components';


// ========== Styled Components ==========
const Logo = styled.img`
  width: 170px;
`

// ============== Component ==============
export default () => (
  <div>
    <Logo src="/img/logo-horizontal-reverse.png" alt="Collectors Hut Logo" />
  </div>
);
