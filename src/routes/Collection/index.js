import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Collection extends Component {

  componentWillMount() {
    const { userId } = this.props.match.params;
    
    if(this.props.currentCollection) return;

    this.props.history.push(`/users/${userId}`);

  }

  render() {
    console.log(this.props);
    return (
      <main className="selected-collection">

      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { userId } = props.match.params;
  const { collectionId } = props.match.params;
  let currentCollection;

  if(state[userId]) {
    currentCollection = state[userId].collections.find(collection => (
      collection._id === collectionId)
    );

  }
  
  return (
    {
      userId,
      user: state[userId],
      currentCollection
    }
  )
};


export default connect(mapStateToProps)(Collection);
