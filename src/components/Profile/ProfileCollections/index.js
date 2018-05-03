import React from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';

import ItemsPreview from './ItemsPreview';
import CollectionInfo from './CollectionInfo';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const StyledPaper = styled(Paper) `
  display: flex;
  justify-content: center;
  margin: auto;
  width: 86%;
  height: 322px;
  margin-bottom: 50px;

  @media (max-width: ${bp.breakThree}) {
    width: 91%;
  }
  @media (max-width: ${bp.breakFive}) {
    width: 95%;
  }
`

// ============== Component ==============
export default props => (
  <StyledPaper zDepth={4}  >
    <ItemsPreview {...props} />
    <CollectionInfo {...props} />
  </StyledPaper>
);
