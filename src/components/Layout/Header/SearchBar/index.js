import React from 'react';
import { withRouter } from 'react-router-dom';

import { Toolbar } from 'material-ui/Toolbar';

import SearchForm from '../../../Forms/SearchForm';


const SearchBar = ({ history }) => {

  const handleSubmit = (event, searchInfo) => {
    const { searchTerms, searchType } = searchInfo;

    event.preventDefault();

    if (searchTerms) {
      history.push({
        pathname: '/search',
        search: `?${searchType}=${searchTerms}`,
      });
    }
  };

  return (
    <Toolbar style={{
      display: "block",
      height: "40px",
      width: "550px",
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
    }}
    >
      <SearchForm handleSubmit={handleSubmit} />
    </Toolbar>
  )
};

export default withRouter(SearchBar);
