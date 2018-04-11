import React from 'react';
import { NavLink } from 'react-router-dom';

import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import './style.css';

export default ({ user, collection }) => {
  const maxItems = 3;

  return (
    <Card
      zDepth={0}
      style={{ border: "1px solid #6D8EAD", textAlign: "left", marginBottom: "30px" }}
    >
      <CardHeader
        style={{ padding: "16px 40px" }}
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
        style={{ paddingLeft: "40px" }}
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
      >
        {
          collection.items && collection.items.map((item, index) => {
            if (index < maxItems)
              return (
                <div key={item._id}>
                  <NavLink
                    to={`/users/${user._id}/collections/${collection._id}`}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <img src={item.photo} alt="" />
                  </NavLink>
                </div>
              )
            else
              return null;
          })
        }
      </div>
    </Card>
  )
};
