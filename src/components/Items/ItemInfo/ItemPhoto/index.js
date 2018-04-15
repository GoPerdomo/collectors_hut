import React from 'react';

import './style.css';

export default ({ photo, name }) => (
  <div className="item-photo">
    <img src={photo} alt={name} />
  </div>
);
