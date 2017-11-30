import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isEmpty from 'is-empty';


import './style.css';

class ProfileHeader extends Component {

  render() {
    const { user } = this.props;

    return (
      <div className="profile-header">
      {
        !isEmpty(user) &&
        <div>
          <div className="profile-cover"></div>
          <div className="profile-info">
            <img src={ user.photo } alt="TODO: Add a nonredundant alt"/>
            <h2>{ user.firstName && `${user.firstName} ${user.lastName}` }</h2>
          </div>
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { userId } = props.match.params;

  return (
    {
      userId,
      user: state[userId],
    }
  )
};

export default withRouter(connect(mapStateToProps)(ProfileHeader));
