import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import './style.css';

class CollectionCard extends Component {

  render() {
    const { collection, user } = this.props;
    const maxItems = 3;

    return (
      <Card
        style={{ textAlign: "left", marginBottom: "30px" }}
      >
        <CardHeader
          style={{ padding: "6px 16px" }}
          titleStyle={{ fontSize: "1.2em", fontWeigh: "bold" }}
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
        <Divider />
        <CardTitle
          showExpandableButton
          actAsExpander
          title={
            <NavLink
              to={`/users/${user._id}/collections/${collection._id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              {collection.name}
            </NavLink>
          }
        />
        <div
          className="search-collection-preview"
          expandable
        >
          {
            collection.items && collection.items.map((item, index) => {
              if (index < maxItems)
                return (
                  <div key={item._id}>
                    <img src={item.photo} alt="" />
                  </div>
                )
              else
                return null;
            })
          }
        </div>
      </Card>
    )
  }
};

export default CollectionCard;
