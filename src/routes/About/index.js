import React, { Component } from 'react';

import HomeLogo from '../../components/Images/HomeLogo';

// ========== Styles ==========
const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto auto',
  width: '80%',
  maxWidth: '1440px',
  textAlign: 'center',
};

// ========== Component ==========
class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="about" style={wrapper}>
        <HomeLogo />
        <h1>Coming Soon</h1>
      </main>
    )
  }
};

export default About;
