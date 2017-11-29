import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';

import ProfileHeader from '../../containers/ProfileHeader';
import ProfileCollections from '../../containers/ProfileCollections';

import './style.css';

class Profile extends Component {

  componentWillMount() {
    const { id, user } = this.props;

    if (!isEmpty(user)) return;

    const httpHeaders = {
      "method": 'GET',
      "Content-Type": "application/json"
    };

    // TODO: Implement dynamic user
    fetch(`http://localhost:3030/api/users/${id}`, httpHeaders)
      .then(res => res.json())
      .then(user => {
        this.props.dispatch({
          type: "ADD_USER",
          payload: { user }
        })
      })
      .catch(err => console.error(err));

  }

  render() {
    const { user } = this.props;


    return (
      <div>
      {
        !isEmpty(user) &&
        <main className="Profile">
          <ProfileHeader user={ user } />
          <div className="collections">
            {
              !isEmpty(user.collections) && user.collections.map((collection, index) => (
                <ProfileCollections index={index} key={collection._id} collection={collection} userId={user._id} />
              ))
            }
          </div>
        </main>
      }
      </div>
    )
  }
};

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;

  return (
    {
      id,
      user: state[id],
    }
  )
};

export default connect(mapStateToProps)(Profile);
