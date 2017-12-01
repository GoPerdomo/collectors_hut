import React from 'react';

import './style.css';

const ProfileItemsPreview = ({ photo }) => {
  return (
    <img className="profile-items-preview" src={ photo } alt="TODO: Add a nonredundant alt"/>
  )
};

export default ProfileItemsPreview;
