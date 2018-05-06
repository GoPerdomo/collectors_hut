import React, { Component } from 'react';
import styled from 'styled-components';

import NotFoundLogo from '../../components/Images/NotFoundLogo';
import NotFoundText from '../../components/NotFound/NotFoundText';

import bp from '../../helpers/breakpoints';


// ========== Styled Components ==========
const NotFoundWrapper = styled.main`
  width: 75%;
  max-width: ${bp.maxWidth};
  min-height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  text-align: center;

  @media (max-width: ${bp.breakTwo}) {
    width: 85%;
  }
  @media (max-width: ${bp.breakThree}) {
    width: 95%;
  }
  @media (max-width: ${bp.breakNine}) {
    flex-direction: column;
  }

`

// ============== Component ==============
class NotFound extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <NotFoundWrapper>
        <NotFoundText />
        <NotFoundLogo />
      </NotFoundWrapper>
    )
  }
};

export default NotFound;
