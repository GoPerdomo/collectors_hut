import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import bp from '../../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledCardHeader = styled(CardHeader) `
  display: flex;
  align-items: center;
  word-break: break-word;

  @media (max-width: ${bp.breakNine}) {
    padding: 1em !important;
  }

  & > div {
    max-width: 215px;
  }
`

const StyledLink = styled(Link) `
  text-decoration: none;
  color: #fff;

  & img {
    object-fit: cover;
    object-position: center;
  }
`

// ========= Material-UI Styles =========
const styles = {
  base: {
    padding: "1em 2em",
  },
  titleStyle: {
    padding: 0,
    fontSize: "1.5em",
    fontWeight: "bold",
  },
  textStyle: {
    padding: 0,
  },
};

// ============== Component ==============
export default ({ user }) => {
  const { _id, firstName, lastName, photo } = user;

  return (
    <StyledCardHeader
      titleStyle={styles.titleStyle}
      textStyle={styles.textStyle}
      style={styles.base}
      title={
        <StyledLink to={`/users/${_id}`}>
          {firstName} {lastName}
        </StyledLink>
      }
      avatar={
        <StyledLink to={`/users/${_id}`}>
          <Avatar backgroundColor="white" size={70} src={photo} />
        </StyledLink>
      }
    />
  )
};
