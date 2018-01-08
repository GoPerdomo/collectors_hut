import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

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
      <Toolbar style={{
        display: "block",
        height: "40px",
        width: "550px",
        margin: "auto 0",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
      }}
      >
        <form
          style={{ height: "40px", margin: "auto 0", display: "flex", justifyContent: "space-between" }}
          onSubmit={this.handleSubmit}
        >
          <ToolbarGroup>
            <TextField
              style={{ height: "40px" }}
              hintStyle={{ bottom: "8px" }}
              underlineShow={false}
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              hintText="Find users and collections"
              onChange={(event, value) => this.setState({ searchTerms: value })}
              value={searchTerms}
            />
          </ToolbarGroup>
          <ToolbarGroup style={{ width: "140px" }}>
            <SelectField
              underlineShow={false}
              onChange={(event, index, value) => this.setState({ searchType: value })}
              value={searchType}
            >
              <MenuItem value={"user"} primaryText={"Users"} />
              <MenuItem value={"collection"} primaryText={"Collections"} />
            </SelectField>
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton
              type="submit"
              onClick={this.handleButtonClick}
              iconStyle={{ borderRadius: "50px", backgroundColor: "ffffff", width: "36px", height: "36px", padding: "0" }}
              style={{ width: "36px", height: "36px", padding: "0" }}
            >
              <ActionSearch
                color="#FF6517"
                hoverColor="#d95a2f"
                viewBox="1 1 22 22"
              />
            </IconButton>
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
