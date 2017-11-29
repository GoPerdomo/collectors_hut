import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Collection extends Component {
  
  render() {
    return (
      <main className="Collection">

      </main>
    )
  }
}

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps)(Collection);
