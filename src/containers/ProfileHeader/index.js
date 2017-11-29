import React, { Component } from 'react';

import './style.css';

class ProfileHeader extends Component {

  render() {
    const user = this.props.user;

    return (
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info">
          <img src="https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" alt="TODO: Add a nonredundant alt"/>
          <h2>{ `${user.firstName} ${user.lastName}` }</h2>
        </div>
      </div>
    )
  }
}

export default ProfileHeader;
