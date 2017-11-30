import React from 'react';

import './style.css';

const ComponentItem = (props) => {
  return (
    <img className="collection-item-photo" src={ props.photo } alt="TODO: Add a nonredundant alt"/>
  )
};

export default ComponentItem;
