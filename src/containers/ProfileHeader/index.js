import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import isEmpty from 'is-empty';

import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import './style.css';

class ProfileHeader extends Component {

  render() {
    const { user } = this.props;
    const maxChips = 3;

    return (
      <div>
      {
        !isEmpty(user) &&
        <div className="profile-header">
          <div className="profile-photo">
            <Avatar backgroundColor="transparent" size={ 140 } src={ user.photo } alt="TODO: Add a nonredundant alt"/>
          </div>
          <div className="profile-info">
            <h2>{ `${user.firstName} ${user.lastName}` }</h2>
            <div className="profile-chips">
              {
                user.collections.filter((collection, index) => index < maxChips)
                  .map(collection => (
                    <Chip key={ collection._id } style={{ marginRight: 3, marginBottom: 3 }}>
                     { collection.name }
                    </Chip>
                ))
              }
            </div>
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
