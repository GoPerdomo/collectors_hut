import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import bp from '../../../../utils/breakpoints';


// ========== Styled Components ==========
const StyledCardHeader = styled(CardHeader) `
  @media (max-width: ${bp.minWidth}) {
    padding: 1em !important;
  }
`

const StyledLink = styled(Link) `
  color: #fff;
`


// ========= Material-UI Styles =========
const styles = {
  base: {
    backgroundColor: "#6D8EAD",
    padding: "1em 2em",
    wordBreak: 'break-word',
  },
  titleStyle: {
    fontSize: "1.2em",
    fontWeigh: "bold",
    lineHeight: 2,

  },
};


// ============== Component ==============
export default ({ _id, firstName, lastName, photo }) => (
  <StyledCardHeader
    style={styles.base}
    titleStyle={styles.titleStyle}
    title={
      <StyledLink to={`/users/${_id}`} >
        {firstName} {lastName}
      </StyledLink>
    }
    avatar={
      <StyledLink to={`/users/${_id}`} >
        <Avatar backgroundColor="white" size={40} src={photo} />
      </StyledLink>
    }
  />
);
