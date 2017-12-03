import React, { Component } from 'react';

import Paper from 'material-ui/Paper';

import './style.css';

class ItemInfo extends Component {

  render() {
    const { photo,
            name,
            description,
            productionYear,
            acquisitionYear,
            origin,
            manufacturer,
            condition } = this.props.currentItem;

    return (
      <Paper zDepth={ 2 } className="item-display">
        <div style={{ display: "flex" }} >
        <div className="item-photo">
          <img src={ photo } alt="TODO: Add nonredundant alt"/>
        </div>
        <div className="item-info">
          <h2>{ name }</h2>
          <ul className="item-info-list">
            <li>Description: { description }</li>
            <li>Production Year: { productionYear }</li>
            <li>Acquisition Year: { acquisitionYear }</li>
            <li>Origin: { origin }</li>
            <li>Manufacturer: { manufacturer }</li>
            <li>Condition: { condition }</li>
          </ul>
        </div>
        </div>
      </Paper>
    )
  }
}

export default ItemInfo;
