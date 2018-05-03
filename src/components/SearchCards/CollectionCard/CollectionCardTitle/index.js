
import React from 'react';
import { NavLink } from 'react-router-dom';

import { CardTitle } from 'material-ui/Card';

export default ({ userId, collection }) => (
  <CardTitle
    style={{ padding: "1em 2em" }}
    title={
      <NavLink to={`/users/${userId}/collections/${collection._id}`} style={{ color: "#000" }} >
        {collection.name}
      </NavLink>
    }
  />
);
