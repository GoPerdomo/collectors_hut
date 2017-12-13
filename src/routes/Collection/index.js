import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

import ProfileHeader from '../../containers/ProfileHeader';
import CollectionItem from '../../containers/CollectionItem';
import AddItem from '../../containers/AddItem';
import DeleteCollection from '../../containers/DeleteCollection';

import './style.css';

class Collection extends Component {

  componentWillMount() {
    const { currentCollection, match, history } = this.props;

    if (currentCollection) return;
    history.push(`/users/${match.params.userId}`);
  }

  render() {
    const { userId, collectionId, currentCollection } = this.props;

    return (
      <main className="collection">
        <ProfileHeader
          actionButtons={
            <div className="profile-config-buttons">
              <AddItem userId={userId} collectionId={collectionId} />
              <DeleteCollection />
            </div>
          }
        />
        <Paper zDepth={2} className="collection-items" >
          <h2 className="collection-title" >
            {
              currentCollection && currentCollection.name
            }
          </h2>
          <GridList cols={3} cellHeight="auto" style={{ justifyContent: "space-around" }}>
            {
              currentCollection && currentCollection.items.map(item => (
                <GridTile key={item._id} title={item.name} >
                  <CollectionItem
                    itemId={item._id}
                    collectionId={currentCollection._id}
                    userId={userId}
                    photo={item.photo}
                  />
                </GridTile>
              ))
            }
          </GridList>
        </Paper>
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { userId, collectionId } = props.match.params;
  let currentCollection;

  if (state[userId]) {
    currentCollection = state[userId].collections.find(collection => (
      collection._id === collectionId)
    );

  }

  return (
    {
      userId,
      user: state[userId],
      collectionId,
      currentCollection
    }
  )
};


export default connect(mapStateToProps)(Collection);
