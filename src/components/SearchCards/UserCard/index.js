import React from 'react';

import { Card } from 'material-ui/Card';

import UserCardHeader from './UserCardHeader';

import './style.css';

export default ({ user, loggedUser }) => (
  <Card
    className="search-user-card"
    style={{ backgroundColor: "#6D8EAD" }}
    zDepth={0}
  >
    <UserCardHeader user={user} />
  </Card>
);
