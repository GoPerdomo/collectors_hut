import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GridList, GridTile } from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';

import ProfileHeader from '../../containers/ProfileHeader';
import ProfileCollections from '../../containers/ProfileCollection';

import './style.css';

class Collection extends Component {

  componentDidMount() {
    const { currentCollection, match, history } = this.props;

    if(currentCollection) return;
    history.push(`/users/${match.params.userId}`);
  }

  render() {
    const { userId, currentCollection, history } = this.props;

    return (
      <main className="collection">
        <ProfileHeader />
        <RaisedButton style={{ float: "left" }} onClick={ history.goBack } label="Back" />
        <div className="collection-items" >
        <GridList cols={ 3 } cellHeight="auto" style={ {justifyContent: "space-around"} }>
          {
            currentCollection && currentCollection.items.map(item => (
              <GridTile key={ item._id } title={ item.name } >
                <ProfileCollections
                itemId={ item._id }
                collectionId={ currentCollection._id }
                userId={ userId }
                photo={ item.photo }
                />
              </GridTile>
          ))
          }
        </GridList>
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
