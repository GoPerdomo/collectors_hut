import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

import bp from '../../helpers/breakpoints';

// ========== Styled Components ==========
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  & > main {
    min-height: 40vh;
    
    @media (max-width: ${bp.breakEight}) {
      min-height: 70vh;
    }
  }
`


// ============== Component ==============
export default ({ children }) => (
  <Layout>
    <Header />
    {
      children
    }
    <Footer />
  </Layout>
);
