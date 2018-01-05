import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserCard from '../../containers/UserCard';
import CollectionCard from '../../containers/CollectionCard';

import './style.css';

class Search extends Component {

  displayResults = () => {
    const { results, searchType } = this.props;

    if (results.length === 0) {
      return <h2>No {searchType}s found</h2>
    }

    if (searchType === "user") {
      return results.map(user => <UserCard key={user._id} user={user} />)
    }

    if (searchType === "collection") {
      return results.map(result => {
        const { collection, user } = result;
        return <CollectionCard key={collection._id} collection={collection} user={user}/>
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

const mapStateToProps = (state, props) => {
  const { results, searchType } = state;

  return (
    {
      results,
      searchType,
    }
  )
};

// const mapDispatchToProps = (dispatch) => ({

// })

export default connect(mapStateToProps)(Search);
