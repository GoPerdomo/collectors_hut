import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import HeaderLogo from '../../Images/HeaderLogo';
import SearchBar from './SearchBar';
import LoginLogout from '../../../containers/Enter/LoginLogout';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const Header = styled.header`
  background-color: #6D8EAD;
  margin-bottom: 50px;
`

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  max-width: ${bp.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  
  @media (max-width: ${bp.breakOne}) {
    width: 90%;
  }
`

const StyledLink = styled(NavLink) `
  text-decoration: none;
  color: #fff;
`

// ============== Component ==============
export default () => (
  <Header>
    <Wrapper>
      <StyledLink to="/">
        <HeaderLogo />
      </StyledLink>
      <SearchBar />
      <LoginLogout />
    </Wrapper>
  </Header>
);
