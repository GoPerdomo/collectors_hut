import React, { Component } from 'react';

import './style.css';

class ItemInfo extends Component {

  render() {
    const { currentItem } = this.props;

    return (
      <div className="item-display">
      <div className="item-photo">
        <img src={ currentItem.photo } alt="TODO: Add nonredundant alt"/>
      </div>
      <div className="item-info">
        <h2>{ currentItem.name }</h2>
        <ul className="item-info-list">
          <li>Description: { currentItem.description }</li>
          <li>Production Year: { currentItem.productionYear }</li>
          <li>Acquisition Year: { currentItem.acquisitionYear }</li>
          <li>Origin: { currentItem.origin }</li>
          <li>Manufacturer: { currentItem.manufacturer }</li>
          <li>Condition: { currentItem.condition }</li>
        </ul>
      </div>
      </div>
    )
  }
}

export default ItemInfo;
