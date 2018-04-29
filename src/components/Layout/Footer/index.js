import React from 'react';

import FooterLogo from '../../Images/FooterLogo';
import Newsletter from './Newsletter';
import Navigation from './Navigation';
import SelectInput from '../../Inputs/SelectInput';

// ========== Styles ==========
const footer = {
  marginTop: '50px',
  display: 'flex',
  backgroundColor: '#6D8EAD',
  color: '#FFFFFF',
  height: '200px',
};

const wrapper = {
  width: '80%',
  height: '130px',
  maxWidth: '1400px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 'auto',
  alignItems: 'center',
};

// ========== Component ==========
export default () => (
  <footer style={footer}>
    <div style={wrapper}>
      <FooterLogo />
      <Newsletter />
      <Navigation />
    </div>
  </footer>
);
