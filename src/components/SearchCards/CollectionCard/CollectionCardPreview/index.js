import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SearchItem from '../../../Images/SearchItem';

import bp from '../../../../helpers/breakpoints';


// ========== Styled Components ==========
const CollectionPreview = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2em 1em;
  word-break: break-word;

  @media (max-width: ${bp.breakSix}) {
    padding: 0 1em 1em;
  }
  @media (max-width: ${bp.breakSeven}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  
  &:hover {
    opacity: 0.5;
  }
`

// ============== Component ==============
export default ({ user, collection }) => {
  const { items } = collection;
  const maxItems = 4;

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
