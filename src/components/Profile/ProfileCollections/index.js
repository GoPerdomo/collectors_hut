import React from 'react';

import Paper from 'material-ui/Paper';

import ItemsPreview from './ItemsPreview';
import CollectionInfo from './CollectionInfo';

import './style.css';

export default props => {
  const { collection } = props;
  const { items } = collection;
  const maxItems = 6;

  return (
    <Paper
      className={
        `profile-collection-preview ${items && items.length <= maxItems / 2 ? 'shorter-wrapper' : ''}`
      }
      style={{ backgroundColor: "#6D8EAD", boxSizing: "content-box" }}
      zDepth={0}
    >
      <ItemsPreview {...props} maxItems={maxItems} />
      <CollectionInfo {...props} />
    </Paper>
  )
};
