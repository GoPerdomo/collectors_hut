import React from 'react';
import styled from 'styled-components';

import FooterLogo from '../../Images/FooterLogo';
import Newsletter from '../../../containers/Newsletter';
import Navigation from './Navigation';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const Footer = styled.footer`
  margin-top: 50px;
  padding: 2em 0;
  display: flex;
  background-color: #6D8EAD;
  color: #FFFFFF;
`

const Wrapper = styled.div`
  width: 80%;
  max-width: ${bp.maxWidth};
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;


  @media (max-width: ${bp.breakTwo}) {
    width: 90%;
  }
  @media (max-width: ${bp.breakFive}) {
    width: 92%;
  }
  @media (max-width: ${bp.breakEight}) {
    flex-direction: column-reverse;
  }
`

// ============== Component ==============
export default () => (
  <Footer>
    <Wrapper>
      <FooterLogo />
      <Newsletter />
      <Navigation />
    </Wrapper>
  </Footer>
);
