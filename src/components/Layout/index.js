import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';


// ========== Styled Components ==========
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
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
