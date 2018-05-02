import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { Toolbar } from 'material-ui/Toolbar';

import SearchForm from '../../../Forms/SearchForm';
import bp from '../../../../utils/breakpoints';

// ========== Styled Components ==========
const StyledToolbar = styled(Toolbar) `
  width: 550px;
  border-radius: 10px;

  @media (max-width: ${bp.breakThree}) {
    width: 480px;
  }
`

// ========= Material-UI Styles =========
const styles = {
  base: {
    display: "block",
    height: "40px",
    backgroundColor: "#FFFFFF",
  },
};

// ============== Component ==============
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
    <StyledToolbar style={styles.base}>
      <SearchForm handleSubmit={handleSubmit} />
    </StyledToolbar>
  )
};

export default withRouter(SearchBar);
