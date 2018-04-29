import React from 'react';

import { Card } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import CollectionCardHeader from './CollectionCardHeader';
import CollectionCardTitle from './CollectionCardTitle';
import CollectionCardPreview from './CollectionCardPreview';

export default ({ user, collection }) => (
  <Card zDepth={2}
    style={{ textAlign: "left", marginBottom: "30px" }}
  >
    <CollectionCardHeader {...user} />
    <Divider />
    <CollectionCardTitle userId={user._id} collection={collection} />
    <CollectionCardPreview user={user} collection={collection} />
  </Card>
);
