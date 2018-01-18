import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { Card, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import InteractionButtons from '../InteractionButtons';

import './style.css';

class UserCard extends Component {

  render() {
    const { _id, firstName, lastName, photo, collections } = this.props.user;
    const { loggedUser } = this.props;
    const maxChips = 3;

    return (
      <Card
        className="search-user-card"
        zDepth={0}
      >
        <CardHeader
          titleStyle={{ fontSize: "1.5em", fontWeight: "bold" }}
          subtitleStyle={{ display: "flex" }}
          style={{ paddingLeft: "40px" }}
          title={
            <NavLink
              to={`/users/${_id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              {firstName} {lastName}
            </NavLink>
          }
          subtitle={
            collections.filter((collection, index) => index < maxChips)
              .map(collection => (
                <Chip
                  key={collection._id}
                  style={{ marginRight: 3, marginBottom: 3 }}
                >
                  {
                    collection.name
                  }
                </Chip>
              ))
          }
          avatar={
            <Avatar
              backgroundColor="white"
              size={70}
              src={photo}
            />
          }
        />
        {
          loggedUser && <InteractionButtons />
        }
      </Card>
    )
  }
};

export default UserCard;
