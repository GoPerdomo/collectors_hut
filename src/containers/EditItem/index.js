import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';

import { editItem } from '../../store/actions';


class EditItem extends Component {

  constructor(props) {
    super(props);
    const {
      name,
      description,
      photo,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = this.props.item;

    this.state = {
      open: false,
      itemInfo: {
        name,
        description,
        photo,
        productionYear,
        acquisitionYear,
        origin,
        manufacturer,
        condition,
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
      photo,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = this.state.itemInfo;
    const { id } = event.currentTarget;

    if (id === "edit-item-name") name = content;
    if (id === "edit-item-description") description = content;
    if (id === "edit-item-photo") photo = content;
    if (id === "edit-item-productionYear" && !isNaN(content)) productionYear = content;
    if (id === "edit-item-acquisitionYear" && !isNaN(content)) acquisitionYear = content;
    if (id === "edit-item-origin") origin = content;
    if (id === "edit-item-manufacturer") manufacturer = content;

    this.setState({
      itemInfo: {
        name,
        description,
        photo,
        productionYear,
        acquisitionYear,
        origin,
        manufacturer,
        condition,
      }
    });
  }

  handleSubmit = (event) => {
    const { userId, item, editItem } = this.props;
    const { itemInfo } = this.state;
    const {
      name,
      description,
      photo,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = itemInfo;

    event.preventDefault();

    if (name) {      
      editItem(userId, item.collectionId, item._id, itemInfo);
      this.handleRequestClose();
    }

    this.setState({
      itemInfo: {
        name,
        description,
        photo,
        productionYear,
        acquisitionYear,
        origin,
        manufacturer,
        condition,
      },
    })
  }

  render() {
    const { itemInfo } = this.state;
    const {
      name,
      description,
      photo,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition
    } = this.state.itemInfo;

    return (
      <div>
        <RaisedButton
          onClick={this.handleButtonClick}
          labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
          backgroundColor="#ffffff"
          label={"Edit item"}
        />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="edit-item-name"
              hintText="Name"
              required
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={name}
            />
            <TextField
              id="edit-item-description"
              hintText="Description"
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              multiLine
              onChange={this.handleContentChange}
              value={description}
            />
            <TextField
              id="edit-item-photo"
              hintText="Photo Link"
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              fullWidth
              onChange={this.handleContentChange}
              value={photo}
            />
            <TextField
              id="edit-item-productionYear"
              hintText="Production Year"
              type="number"
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              fullWidth
              onChange={this.handleContentChange}
              value={productionYear}
            />
            <TextField
              id="edit-item-acquisitionYear"
              hintText="Acquisition Year"
              type="number"
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              fullWidth
              onChange={this.handleContentChange}
              value={acquisitionYear}
            />
            <TextField
              id="edit-item-origin"
              hintText="Origin"
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={origin}
            />
            <TextField
              id="edit-item-manufacturer"
              hintText="Manufacturer"
              fullWidth
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
              value={manufacturer}
            />
            <SelectField
              id="edit-item-condition"
              onChange={(event, index, value) => this.setState({ itemInfo: { ...itemInfo, condition: value } })}
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
              type="submit"
              label="Save"
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
  editItem: (userId, collectionId, itemId, item) => dispatch(editItem(userId, collectionId, itemId, item))
});

export default connect(null, mapDispatchToProps)(EditItem);
