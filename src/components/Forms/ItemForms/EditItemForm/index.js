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
        name: name || "",
        description: description || "",
        productionYear: productionYear || "",
        acquisitionYear: acquisitionYear || "",
        origin: origin || "",
        manufacturer: manufacturer || "",
        condition: condition || "",
      },
      itemPhoto: {},
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
    let { itemPhoto } = this.state;
    const { id } = event.currentTarget;

    switch (id) {
      case ("edit-item-name"):
        name = content;
        break;
      case ("edit-item-description"):
        description = content;
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
      case ("edit-item-photo"):
        if (event.target.files[0]) itemPhoto = event.target.files[0];
        break;
      default:
        break;
    }

    this.setState({
      itemInfo: {
        name,
        description,
        productionYear,
        acquisitionYear,
        origin,
        manufacturer,
        condition,
        photoType: itemPhoto.type,
      },
      itemPhoto,
    });
  }

  render() {
    const { handleSubmit } = this.props
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

    return (
      <form onSubmit={(event) => handleSubmit(event, this.state)}>
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
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <SelectField
            id="edit-item-condition"
            onChange={(event, index, value) => this.setState({ itemInfo: { ...itemInfo, condition: value } })}
            value={condition}
            style={{ width: "45%" }}
            hintText="Condition"
          >
            <MenuItem value={"Mint"} primaryText={"Mint"} />
            <MenuItem value={"Good"} primaryText={"Good"} />
            <MenuItem value={"Fair"} primaryText={"Fair"} />
            <MenuItem value={"Poor"} primaryText={"Poor"} />
          </SelectField>
          <TextField
            id="edit-item-photo"
            type="file"
            accept=".jpg, .png"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            inputStyle={{ position: "absolute", top: "6px" }}
            style={{ width: "45%" }}
            onChange={this.handleContentChange}
          />
        </div>
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
