import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bp from '../../../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.nav`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;

  @media (max-width: ${bp.breakEight}) {
    width: 100%;
    height: auto;
    margin-bottom: 3em;
    flex-direction: row;
    font-size: 1.3em;
  }
`

const StyledLink = styled(Link)`
  color: #FFFFFF;
  font-size: 1.2em;
`

// ========== Component ==========
export default () => (
  <Wrapper>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </Wrapper>
);
