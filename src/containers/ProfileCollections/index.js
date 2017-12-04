import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

import ProfileItems from '../../components/ProfileItems';

import { getItems } from '../../store/actions';

import './style.css';

class ProfileCollections extends Component {

  componentDidMount() {
    const { userId, collection, getItems } = this.props;

    getItems(userId, collection._id)

    // const httpHeaders = {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    // };

    // fetch(`http://localhost:3030/api/users/${userId}/collections/${collection._id}`, httpHeaders)
    //   .then(res => res.json())
    //   .then(collection => {
    //     const collectionId = collection._id;
    //     this.props.dispatch({
    //       type: "SET_COLLECTION_ITEMS",
    //       payload: { collectionId, userId, items: collection.items }
    //     })
    //   })
    //   .catch(err => console.error(err));

  }

  setCols = ({ items }) => {
    switch(items.length) {
      case 1:
        return 1;
      case 2:
        return 2;
      default:
        return 3;
    }
  }

  selectCollection = () => {
    this.props.history.push(`/users/${this.props.userId}/collections/${this.props.collection._id}`);
  }

  render() {
    const { collection, index } = this.props;
    const maxItems = 6;
    
    return (
      <Paper
        className={`profile-collection-preview ${index % 2 ? 'reverse' : ''}`}
        zDepth={ 2 }
      >
        <div className="profile-collection-items-preview" onClick={ this.selectCollection } >
        <GridList
          cols={ collection.items && this.setCols(collection) }
          cellHeight="auto"
          style={{ justifyContent: "space-around" }}
        >
          {
            collection.items && collection.items.map((item, index) => {
              if(index < maxItems)
                return (
                <GridTile key={ item._id } >                  
                  <ProfileItems photo={ item.photo } />
                </GridTile>
                )
              else
                return <div key={ index }/>;
            })
          }
          </GridList>
        </div>
        <div className="profile-collection-preview-description">
          <h3>{ collection.name }</h3>
          <p>{ collection.info }</p>
        </div>
      </Paper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getItems: (userId, collectionId) => dispatch(getItems(userId, collectionId))
})

export default withRouter(connect(null, mapDispatchToProps)(ProfileCollections));
