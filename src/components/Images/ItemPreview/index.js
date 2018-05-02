import React from 'react';
import styled from 'styled-components';

// ========== Styled Components ==========
const ItemPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

// ============== Component ==============
export default ({ photo, name }) => (
  <ItemPreview src={photo} alt={`Preview of ${name}`} />
);
