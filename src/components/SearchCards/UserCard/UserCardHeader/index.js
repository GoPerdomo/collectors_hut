import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import ProfileChips from '../../../Profile/ProfileInfo/ProfileChips';

import bp from '../../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledCardHeader = styled(CardHeader) `
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
  subtitleStyle: {
    display: "flex",
    paddingTop: "1em",
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
      subtitleStyle={styles.subtitleStyle}
      textStyle={styles.textStyle}
      style={styles.base}
      title={
        <StyledLink to={`/users/${_id}`}>
          {firstName} {lastName}
        </StyledLink>
      }
      subtitle={<ProfileChips user={user} />}
      avatar={
        <StyledLink to={`/users/${_id}`}>
          <Avatar backgroundColor="white" size={70} src={photo} />
        </StyledLink>
      }
    />
  )
};
