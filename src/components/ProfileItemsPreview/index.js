import React from 'react';

import './style.css';

const ProfileItemsPreview = (props) => {
  return (
    <img className="profile-items-preview" src={ props.photo } alt="TODO: Add a nonredundant alt"/>
  )
};

export default ProfileItemsPreview;
