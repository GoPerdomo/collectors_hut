import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/ProfileHeader';
import ProfileCollections from '../../containers/ProfileCollections';

import './style.css';

class Profile extends Component {

  componentWillMount() {
    const httpHeaders = {
      "method": 'GET',
      "Content-Type": "application/json"
    };
    
    // TODO: Implement dynamic user
    fetch('http://localhost:3030/api/users/5a1da1bf972c7b073ae06e17', httpHeaders)
      .then(res => res.json())
      .then(user => {
        this.props.dispatch({
          type: "SET_CURRENT_USER",
          payload: {user}
        })
      })
      .catch(err => console.error(err));

  }
  
  render() {
    return (
      <div className="tempWrapper">
        <header className="Header">
          <h1>Collectors Hut Header</h1>
        </header>
        <main className="Profile">
          <ProfileHeader user={ this.props.user }/>
          <div className="collections">
          {
            this.props.user.collections && this.props.user.collections.map(collection => (
              <ProfileCollections key={ collection._id } collection={ collection }/>
             ))
          }
          </div>
        </main>
        <footer className="Footer">
          <h2>Collectors Hut Footer</h2>
        </footer>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return (
    {
      user: state,
    }
  )
};

export default connect(mapStateToProps)(Profile);
