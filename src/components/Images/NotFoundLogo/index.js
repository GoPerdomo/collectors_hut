import React from 'react';
import styled from 'styled-components';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 50%;
`

const NotFoundImage = styled.img`
  margin: auto;
  width: 300px;
`

// ============== Component ==============
export default () => (
  <Wrapper>
    <NotFoundImage src="/img/not-found.png" alt="Collectors Hut logo with an awkward sweat drop" />
  </Wrapper>
);
