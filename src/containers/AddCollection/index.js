import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import ConfigButton from '../../containers/ConfigButton';

import { addCollection } from '../../store/actions';


// TODO: Refactor

class AddCollection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newCollection: {
        name: "",
        info: "",
      }
    };
  }

  handleContentChange = (event, content) => {
    let { name, info } = this.state.newCollection;
    const { id } = event.currentTarget;

    if (id === "new-collection-name") name = content;
    if (id === "new-collection-info") info = content;

    this.setState({
      newCollection: {
        name,
        info,
      }
    });
  }

  handleSubmit = (event) => {
    const { userId, addCollection } = this.props;
    const { newCollection } = this.state;

    event.preventDefault();

    if (newCollection.name) {
      addCollection(userId, newCollection);

      this.setState({
        newCollection: {
          name: "",
          info: "",
        }
      })
    }
  }

  render() {
    const { name, info } = this.state.newCollection;

    return (
      <ConfigButton label="Add collection">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="new-collection-name"
            hintText="Name"
            errorText={!name && "Name is required"}
            fullWidth
            onChange={this.handleContentChange}
            value={name}
          />
          <TextField
            id="new-collection-info"
            hintText="Description"
            fullWidth
            multiLine
            onChange={this.handleContentChange}
            value={info}
          />
          <RaisedButton type="submit" label="Create" fullWidth />
        </form>
      </ConfigButton>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCollection: (userId, newCollection) => dispatch(addCollection(userId, newCollection))
})

export default connect(null, mapDispatchToProps)(AddCollection);
