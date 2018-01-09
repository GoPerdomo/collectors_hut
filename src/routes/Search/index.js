import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserCard from '../../containers/UserCard';
import CollectionCard from '../../containers/CollectionCard';

import './style.css';

class Search extends Component {

  displayResults = () => {
    const { props } = this;
    const { results, searchType } = props;

    if (results.length === 0) {
      return <h2>No {searchType}s found</h2>
    }

    if (searchType === "user") {
      return results.map(result => <UserCard key={result.user._id} user={result.user} />)
    }

    if (searchType === "collection") {
      return results.map(result => {
        const { collection, user } = result;

        if (props[user._id]) {
          const stateCollections = props[user._id].collections;

          for (const stateCollection of stateCollections) {
            if (collection._id === stateCollection._id) {
              collection.items = stateCollection.items
            }
          }
        }
        return <CollectionCard key={collection._id} collection={collection} user={user} />
      })
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
  const { loggedUser } = newState;

  if (newState.results) {
    const newResults = newState.results.filter(result => result.user._id !== loggedUser);

    newState = { ...newState, results: newResults }
  }

  return (
    {
      ...newState,
    }
  )
};

export default connect(mapStateToProps)(Search);
