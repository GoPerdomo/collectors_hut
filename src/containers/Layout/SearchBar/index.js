import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Toolbar } from 'material-ui/Toolbar';

import SearchForm from '../../../components/Forms/SearchForm';

import { search } from '../../../store/actions';


const SearchBar = ({ search, history }) => {

  const handleSubmit = (event, searchInfo) => {
    const { searchTerms, searchType } = searchInfo;

    event.preventDefault();

    if (searchTerms) {
      search(searchTerms.toLocaleLowerCase(), searchType);
      history.push('/search');
    }
  };

  return (
    <Toolbar style={{
      display: "block",
      height: "40px",
      width: "550px",
      margin: "auto 0",
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
    }}
    >
      <SearchForm handleSubmit={handleSubmit} />
    </Toolbar>
  )
};


const mapDispatchToProps = (dispatch) => ({
  search: (searchTerms, searchType) => dispatch(search(searchTerms, searchType))
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
