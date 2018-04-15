import React from 'react';

import ItemPhoto from './ItemPhoto';
import ItemInfoList from './ItemInfoList';

import './style.css';

export default ({ currentCollection, currentItem, user }) => {
  const { photo, name } = currentItem;

  return (
    <section>
      <h2 className="item-name">{name}</h2>
      <div className="item-info">
        <ItemPhoto name={name} photo={photo} />
        <ItemInfoList {...currentItem} />
      </div>
    </section>
  )
};
