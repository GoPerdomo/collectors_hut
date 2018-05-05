import React from 'react';
import styled from 'styled-components';
import { GridList, GridTile } from 'material-ui/GridList';

import CollectionItemPreview from './CollectionItemPreview';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const StyledGridList = styled(GridList) `
  & > div {
    width: 25% !important;

    @media (max-width: ${bp.breakOne}) {
      width: 33.333% !important;
    }
    @media (max-width: ${bp.minWidth}) {
      width: 50% !important;
    }
  }
`

// ============== Component ==============
export default ({ userId, currentCollection }) => (
  <StyledGridList cellHeight="auto" >
    {
      currentCollection.items.map(item => (
        <GridTile key={item._id} title={item.name} >
          <CollectionItemPreview
            item={item}
            collectionId={currentCollection._id}
            userId={userId}
          />
        </GridTile>
      ))
    }
  </StyledGridList>
);
