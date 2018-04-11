import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import ProfileCollections from '../../containers/Collections/ProfileCollections';
import ProfileButtons from '../../components/Buttons/ProfileButtons';

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

    return (
      <main className="profile">
        <ProfileHeader>
          <ProfileButtons {...this.props} />
        </ProfileHeader>

        <div>
          {
            user && user.collections &&
            user.collections.map((collection, index) => (
              <ProfileCollections
                index={index}
                key={collection._id}
                collection={collection}
                userId={user._id}
              />
            ))
          }
        </div>
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
