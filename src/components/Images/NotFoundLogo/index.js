import React from 'react';
import styled from 'styled-components';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 50%;
`

const NotFoundImage = styled.img`
  margin: auto;
  width: 300px;

  @media (max-width: ${bp.breakFour}) {
    width: 200px;
  }
`

// ============== Component ==============
export default () => (
  <Wrapper>
    <NotFoundImage src="/img/not-found.png" alt="Collectors Hut logo with an awkward sweat drop" />
  </Wrapper>
);
