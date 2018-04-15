import React from 'react';

import Paper from 'material-ui/Paper';

import './style.css';

export default ({ children }) => (
  <Paper zDepth={0} className="display" style={{ backgroundColor: "#6D8EAD" }} >
    <div style={{ backgroundColor: "#ffffff", padding: "20px" }}>
      {children}
    </div>
  </Paper>
);
