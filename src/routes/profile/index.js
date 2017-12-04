import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';

import ProfileHeader from '../../containers/ProfileHeader';
import ProfileCollections from '../../containers/ProfileCollections';
import AddCollection from '../../containers/AddCollection';

import './style.css';

class Profile extends Component {

  componentDidMount() {
    const { userId, user } = this.props;

    if(!isEmpty(user)) return;

    const httpHeaders = {
      "method": 'GET',
      "Content-Type": "application/json"
    };

    fetch(`http://localhost:3030/api/users/${userId}`, httpHeaders)
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
    const { user, userId } = this.props;
    
    return (
      <main className="profile">
        <ProfileHeader addCollection={ <AddCollection userId={ userId } /> }/>
        {
          !isEmpty(user) &&
          <div className="profile-collections-preview">
            {
              !isEmpty(user.collections) && user.collections.map((collection, index) => (
                <ProfileCollections
                  index={ index }
                  key={ collection._id }
                  collection={ collection }
                  userId={ user._id }
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

export default connect(mapStateToProps)(Profile);
