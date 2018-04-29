import React from 'react';

import { Card } from 'material-ui/Card';

import UserCardHeader from './UserCardHeader';

import './style.css';

export default ({ user, loggedUser }) => (
  <Card
    zDepth={2}
    className="search-user-card"
    style={{ backgroundColor: "#6D8EAD" }}
  >
    <UserCardHeader user={user} />
  </Card>
);
