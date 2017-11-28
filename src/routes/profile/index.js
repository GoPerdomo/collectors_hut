import React, { Component } from 'react';

import './style.css';

class Profile extends Component {
  
  render() {
    return (
      <div className="tempWrapper">
        <header className="Header">
          <p>Collectors Hut Header</p>
        </header>
        <main className="Profile">
          <section className="profile-header">
          <section className="profile-cover"></section>
          <section className="profile-info">
            <img src="https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" alt="TODO: Add a nonredundant alt"/>
            <p>John Userman</p>
          </section>
          </section>
          <section className="collections">
            <section className="collection">
              <div className="collection-photos-preview"></div>
              <div className="collection-description"></div>
            </section>
            <section className="collection">
              <div className="collection-photos-preview"></div>
              <div className="collection-description"></div>
            </section>
            <section className="collection">
              <div className="collection-photos-preview"></div>
              <div className="collection-description"></div>
            </section>
          </section>
        </main>
        <footer className="Footer">
          <p>Collectors Hut Footer</p>
        </footer>
      </div>
    )
  }
};

export default Profile;
