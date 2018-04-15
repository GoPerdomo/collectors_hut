import React from 'react';

import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import CollectionHeader from './CollectionHeader';
import CollectionTitle from './CollectionTitle';
import CollectionPreview from './CollectionPreview';

export default ({ user, collection }) => (
  <Card zDepth={0}
    style={{ border: "1px solid #6D8EAD", textAlign: "left", marginBottom: "30px" }}
  >
    <CollectionHeader {...user} />
    <Divider />
    <CollectionTitle userId={user._id} collection={collection} />
    <CollectionPreview user={user} collection={collection} />
  </Card>
);
