import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SearchItem from '../../../Images/SearchItem';


// ========== Styled Components ==========
const CollectionPreview = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 2em;
  
  &:hover {
    opacity: 0.5;
  }
`

// ============== Component ==============
export default ({ user, collection }) => {
  const { items } = collection;
  const maxItems = 3;

  return (
    <NavLink to={`/users/${user._id}/collections/${collection._id}`} >
      <CollectionPreview>
        {
          items &&
          items.map((item, index) => !(index < maxItems) ? null : (
            <SearchItem {...item} />
          ))
        }
      </CollectionPreview>
    </NavLink>
  )
};
