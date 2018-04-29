import React from 'react';
import { Link } from 'react-router-dom';

// ========== Styles ==========
const wrapper = {
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'right',
};

const link = {
  color: "#FFFFFF",
  fontSize: '1.2em',
};

// ========== Component ==========
export default () => (
  <nav style={wrapper}>
    <Link to="/" style={link}>Home</Link>
    <Link to="/about" style={link}>About</Link>
    <Link to="/contact" style={link}>Contact</Link>
  </nav>
);
