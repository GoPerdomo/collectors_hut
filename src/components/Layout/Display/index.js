import React from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';


// ========== Styled Components ==========
const StyledPaper = styled(Paper) `
  margin: auto;
  width: 86%;
  text-align: center;
`

const Wrapper = styled.div`
  padding: 20px;
`

// ============== Component ==============
export default ({ children }) => (
  <StyledPaper zDepth={4}>
    <Wrapper>
      {children}
    </Wrapper>
  </StyledPaper>
);
