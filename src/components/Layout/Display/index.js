import React from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';

import bp from '../../../utils/breakpoints';

// ========== Styled Components ==========
const StyledPaper = styled(Paper) `
  margin: auto;
  width: 86%;
  text-align: center;

  @media (max-width: ${bp.breakThree}) {
    width: 91%;
  }
  @media (max-width: ${bp.breakFive}) {
    width: 95%;
  }
  @media (max-width: ${bp.minWidth}) {
    width: 92%;
  }
`

const Wrapper = styled.div`
  padding: 1em;
`

// ============== Component ==============
export default ({ children }) => (
  <StyledPaper zDepth={4}>
    <Wrapper>
      {children}
    </Wrapper>
  </StyledPaper>
);
