import React from 'react';
import { NavLink } from 'react-router-dom';

import { Card, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import ProfileChips from '../Profile/ProfileInfo/ProfileChips';
import InteractionButtons from '../Buttons/InteractionButtons';

import './style.css';

export default ({ user, loggedUser }) => {
  const { _id, firstName, lastName, photo } = user;

  return (
    <Card
      className="search-user-card"
      style={{ backgroundColor: "#6D8EAD" }}
      zDepth={0}
    >
      <CardHeader
        titleStyle={{ fontSize: "1.5em", fontWeight: "bold" }}
        subtitleStyle={{ display: "flex", paddingTop: "1em" }}
        style={{ paddingLeft: "40px" }}
        title={
          <NavLink
            to={`/users/${_id}`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {firstName} {lastName}
          </NavLink>
        }
        subtitle={<ProfileChips user={user} />}
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
};
