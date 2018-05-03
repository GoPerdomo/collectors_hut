import React from 'react';
import styled from 'styled-components';


// ========== Styled Components ==========
const ProfileConfig = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row-reverse;
`

// ============== Component ==============
export default ({ children }) => (
  <ProfileConfig>
    {children}
  </ProfileConfig>
);
