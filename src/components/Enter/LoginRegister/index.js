import React from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';
import { Tabs, Tab } from 'material-ui/Tabs';

import LoginTab from '../../../containers/Enter/LoginTab';
import RegisterTab from '../../../containers/Enter/RegisterTab';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const StyledPaper = styled(Paper) `
  width: 50%;
  margin: 0 auto;

  @media (max-width: ${bp.breakOne}) {
    width: 60%;
  }
`

// ============== Component ==============
export default () => (
  <StyledPaper zDepth={4}>
    <Tabs
      tabItemContainerStyle={{ backgroundColor: "#6D8EAD" }}
      inkBarStyle={{ backgroundColor: "#FF6517" }}
    >
      <Tab label="Login" >
        <LoginTab />
      </Tab>
      <Tab label="Register" >
        <RegisterTab />
      </Tab>
    </Tabs>
  </StyledPaper>
);
