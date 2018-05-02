import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import LoginRegister from '../../components/Enter/LoginRegister';


// ========== Styled Components ==========
const EnterWrapper = styled.main`
  margin: 0 auto auto;
  width: 80%;
  max-width: 1440px;
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1em;
  text-align: center;
`


// ============== Component ==============
class Enter extends Component {

  componentDidMount() {
    const { loggedUser, history } = this.props;

    window.scrollTo(0, 0);
    if (loggedUser) history.push(`/users/${loggedUser}`);
  }

  componentDidUpdate(prevProps, prevState) {
    const { loggedUser, history } = this.props;
    if (loggedUser) history.push(`/users/${loggedUser}`);
  }

  render() {
    return (
      <EnterWrapper>
        <Title>Login to your account or register</Title>
        <LoginRegister />
      </EnterWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedUser } = state;

  return {
    loggedUser,
  }
};

export default connect(mapStateToProps)(Enter);
