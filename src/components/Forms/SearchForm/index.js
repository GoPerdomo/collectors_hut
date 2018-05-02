import React, { Component } from 'react';
import styled from 'styled-components';

import { ToolbarGroup } from 'material-ui/Toolbar';

import SearchInput from '../../Inputs/SearchInput';
import SearchSelectInput from '../../Inputs/SearchSelectInput';
import SearchIconButton from '../../Buttons/SearchIconButton';


// ========== Styled Components ==========
const StyledForm = styled.form`
  height: 40px;
  display: flex;
  justify-content: space-between;
`

// ========= Material-UI Styles =========
const ToolbarGroupStyles = {
  base: {
    width: "140px",
  },
};


// ============== Component ==============
export default class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerms: "",
      searchType: "user",
    }
  }

  render() {
    const { searchTerms, searchType } = this.state;
    const { handleSubmit } = this.props;

    return (
      <StyledForm onSubmit={event => {
        handleSubmit(event, this.state)
        this.setState({ searchTerms: "", searchType: "user", })
      }}>
        <ToolbarGroup>
          <SearchInput
            value={searchTerms}
            onChange={(event, value) => this.setState({ searchTerms: value })}
          />
        </ToolbarGroup>
        <ToolbarGroup style={ToolbarGroupStyles.base}>
          <SearchSelectInput
            value={searchType}
            onChange={(event, index, value) => this.setState({ searchType: value })}
          >
          </SearchSelectInput>
        </ToolbarGroup>
        <ToolbarGroup>
          <SearchIconButton />
        </ToolbarGroup>
      </StyledForm>
    )
  }
};
