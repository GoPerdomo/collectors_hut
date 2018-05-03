import React from 'react';
import styled from 'styled-components';


// ========== Styled Components ==========
const ButtonsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

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
