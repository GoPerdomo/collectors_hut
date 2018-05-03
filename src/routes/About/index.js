import React, { Component } from 'react';
import styled from 'styled-components';

import HomeLogo from '../../components/Images/HomeLogo';

import bp from '../../utils/breakpoints';

// ========== Styled Components ==========
const AboutWrapper = styled.div`
  width: 80%;
  max-width: ${bp.maxWidth};
  display: flex;
  flex-direction: column;
  margin: 0 auto auto;
  text-align: center;

  @media (max-width: ${bp.breakTwo}) {
    width: 90%;
  }
`

// ============== Component ==============
class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <AboutWrapper>
        <HomeLogo />
        <h1>Coming Soon</h1>
      </AboutWrapper>
    )
  }
};

export default About;
