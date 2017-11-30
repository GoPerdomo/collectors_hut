import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/ProfileHeader';
import ProfileCollections from '../../containers/ProfileCollection';

import './style.css';

class Collection extends Component {

  componentDidMount() {
    const { match, currentCollection, history } = this.props;

    if(currentCollection) return;
    history.push(`/users/${match.params.userId}`);
  }

  render() {
    const { currentCollection, history } = this.props;

    return (
      <main className="collection">
        <ProfileHeader />
        <button onClick={ history.goBack }>Back</button> {/* TODO: Style buttom */}
        <div className="display-items" >
        {
        currentCollection && currentCollection.items.map(item => (
          <ProfileCollections key={ item._id } itemId={ item._id } photo={ item.photo } collection={ currentCollection._id }/>
        ))
        }
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { userId, collectionId } = props.match.params;
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
