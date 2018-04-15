import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';

import ProfileInfo from '../../../components/Profile/ProfileInfo';
import ProfileConfig from '../../../components/Profile/ProfileConfig';

import './style.css';

const ProfileHeader = (props) => {
  const { user, userId, children } = props;

  return (
    <div>
      <Paper zDepth={0} className="profile-header" style={{ backgroundColor: "#6D8EAD" }}>
        <ProfileInfo user={user} userId={userId} />
        <ProfileConfig>
          {children}
        </ProfileConfig>
      </Paper>
    </div>
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
