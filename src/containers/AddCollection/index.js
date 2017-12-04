import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover/Popover';
import TextField from 'material-ui/TextField';

import { addCollection } from '../../store/actions';

import './style.css';

class AddCollection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      newCollection: {
        name: "",
        info: "",
      }
    };
  }

  handleButtonClick = (event) => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleContentChange = (event, content) => {
    let { name, info } = this.state.newCollection;
    const { id } = event.currentTarget;

    if (id === "new-collection-name") name = content;
    if (id === "new-collection-info") info = content;

    this.setState({
      newCollection: {
        name: name,
        info: info,
      }
    });
  }

  handleSubmit = (event) => {
    const { userId, addCollection } = this.props;
    const { newCollection } = this.state;

    event.preventDefault();
    addCollection(userId, newCollection);
  }

  render() {

    return (
      <div className="add-collection">
        <RaisedButton onClick={this.handleButtonClick} label="Add collection" />
        <Popover
          style={{ width: "30%" }}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ "horizontal": "left", "vertical": "top" }}
          targetOrigin={{ "horizontal": "right", "vertical": "top" }}
          onRequestClose={this.handleRequestClose}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="new-collection-name"
              hintText="Name"
              fullWidth
              onChange={this.handleContentChange}
              value={this.state.newCollection.name}
            /><br />
            <TextField
              id="new-collection-info"
              hintText="Description"
              fullWidth
              multiLine
              onChange={this.handleContentChange}
              value={this.state.newCollection.info}
            /><br />
            <RaisedButton type="submit" label="Create" fullWidth />
          </form>
        </Popover>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCollection: (userId, newCollection) => dispatch(addCollection(userId, newCollection))
})

export default connect(null, mapDispatchToProps)(AddCollection);
