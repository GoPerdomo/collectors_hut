import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';

import './style.css';

class ItemInfo extends Component {

  render() {
    const { history, currentCollection } = this.props;
    const {
      photo,
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition
    } = this.props.currentItem;

    return (
      <Paper zDepth={2} className="item-display">
        <h2 className="collection-title" onClick={history.goBack}>
          {
            currentCollection.name
          }
        </h2>
        <div style={{ display: "flex" }} >
          <div className="item-photo">
            <img src={photo} alt="TODO: Add nonredundant alt" />
          </div>
          <div className="item-info">
            <h2>{name}</h2>
            <ul className="item-info-list">
              <li>Description: {description}</li>
              <li>Production Year: {productionYear}</li>
              <li>Acquisition Year: {acquisitionYear}</li>
              <li>Origin: {origin}</li>
              <li>Manufacturer: {manufacturer}</li>
              <li>Condition: {condition}</li>
            </ul>
          </div>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { userId, collectionId } = props.match.params;

  const currentCollection = state[userId].collections.find(collection => (
    collection._id === collectionId)
  );

  return (
    {
      currentCollection
    }
  )
};

export default withRouter(connect(mapStateToProps)(ItemInfo));
