import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';

import ProfileInfo from '../../../components/Profile/ProfileInfo';
import ProfileConfig from '../../../components/Profile/ProfileConfig';
import EditProfile from '../EditProfile';

import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledPaper = styled(Paper) `
  padding: 1em 7%;
  margin-bottom: 50px;
  
  @media (max-width: ${bp.breakThree}) {
    padding: 1em 4.5%;
  }
  @media (max-width: ${bp.breakEight}) {
    flex-direction: column;
  }
`

const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const EditProfileWrapper = styled.div`

`

// ========= Material-UI Styles =========
const styles = {
  base: {
    boxSizing: "content-box",
    backgroundColor: "#6D8EAD",
  },
};


// ============== Component ==============
const ProfileHeader = ({ user, userId, children, isOpen, closeForm }) => {

  return (
    <StyledPaper zDepth={2} style={styles.base}>
      <ProfileInfoWrapper>
        <ProfileInfo user={user} userId={userId} />
        <ProfileConfig>
          {children}
        </ProfileConfig>
      </ProfileInfoWrapper>
      <EditProfileWrapper>
        <EditProfile user={user} isOpen={isOpen} closeForm={closeForm} />
      </EditProfileWrapper>
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
