import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';

import CollectionItem from '../CollectionItem';

import './style.css'

export default ({ userId, currentCollection }) => (
  <GridList cols={3} cellHeight="auto" >
    {
      currentCollection.items.map(item => (
        <GridTile key={item._id} title={item.name} >
          <CollectionItem
            item={item}
            collectionId={currentCollection._id}
            userId={userId}
          />
        </GridTile>
      ))
    }
  </GridList>
);
