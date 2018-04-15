import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserCard from '../../components/SearchCards/UserCard';
import CollectionCard from '../../components/SearchCards/CollectionCard';

import './style.css';

class Search extends Component {

  displayResults = () => {
    const { props } = this;
    const { results, searchType, loggedUser } = props;

    if (results.length === 0) {
      return <h2>No {searchType}s found</h2>
    }

    if (searchType === "user") {
      return results.map(({ user }) => (
        <UserCard key={user._id} user={user} loggedUser={loggedUser} />
      ));
    }

    if (searchType === "collection") {
      return results.map(({ user, collection }) => (
        <CollectionCard key={collection._id} collection={collection} user={user} />
      ));
    }
  }

  render() {
    const { results } = this.props;

    return (
      <main className="search">
        {
          results &&
          this.displayResults()
        }
      </main>
    )
  }
};

const mapStateToProps = (state) => {
  let newState = { ...state };
  const { loggedUser, searchType, results } = newState;

  if (results) {
    // Removes logged user from results
    const newResults = results.filter(result => result.user._id !== loggedUser);

    newResults.map(result => {
      const { collection, user } = result;

      // Populate collections with items
      if (searchType === "collection" && state[user._id]) {
        const stateCollections = state[user._id].collections;

        for (const stateCollection of stateCollections) {
          if (collection._id === stateCollection._id) {
            collection.items = stateCollection.items
          }
        }
      }

      return result;
    });

    newState = { ...newState, results: newResults }
  }


  return (
    {
      ...newState,
    }
  )
};

export default connect(mapStateToProps)(Search);
