import React, { Component } from 'react';
import { connect } from 'react-redux';

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
          <section className="profile-header">
            <section className="profile-cover"></section>
            <section className="profile-info">
              <img src="https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" alt="TODO: Add a nonredundant alt"/>
              <h2>{ `${this.props.user.firstName} ${this.props.user.lastName}` }</h2>
            </section>
          </section>
          <section className="collections">
          {
            this.props.user.collections && this.props.user.collections.map(collection => (
              <ProfileCollections key={ collection._id } user={ this.props.user }/>
             ))
          }
          </section>
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
