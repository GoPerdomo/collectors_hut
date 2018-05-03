import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import HeaderLogo from '../../Images/HeaderLogo';
import SearchBar from './SearchBar';
import LoginLogout from '../../../containers/Enter/LoginLogout';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const Header = styled.header`
  position: relative;
  background-color: #6D8EAD;
  margin-bottom: 50px;
  height: 100px;

  @media (max-width: ${bp.breakSix}) {
    height: 150px;
  }
  @media (max-width: ${bp.soon}) {
    height: 130px;
  }
`

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  max-width: ${bp.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  
  @media (max-width: ${bp.breakTwo}) {
    width: 90%;
  }
  @media (max-width: ${bp.breakFive}) {
    width: 94%;
  }
  @media (max-width: ${bp.breakSix}) {
    height: 60%;
  }
  @media (max-width: ${bp.soon}) {
    height: 50%;
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
