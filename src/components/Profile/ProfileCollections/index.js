import React from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';

import ItemsPreview from './ItemsPreview';
import CollectionInfo from './CollectionInfo';


// ========== Styled Components ==========
const StyledPaper = styled(Paper) `
  display: flex;
  justify-content: center;
  margin: auto;
  width: 86%;
  height: 322px;
  margin-bottom: 50px;
`

// ============== Component ==============
export default props => (
  <StyledPaper zDepth={4}  >
    <ItemsPreview {...props} />
    <CollectionInfo {...props} />
  </StyledPaper>
);
