import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ItemPreview from '../../../Images/ItemPreview';

// ========== Styled Components ==========
const ItemWrapper = styled.div`
  height: 230px;
`


// ============== Component ==============

export default ({ userId, collectionId, item }) => (
  <Link to={`/users/${userId}/collections/${collectionId}/items/${item._id}`}>
    <ItemWrapper>
      <ItemPreview {...item} />
    </ItemWrapper>
  </Link>
);
