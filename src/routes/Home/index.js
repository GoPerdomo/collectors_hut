import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HomeLogo from '../../components/Images/HomeLogo';
import CollectionCard from '../../components/SearchCards/CollectionCard';
import Loading from '../../components/Loading';

import { getCollections, getRandomCollections, clearHomeCollections } from '../../store/actions';
import bp from '../../helpers/breakpoints';


// ========== Styled Components ==========
const HomeWrapper = styled.main`
  width: 65%;
  max-width: ${bp.breakTwo};
  min-height: 50vh;
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

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  // If an user in logged in redirects profile, else fetches random collections
  componentDidMount() {
    const { loggedUser, getCollections, history } = this.props;

    window.scrollTo(0, 0);
    
    if (loggedUser) {
      history.push(`/users/${loggedUser}`);
    } else {
      getCollections();
      window.addEventListener("scroll", this.onScroll);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevCollections = prevProps.chosenCollections;
    const propCollections = this.props.chosenCollections;

    if (prevCollections !== propCollections) this.setState({ isLoading: false });
  }

  onScroll = () => {
    const { isLoading } = this.state;
    const { getRandomCollections } = this.props;

    const windowYPosition = window.innerHeight + window.scrollY;
    const bodyHeight = document.body.clientHeight;
    const footerHeight = document.querySelector("footer").clientHeight;

    if (windowYPosition >= (bodyHeight - footerHeight)) {
      if (!isLoading) getRandomCollections().then(isFetching => this.setState({ isLoading: isFetching }));
    }
  };

  componentWillUnmount() {
    const { clearHomeCollections } = this.props;
    clearHomeCollections();
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    const { isLoading } = this.state;
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
        {
          isLoading && <Loading />
        }
      </HomeWrapper>
    )
  }
}

const mapStateToProps = state => {
  const { loggedUser, chosenCollections } = state;

  return {
    loggedUser,
    chosenCollections,
  }
};

const mapDispatchToProps = dispatch => ({
  getCollections: () => dispatch(getCollections()),
  getRandomCollections: () => dispatch(getRandomCollections()),
  clearHomeCollections: () => dispatch(clearHomeCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
