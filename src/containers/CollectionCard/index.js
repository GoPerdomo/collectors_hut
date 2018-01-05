import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

class CollectionCard extends Component {

  render() {
    const { collection, user } = this.props;

    return (
      <Card
        style={{ textAlign: "left" }}
      >
        <CardHeader
          showExpandableButton
          title={
            <NavLink
              to={`/users/${user._id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              {user.firstName} {user.lastName}
            </NavLink>
          }
          avatar={
            <Avatar
              backgroundColor="white"
              size={40}
              src={user.photo}
            />
          }
        />
        <CardTitle title={collection.name} />
      </Card>
    )
  }
};

export default CollectionCard;
