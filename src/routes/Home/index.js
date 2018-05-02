import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HomeLogo from '../../components/Images/HomeLogo';
import CollectionCard from '../../components/SearchCards/CollectionCard';
import Loading from '../../components/Loading';

import { getRandomCollections, clearHomeCollections } from '../../store/actions';


// ========== Styled Components ==========
const HomeWrapper = styled.main`
  margin: 0 auto auto;
  width: 65%;
  max-width: 1440px;
  text-align: center;
`
const LogoWrapper = styled.div`
  margin: 0 0 3em;
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
