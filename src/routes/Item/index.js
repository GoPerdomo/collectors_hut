import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/ProfileHeader';

import './style.css';

class Item extends Component {

  // componentDidMount() {
  //   const { userId } = this.props.match.params;

  //   if() return;
  //   this.props.history.push(`/users/${userId}`);
  // }

  render() {
    return (
      <main  className="item">
        <ProfileHeader />
      </main>
    )
  }
}

const mapStateToProps = (state) => {

};

export default connect()(Item);
