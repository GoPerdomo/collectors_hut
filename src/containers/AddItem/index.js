import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';

import { addItem } from '../../store/actions';


class AddItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      newItem: {
        name: "",
        description: "",
        productionYear: "",
        acquisitionYear: "",
        origin: "",
        manufacturer: "",
        condition: "",
      },
    };
  }

  handleButtonClick = (event) => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  handleContentChange = (event, content) => {
    let {
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = this.state.newItem;
    const { id } = event.currentTarget;

    if (id === "new-item-name") name = content;
    if (id === "new-item-description") description = content;
    if (id === "new-item-productionYear" && !isNaN(content)) productionYear = content;
    if (id === "new-item-acquisitionYear" && !isNaN(content)) acquisitionYear = content;
    if (id === "new-item-origin") origin = content;
    if (id === "new-item-manufacturer") manufacturer = content;

    this.setState({
      newItem: {
        name,
        description,
        productionYear,
        acquisitionYear,
        origin,
        manufacturer,
        condition,
      }
    });
  }

  handleSubmit = (event) => {
    const { userId, collectionId, addItem } = this.props;
    const { newItem } = this.state;

    event.preventDefault();

    if (newItem.name) {
      addItem(userId, collectionId, newItem);

      this.handleRequestClose();

      this.setState({
        newItem: {
          name: "",
          description: "",
          productionYear: "",
          acquisitionYear: "",
          origin: "",
          manufacturer: "",
          condition: "",
        },
      })
    }
  }

  render() {

    const {
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition
    } = this.state.newItem;
    const { newItem } = this.state;

    return (
      <div>
        <RaisedButton
          onClick={this.handleButtonClick}
          labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
          backgroundColor="#ffffff"
          label={"Add item"}
        />


        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="new-item-name"
              hintText="Name"
              errorText={!name && "Name is required"}
              fullWidth
              onChange={this.handleContentChange}
              value={name}
            />
            <TextField
              id="new-item-description"
              hintText="Description"
              fullWidth
              multiLine
              onChange={this.handleContentChange}
              value={description}
            />
            <TextField
              id="new-item-productionYear"
              hintText="Production Year"
              type="number"
              fullWidth
              onChange={this.handleContentChange}
              value={productionYear}
            />
            <TextField
              id="new-item-acquisitionYear"
              hintText="Acquisition Year"
              type="number"
              fullWidth
              onChange={this.handleContentChange}
              value={acquisitionYear}
            />
            <TextField
              id="new-item-origin"
              hintText="Origin"
              fullWidth
              onChange={this.handleContentChange}
              value={origin}
            />
            <TextField
              id="new-item-manufacturer"
              hintText="Manufacturer"
              fullWidth
              onChange={this.handleContentChange}
              value={manufacturer}
            />
            <SelectField
              id="new-item-condition"
              onChange={(event, index, value) => this.setState({ newItem: { ...newItem, condition: value } })}
              value={condition}
              hintText="Condition"
            >
              <MenuItem value={"Mint"} primaryText={"Mint"} />
              <MenuItem value={"Good"} primaryText={"Good"} />
              <MenuItem value={"Fair"} primaryText={"Fair"} />
              <MenuItem value={"Poor"} primaryText={"Poor"} />
            </SelectField>
            <RaisedButton
              fullWidth
              label="Create"
              labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
              backgroundColor="#ffffff"
            />
          </form>
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (userId, collectionId, newItem) =>
    dispatch(addItem(userId, collectionId, newItem))
});

export default connect(null, mapDispatchToProps)(AddItem);
