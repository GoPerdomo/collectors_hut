import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class EditItemForm extends Component {

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
    } = props.item;

    this.state = {
      itemInfo: {
        name,
        description,
        photo: "",
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
      photo,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = this.state.itemInfo;
    const { id } = event.currentTarget;

    switch (id) {
      case ("edit-item-name"):
        name = content;
        break;
      case ("edit-item-description"):
        description = content;
        break;
      case ("edit-item-photo"):
        photo = content;
        break;
      case ("edit-item-productionYear"):
        if (!isNaN(content)) productionYear = content;
        break;
      case ("edit-item-acquisitionYear"):
        if (!isNaN(content)) acquisitionYear = content;
        break;
      case ("edit-item-origin"):
        origin = content;
        break;
      case ("edit-item-manufacturer"):
        manufacturer = content;
        break;
      default:
        break;
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
      }
    });
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
      condition,
    } = itemInfo;
    const { handleSubmit } = this.props

    return (
      <form onSubmit={(event) => handleSubmit(event, itemInfo)}>
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
    )
  }
};
