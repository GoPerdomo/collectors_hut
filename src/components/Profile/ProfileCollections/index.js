import React from 'react';

import Paper from 'material-ui/Paper';

import ItemsPreview from './ItemsPreview';
import CollectionInfo from './CollectionInfo';

import './style.css';

export default props => (
  <Paper
    zDepth={4}
    className="profile-collection-preview"
    style={{ backgroundColor: "#6D8EAD", boxSizing: "content-box" }}
  >
    <ItemsPreview {...props} />
    <CollectionInfo {...props} />
  </Paper>
);
