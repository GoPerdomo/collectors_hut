import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

import CollectionItem from '../CollectionItem';

import './style.css'

export default ({ userId, currentCollection }) => (
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
);
