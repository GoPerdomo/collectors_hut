import React from 'react';
import styled from 'styled-components';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const ButtonsWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: ${bp.breakFour}) {
    height: 140px;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
  @media (max-width: ${bp.breakEight}) {
    width: 100%;
    height: auto;
    flex-direction: row;
    margin-bottom: 1em;
  }

  & > * {
    margin-left: 15px !important;
  
    @media (max-width: ${bp.breakEight}) {
      margin: 0 !important;
    }
  }
`


// ============== Component ==============
export default ({ loggedUser, userId, children }) => {

  if (loggedUser === userId) {
    return (
      <ButtonsWrapper>
        {children}
      </ButtonsWrapper>
    )

  } else {
    return (
      null
    )
  }
};
