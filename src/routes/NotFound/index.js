import React, { Component } from 'react';
import styled from 'styled-components';

import NotFoundLogo from '../../components/Images/NotFoundLogo';
import NotFoundText from '../../components/NotFound/NotFoundText';

import bp from '../../utils/breakpoints';


// ========== Styled Components ==========
const NotFoundWrapper = styled.main`
  width: 80%;
  max-width: ${bp.maxWidth};
  min-height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  text-align: center;
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
