import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/ProfileHeader';
import CollectionItem from '../../components/CollectionItems';

import './style.css';

class Collection extends Component {

  componentDidMount() {
    const { userId } = this.props.match.params;

    if(this.props.currentCollection) return;
    this.props.history.push(`/users/${userId}`);
  }

  render() {
    const { currentCollection } = this.props;
    console.log(this.props)

    return (
      <main className="collection">
        <ProfileHeader />
        <button onClick={ this.props.history.goBack }>Back</button> {/* TODO: Style buttom */}
        <div className="display-items">
          {
            currentCollection && currentCollection.items.map(item => (
              <CollectionItem key={ item._id } photo={ item.photo } />
          ))
          }
        </div>
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
