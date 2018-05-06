import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';

import ProfileInfo from '../../../components/Profile/ProfileInfo';
import ProfileConfig from '../../../components/Profile/ProfileConfig';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledPaper = styled(Paper) `
  display: flex;
  justify-content: space-between;
  padding: 1em 7%;
  margin-bottom: 50px;
  
  @media (max-width: ${bp.breakThree}) {
    padding: 1em 4.5%;
  }
  @media (max-width: ${bp.breakEight}) {
    flex-direction: column;
  }
`

// ========= Material-UI Styles =========
const styles = {
  base: {
    boxSizing: "content-box",
    backgroundColor: "#6D8EAD",
  },
};


// ============== Component ==============
const ProfileHeader = (props) => {
  const { user, userId, children } = props;

  return (
    <StyledPaper zDepth={2} style={styles.base}>
      <ProfileInfo user={user} userId={userId} />
      <ProfileConfig>
        {children}
      </ProfileConfig>
    </StyledPaper>
  )
};

const mapStateToProps = (state, props) => {
  const { userId } = props.match.params;
  const { loggedUser } = state;

  return (
    {
      loggedUser,
      userId,
      user: state[userId],
    }
  )
};

export default withRouter(connect(mapStateToProps)(ProfileHeader));
