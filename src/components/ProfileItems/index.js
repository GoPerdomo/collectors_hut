import React from 'react';

import './style.css';

const ProfileItems = ({ photo }) => {
  return (
    <img className="profile-items-preview" src={ photo } alt=""/>
  )
};

export default ProfileItems;
