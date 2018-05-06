import React from 'react';
import styled from 'styled-components';

import Dialog from 'material-ui/Dialog';

import bp from '../../../helpers/breakpoints';

// ========== Styled Components ==========
const StyledDialog = styled(Dialog) `
  & > div > div {
    @media (max-width: ${bp.breakSix}) {
      width: 85% !important;
    }
    @media (max-width: ${bp.breakSeven}) {
      width: 90% !important;
    }
    @media (max-width: ${bp.breakNine}) {
      width: 97% !important;
    }
    
    & > div > div {
      border: none !important;
      
      @media (max-width: ${bp.breakEight}) {
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
