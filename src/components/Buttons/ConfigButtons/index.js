import React from 'react';
import styled from 'styled-components';


// ========== Styled Components ==========
const ButtonsWrapper = styled.div`
  display: flex;
  height: 36px;

  &>div {
  margin-left: 15px;
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
