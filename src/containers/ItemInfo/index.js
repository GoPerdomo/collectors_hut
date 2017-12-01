import React, { Component } from 'react';

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
      <div className="item-display">
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
    )
  }
}

export default ItemInfo;
