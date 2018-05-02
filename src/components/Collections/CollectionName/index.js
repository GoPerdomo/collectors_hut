import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ========== Styled Components ==========
const CollectionNameLink = styled(Link) `
  color: #000;

& h1 {
  margin: 0 auto 20px;
  width: fit-content;
}
`

// ============== Component ==============
export default ({ userId, collection }) => {

  return (
    <CollectionNameLink to={`/users/${userId}/collections/${collection._id}`}>
      <h1>{collection.name}</h1>
    </CollectionNameLink>
  )
};
