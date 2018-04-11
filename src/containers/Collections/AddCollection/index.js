import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import Dialog from 'material-ui/Dialog';

import { addCollection } from '../../../store/actions';


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
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
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

      this.handleRequestClose();

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
      <div>
        <IconButton
          onClick={this.handleButtonClick}
          iconStyle={{ borderRadius: "50px", backgroundColor: "ffffff", width: "36px", height: "36px", padding: "0" }}
          style={{ width: "36px", height: "36px", padding: "0" }}
        >
          <ContentAddCircle
            color="#FF6517"
            hoverColor="#d95a2f"
            viewBox="1 1 22 22"
          />
        </IconButton>

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="new-collection-name"
              hintText="Name"
              required
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              fullWidth
              onChange={this.handleContentChange}
              value={name}
            />
            <TextField
              id="new-collection-info"
              hintText="Description"
              fullWidth
              multiLine
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={info}
            />
            <RaisedButton
              fullWidth
              type="submit"
              label="Create"
              labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
              backgroundColor="#6D8EAD"
            />
          </form>
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCollection: (userId, newCollection) => dispatch(addCollection(userId, newCollection))
});

export default connect(null, mapDispatchToProps)(AddCollection);
