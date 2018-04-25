import React from 'react';

// ========== Styles ==========
const imgWrapper = {
  width: "50%",
};

const imgStyles = {
  margin: "auto",
  width: "300px",
};

// ========== Component ==========
export default () => (
  <div style={imgWrapper}>
    <img style={imgStyles} src="/img/not-found.png" alt="Collectors Hut logo with an awkward sweat drop" />
  </div>
);
