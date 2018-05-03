import React, { Component } from 'react';
import styled from 'styled-components';

import { ToolbarGroup } from 'material-ui/Toolbar';

import SearchInput from '../../Inputs/SearchInput';
import SearchSelectInput from '../../Inputs/SearchSelectInput';
import SearchIconButton from '../../Buttons/SearchIconButton';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const StyledForm = styled.form`
  height: 40px;
  display: flex;
  justify-content: space-between;
`

const TextFieldWrapper = styled(ToolbarGroup)`
  width: 50%;
`
const SelectFieldWrapper = styled(ToolbarGroup)`
  width: 30%;

  @media (max-width: ${bp.breakFour}) {
    width: 35%;
  }
`
const ButtonWrapper = styled(ToolbarGroup)`
  width: 7%;
`

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
        <TextFieldWrapper>
          <SearchInput
            value={searchTerms}
            onChange={(event, value) => this.setState({ searchTerms: value })}
          />
        </TextFieldWrapper>
        <SelectFieldWrapper>
          <SearchSelectInput
            value={searchType}
            onChange={(event, index, value) => this.setState({ searchType: value })}
          >
          </SearchSelectInput>
        </SelectFieldWrapper>
        <ButtonWrapper>
          <SearchIconButton />
        </ButtonWrapper>
      </StyledForm>
    )
  }
};
