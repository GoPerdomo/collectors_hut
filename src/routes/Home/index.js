import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HomeLogo from '../../components/Images/HomeLogo';
import CollectionCard from '../../components/SearchCards/CollectionCard';
import Loading from '../../components/Loading';

import { getRandomCollections, clearHomeCollections } from '../../store/actions';
import bp from '../../helpers/breakpoints';


// ========== Styled Components ==========
const HomeWrapper = styled.main`
  width: 65%;
  max-width: ${bp.breakTwo};
  margin: 0 auto auto;
  text-align: center;

  @media (max-width: ${bp.breakOne}) {
    width: 70%;
  }
  @media (max-width: ${bp.breakTwo}) {
    width: 75%;
  }
  @media (max-width: ${bp.breakThree}) {
    width: 80%;
  }
  @media (max-width: ${bp.breakSix}) {
    width: 92%;
  }
`

const LogoWrapper = styled.div`
  margin: 0 0 3em;

  & h1 {
    margin-top: 0;
  }
`


// ============== Component ==============
class Home extends Component {

  // If an user in logged in redirects profile, else fetches random collections
  componentDidMount() {
    const { loggedUser, getRandomCollections, history } = this.props;

    window.scrollTo(0, 0);
    if (loggedUser) history.push(`/users/${loggedUser}`);
    else getRandomCollections();
  }

  componentWillUnmount() {
    this.props.clearHomeCollections();
  }

  render() {
    const { chosenCollections } = this.props;

    return (
      <HomeWrapper>
        <LogoWrapper>
          <h1>Welcome to the</h1>
          <HomeLogo />
        </LogoWrapper>
        {
          !chosenCollections
            ? <Loading />
            : chosenCollections.map(currentCollection => (
              <CollectionCard
                key={currentCollection.collection._id}
                collection={currentCollection.collection}
                user={currentCollection.user}
              />
            ))
        }
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { loggedUser, chosenCollections } = state;

  return {
    loggedUser,
    chosenCollections,
  }
};

const mapDispatchToProps = (dispatch) => ({
  getRandomCollections: () => dispatch(getRandomCollections()),
  clearHomeCollections: () => dispatch(clearHomeCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
