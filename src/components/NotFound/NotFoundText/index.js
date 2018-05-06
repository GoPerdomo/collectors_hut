import React from 'react';
import styled from 'styled-components';

import bp from '../../../helpers/breakpoints';

// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid #6D8EAD;


  @media (max-width: ${bp.breakSeven}) {
    border: none;
  }
  @media (max-width: ${bp.breakNine}) {
    height: 230px;
    justify-content: flex-start;
  }

  & h1 {
    font-size: 6em;
    margin: 0;
  }

  & h2 {
    font-size: 2em;
    margin: 0.5em 0;
  }
`

// ============== Component ==============
export default () => (
  <Wrapper>
    <h1>404</h1>
    <h2>Ooops!</h2>
  </Wrapper>
);
