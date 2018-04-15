import React from 'react';
import { NavLink } from 'react-router-dom';

import { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

export default ({ _id, firstName, lastName, photo }) => (
  <CardHeader
    style={{ backgroundColor: "#6D8EAD", padding: "16px 40px" }}
    titleStyle={{ fontSize: "1.2em", fontWeigh: "bold", lineHeight: 2 }}
    title={
      <NavLink to={`/users/${_id}`} style={{ color: "#fff" }} >
        {firstName} {lastName}
      </NavLink>
    }
    avatar={<Avatar backgroundColor="white" size={40} src={photo} />
    }
  />
);
