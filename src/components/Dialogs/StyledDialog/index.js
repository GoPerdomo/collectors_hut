import React from 'react';
import styled from 'styled-components';

import Dialog from 'material-ui/Dialog';

import bp from '../../../utils/breakpoints';

// ========== Styled Components ==========
const StyledDialog = styled(Dialog) `
  & > div > div {
    @media (max-width: ${bp.minWidth}) {
      width: 97% !important;
    }
    
    & > div > div {
      border: none !important;
      
      @media (max-width: ${bp.minWidth}) {
        padding: 1.5em 1em !important;
      }
    }
  }
`

// ============== Component ==============
export default ({ title, open, onRequestClose, actions, children }) => (
  <StyledDialog
    title={title}
    open={open}
    autoScrollBodyContent
    actions={actions}
    onRequestClose={onRequestClose}
  >
    {children}
  </StyledDialog>
);
