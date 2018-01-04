import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { search } from '../../store/actions';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerms: "",
      searchType: "user",
    }
  };

  handleSubmit = (event) => {
    const { searchTerms, searchType } = this.state;
    const { search } = this.props;

    event.preventDefault();

    if (searchTerms) {
      search(searchTerms.toLocaleLowerCase(), searchType);
    }
  };

  render() {
    const { searchTerms, searchType } = this.state;

    return (
      <form
        style={{ margin: "auto 0", display: "flex" }}
        onSubmit={this.handleSubmit}
      >
        <TextField
          hintText="Find users and collections"
          onChange={(event, value) => this.setState({ searchTerms: value })}
          value={searchTerms}
        />
        <SelectField
          onChange={(event, index, value) => this.setState({ searchType: value })}
          value={searchType}
        >
          <MenuItem value={"user"} primaryText={"Users"} />
          <MenuItem value={"collection"} primaryText={"Collections"} />
        </SelectField>
        <RaisedButton type="submit" label="Search" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: (searchTerms, searchType) => dispatch(search(searchTerms, searchType))
})

export default connect(null, mapDispatchToProps)(SearchBar);
