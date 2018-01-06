import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
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
    const { search, history } = this.props;

    event.preventDefault();

    if (searchTerms) {
      search(searchTerms.toLocaleLowerCase(), searchType);
      history.push('/search');

      this.setState({
        searchTerms: "",
        searchType: "user",
      })
    }
  };

  render() {
    const { searchTerms, searchType } = this.state;

    return (
      <Toolbar style={{ margin: "auto 0" }}>
        <form
          style={{ margin: "auto 0", display: "flex" }}
          onSubmit={this.handleSubmit}
        >
          <ToolbarGroup>
            <TextField
              hintText="Find users and collections"
              onChange={(event, value) => this.setState({ searchTerms: value })}
              value={searchTerms}
            />
          </ToolbarGroup>
          <ToolbarGroup>
            <SelectField
              onChange={(event, index, value) => this.setState({ searchType: value })}
              value={searchType}
            >
              <MenuItem value={"user"} primaryText={"Users"} />
              <MenuItem value={"collection"} primaryText={"Collections"} />
            </SelectField>
          </ToolbarGroup>
          <ToolbarGroup>
            <RaisedButton backgroundColor="#5eb8ff" type="submit" label="Search" />
          </ToolbarGroup>
        </form>
      </Toolbar>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  search: (searchTerms, searchType) => dispatch(search(searchTerms, searchType))
})

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
