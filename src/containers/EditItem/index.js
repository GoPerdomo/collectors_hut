import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ConfigButton from '../../containers/ConfigButton';

import { editItem } from '../../store/actions';


// TODO: Refactor

class EditItem extends Component {

  constructor(props) {
    super(props);
    const {
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = this.props.item;

    this.state = {
      itemInfo: {
        name,
        description,
        productionYear,
        acquisitionYear,
        origin,
        manufacturer,
        condition,
      },
    };
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
    } = this.state.itemInfo;
    const { id } = event.currentTarget;

    if (id === "edit-item-name") name = content;
    if (id === "edit-item-description") description = content;
    if (id === "edit-item-productionYear" && !isNaN(content)) productionYear = content;
    if (id === "edit-item-acquisitionYear" && !isNaN(content)) acquisitionYear = content;
    if (id === "edit-item-origin") origin = content;
    if (id === "edit-item-manufacturer") manufacturer = content;

    this.setState({
      itemInfo: {
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
    const { userId, item, editItem } = this.props;
    const { itemInfo } = this.state;
    const {
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = itemInfo;

    event.preventDefault();

    editItem(userId, item.collectionId, item._id, itemInfo);

    this.setState({
      itemInfo: {
        name,
        description,
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
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition
    } = this.state.itemInfo;

    return (
      <ConfigButton label="Edit item">
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="edit-item-name"
            hintText="Name"
            fullWidth
            onChange={this.handleContentChange}
            value={name}
          />
          <TextField
            id="edit-item-description"
            hintText="Description"
            fullWidth
            multiLine
            onChange={this.handleContentChange}
            value={description}
          />
          <TextField
            id="edit-item-productionYear"
            hintText="Production Year"
            type="number"
            fullWidth
            onChange={this.handleContentChange}
            value={productionYear}
          />
          <TextField
            id="edit-item-acquisitionYear"
            hintText="Acquisition Year"
            type="number"
            fullWidth
            onChange={this.handleContentChange}
            value={acquisitionYear}
          />
          <TextField
            id="edit-item-origin"
            hintText="Origin"
            fullWidth
            onChange={this.handleContentChange}
            value={origin}
          />
          <TextField
            id="edit-item-manufacturer"
            hintText="Manufacturer"
            fullWidth
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
            labelStyle={{ color: "#6D8EAD", fontWeight: "bold" }}
            backgroundColor="#ffffff"
          />
        </form>
      </ConfigButton>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editItem: (userId, collectionId, itemId, item) => dispatch(editItem(userId, collectionId, itemId, item))
});

export default connect(null, mapDispatchToProps)(EditItem);
