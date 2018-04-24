import React from 'react';

// ============= Styles =============
const wrapperStyle = {
  width: "50%",
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderRight: '1px solid #6D8EAD',
};

const h1Style = {
  fontSize: "6em",
  margin: "0",
};

const h2Style = {
  fontSize: "2em",
  margin: '0.5em 0',
};

// =========== Component ============
export default () => (
  <div style={wrapperStyle}>
    <h1 style={h1Style}>404</h1>
    <h2 style={h2Style}>Ooops!</h2>
  </div>
);
