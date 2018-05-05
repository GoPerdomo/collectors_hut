import React, { Component } from 'react';
import styled from 'styled-components';

import { ToolbarGroup } from 'material-ui/Toolbar';

import SearchInput from '../../Inputs/SearchInput';
import SearchSelectInput from '../../Inputs/SearchSelectInput';
import SearchIconButton from '../../Buttons/IconButtons/SearchIconButton';

import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const StyledForm = styled.form`
  height: inherit;
  display: flex;
  justify-content: space-between;
`

const TextFieldWrapper = styled(ToolbarGroup) `
  width: 50%;

  @media (max-width: ${bp.breakSix}) {
    width: 55%;
  }
`
const SelectFieldWrapper = styled(ToolbarGroup) `
  width: 30%;

  @media (max-width: ${bp.breakFour}) {
    width: 35%;
  }
  @media (max-width: ${bp.breakSix}) {
    width: 25%;
  }
  @media (max-width: ${bp.soon}) {
    width: 30%;
  }
  @media (max-width: ${bp.minWidth}) {
    width: 40%;
  }
`
const ButtonWrapper = styled(ToolbarGroup) `
  width: 7%;

  @media (max-width: ${bp.minWidth}) {
    display: none !important;
  }
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
          />
        </SelectFieldWrapper>
        <ButtonWrapper>
          <SearchIconButton />
        </ButtonWrapper>
      </StyledForm>
    )
  }
};
