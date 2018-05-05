import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import LoginRegister from '../../components/Enter/LoginRegister';
import bp from '../../utils/breakpoints';


// ========== Styled Components ==========
const EnterWrapper = styled.main`
  width: 80%;
  max-width: ${bp.maxWidth};
  margin: 0 auto auto;

  @media (max-width: ${bp.breakTwo}) {
    width: 90%;
  }
  @media (max-width: ${bp.breakFive}) {
    width: 92%;
  }
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
