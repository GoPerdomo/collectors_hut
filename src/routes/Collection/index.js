import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

import ProfileHeader from '../../containers/ProfileHeader';
import CollectionItem from '../../containers/CollectionItem';
import AddItem from '../../containers/AddItem';
import EditCollection from '../../containers/EditCollection';
import DeleteCollection from '../../containers/DeleteCollection';

import { getProfile, getItems } from '../../store/actions';

import './style.css';

class Collection extends Component {

  componentWillMount() {
    const { currentCollection, match, getProfile, getItems } = this.props;
    const { userId, collectionId } = match.params;

    if (!currentCollection) {
      getProfile(userId);
      getItems(userId, collectionId);
    }
  }

  render() {
    const { userId, collectionId, currentCollection } = this.props;

    return (
      <main className="collection">
        {
          currentCollection &&
          <ProfileHeader
            actionButtons={
              <div className="profile-config-buttons">
                <AddItem userId={userId} collectionId={collectionId} />
                <EditCollection userId={userId} collection={currentCollection} />
                <DeleteCollection />
              </div>
            }
          />
        }
        {
          currentCollection && currentCollection.items &&
          <Paper zDepth={0} className="collection-items" style={{ backgroundColor: "#6D8EAD" }} >
            <div style={{ backgroundColor: "#ffffff", padding: "20px" }}>
              <h1 className="collection-title" >
                {currentCollection.name}
              </h1>
              <GridList cols={3} cellHeight="auto" >
                {
                  currentCollection.items.map(item => (
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
            </div>
          </Paper>
        }
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

const mapDispatchToProps = (dispatch) => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
  getItems: (userId, collectionId) => dispatch(getItems(userId, collectionId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Collection);
