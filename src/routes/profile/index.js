import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';

import ProfileHeader from '../../containers/ProfileHeader';
import ProfileCollections from '../../containers/ProfileCollections';
import AddCollection from '../../containers/AddCollection';
import EditProfile from '../../containers/EditProfile';

import { getProfile } from '../../store/actions';

import './style.css';

class Profile extends Component {

  componentDidMount() {
    const { userId, user, getProfile } = this.props;
    if (!isEmpty(user)) return;

    getProfile(userId);
  }

  render() {
    const { user, userId } = this.props;

    return (
      <main className="profile">
        <ProfileHeader
          actionButtons={
            <div className="profile-config-buttons">
              <EditProfile user={user} />
              <AddCollection userId={userId} />
            </div>
          }
        />
        {
          !isEmpty(user) &&
          <div>
            {
              !isEmpty(user.collections) && user.collections.map((collection, index) => (
                <ProfileCollections
                  index={index}
                  key={collection._id}
                  collection={collection}
                  userId={user._id}
                />
              ))
            }
          </div>
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
