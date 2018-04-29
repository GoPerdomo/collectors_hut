import React from 'react';

import NewsletterForm from '../../../Forms/NewsletterForm';

// ========== Styles ==========
const wrapper = {
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontSize: '1.2em',
};

// ========== Component ==========
export default () => (
  <div style={wrapper}>
    <span>Newsletter:</span>
    <NewsletterForm />
  </div>
);
