import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeLogo from '../../components/Images/HomeLogo';
import CollectionCard from '../../components/Collections/CollectionCard';
import Loading from '../../components/Loading';

import { getRandomCollections, clearHomeCollections } from '../../store/actions';

import './style.css';

class Home extends Component {

  // If an user in logged in redirects profile, else fetches random collections
  componentDidMount() {
    const { loggedUser, getRandomCollections, history } = this.props;

    if (loggedUser) history.push(`/users/${loggedUser}`);
    else getRandomCollections();
  }

  componentWillUnmount() {
    this.props.clearHomeCollections();
  }

  render() {
    const { chosenCollections } = this.props;

    return (
      <main className="home">
        <HomeLogo />
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
      </main>
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
