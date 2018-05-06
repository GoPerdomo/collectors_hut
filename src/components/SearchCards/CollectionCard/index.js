import React from 'react';

import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import CollectionCardHeader from './CollectionCardHeader';
import CollectionCardTitle from './CollectionCardTitle';
import CollectionCardPreview from './CollectionCardPreview';


// ========= Material-UI Styles =========
const styles = {
  base: {
    textAlign: "left",
    marginBottom: "30px",
  },
};


// ============== Component ==============
export default ({ user, collection }) => (
  <Card zDepth={2} style={styles.base}  >
    <CollectionCardHeader {...user} />
    <Divider />
    <CollectionCardTitle userId={user._id} collection={collection} />
    <CollectionCardPreview user={user} collection={collection} />
  </Card>
);
