import React from 'react';
import styled from 'styled-components';

import FooterLogo from '../../Images/FooterLogo';
import Newsletter from '../../../containers/Newsletter';
import Navigation from './Navigation';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const Footer = styled.footer`
  margin-top: 50px;
  display: flex;
  background-color: #6D8EAD;
  color: #FFFFFF;
  height: 200px;
`

const Wrapper = styled.div`
  width: 80%;
  height: 130px;
  max-width: ${bp.maxWidth};
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;

  @media (max-width: ${bp.breakOne}) {
    width: 90%;
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
