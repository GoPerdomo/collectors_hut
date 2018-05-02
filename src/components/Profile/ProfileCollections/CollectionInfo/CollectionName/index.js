import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// ========== Styled Components ==========
const StyledLink = styled(Link) `
  min-height: 64px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: #335173;
`

const CollectionName = styled.h2`
  cursor: pointer;
  width: fit-content;
  margin: 0;
  padding: 0.2em 1em;
  font-size: 1.7em;
  color: #FFFFFF;
  word-break: break-word;
`

// ============== Component ==============
export default ({ userId, collection }) => (
  <StyledLink to={`/users/${userId}/collections/${collection._id}`}>
    <CollectionName>
      {collection.name}
    </CollectionName>
  </StyledLink>
);
