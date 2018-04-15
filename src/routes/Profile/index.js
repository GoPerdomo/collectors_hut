import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import ProfileCollections from '../../components/Profile/ProfileCollections';
import ProfileButtons from '../../components/Buttons/ConfigButtons/ProfileButtons';
import Loading from '../../components/Loading';

import { getProfile } from '../../store/actions';

import './style.css';

class Profile extends Component {

  componentDidMount() {
    const { userId, user, getProfile } = this.props;

    if (!user) {
      getProfile(userId);
    }
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return (
        <main className="profile">
          <Loading />
        </main>
      )
    }

    return (
      <main className="profile">
        <ProfileHeader>
          <ProfileButtons {...this.props} />
        </ProfileHeader>

        {
          user.collections.map((collection) => (
            <ProfileCollections
              key={collection._id}
              collection={collection}
              userId={user._id}
            />
          ))
        }
      </main>
    )
  }
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

const mapDispatchToProps = (dispatch) => ({
  getProfile: userId => dispatch(getProfile(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
