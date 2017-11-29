import React, { Component } from 'react';

import './style.css';

class ProfileHeader extends Component {

  render() {
    const user = this.props.user;

    return (
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-info">
          <img src={ user.photo } alt="TODO: Add a nonredundant alt"/>
          <h2>{ user.firstName && `${user.firstName} ${user.lastName}` }</h2>
        </div>
      </div>
    )
  }
}

export default ProfileHeader;
