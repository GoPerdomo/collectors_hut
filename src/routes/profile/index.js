import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';

import ProfileHeader from '../../containers/ProfileHeader';
import ProfileCollections from '../../containers/ProfileCollections';
import AddCollection from '../../containers/AddCollection';

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
        <ProfileHeader addCollection={<AddCollection userId={userId} />} />
        {
          !isEmpty(user) &&
          <div className="profile-collections-preview">
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

  return (
    {
      userId,
      user: state[userId],
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: id => dispatch(getProfile(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
