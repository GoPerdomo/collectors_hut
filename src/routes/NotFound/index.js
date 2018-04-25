import React from 'react';

import NotFoundLogo from '../../components/Images/NotFoundLogo';
import NotFoundText from '../../components/NotFound/NotFoundText';

// ========== Styles ==========
const mainStyles = {
  width: '80%',
  maxWidth: '1440px',
  minHeight: '50vh',
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "auto",
  textAlign: 'center',
};

// ========== Component ==========
export default () => (
  <main className="not-found" style={mainStyles}>
    <NotFoundText />
    <NotFoundLogo />
  </main>
);
