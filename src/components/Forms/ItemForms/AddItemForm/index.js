import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class AddItemForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newItemInfo: {
        name: "",
        description: "",
        productionYear: "",
        acquisitionYear: "",
        origin: "",
        manufacturer: "",
        condition: "",
      },
      newItemPhoto: {},
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
    } = this.state.newItemInfo;
    let { newItemPhoto } = this.state;
    const { id } = event.currentTarget;

    switch (id) {
      case ("new-item-name"):
        name = content;
        break;
      case ("new-item-description"):
        description = content;
        break;
      case ("new-item-productionYear"):
        if (!isNaN(content)) productionYear = content;
        break;
      case ("new-item-acquisitionYear"):
        if (!isNaN(content)) acquisitionYear = content;
        break;
      case ("new-item-origin"):
        origin = content;
        break;
      case ("new-item-manufacturer"):
        manufacturer = content;
        break;
      case ("new-item-photo"):
        if (event.target.files[0]) newItemPhoto = event.target.files[0];
        break;
      default:
        break;
    }

    this.setState({
      newItemInfo: {
        name,
        description,
        productionYear,
        acquisitionYear,
        origin,
        manufacturer,
        condition,
        photoType: newItemPhoto.type,
      },
      newItemPhoto,
    });
  }

  render() {
    const { newItemInfo } = this.state;
    const {
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = newItemInfo;
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={event => handleSubmit(event, this.state)}>
          <TextField
            id="new-item-name"
            required
            hintText="Name"
            fullWidth
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            value={name}
            onChange={this.handleContentChange}
          />
          <TextField
            id="new-item-description"
            fullWidth
            multiLine
            hintText="Description"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            value={description}
            onChange={this.handleContentChange}
          />
        </form>
        <form onSubmit={event => handleSubmit(event, this.state)}>
          <TextField
            id="new-item-productionYear"
            fullWidth
            hintText="Production Year"
            type="number"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            value={productionYear}
            onChange={this.handleContentChange}
          />
          <TextField
            id="new-item-acquisitionYear"
            fullWidth
            hintText="Acquisition Year"
            type="number"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            value={acquisitionYear}
            onChange={this.handleContentChange}
          />
          <TextField
            id="new-item-origin"
            hintText="Origin"
            fullWidth
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            value={origin}
            onChange={this.handleContentChange}
          />
          <TextField
            id="new-item-manufacturer"
            fullWidth
            hintText="Manufacturer"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            value={manufacturer}
            onChange={this.handleContentChange}
          />
          <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <SelectField
              id="new-item-condition"
              hintText="Condition"
              value={condition}
              onChange={(event, index, value) => this.setState({ newItemInfo: { ...newItemInfo, condition: value } })}
            >
              <MenuItem value={"Mint"} primaryText={"Mint"} />
              <MenuItem value={"Good"} primaryText={"Good"} />
              <MenuItem value={"Fair"} primaryText={"Fair"} />
              <MenuItem value={"Poor"} primaryText={"Poor"} />
            </SelectField>
            <TextField
              id="new-item-photo"
              type="file"
              accept=".jpg, .png"
              underlineFocusStyle={{ borderColor: "#FF6517" }}
              onChange={this.handleContentChange}
            />
          </div>
          <RaisedButton
            fullWidth
            label="Create"
            labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
            backgroundColor="#6D8EAD"
            onClick={event => handleSubmit(event, this.state)}
          />
        </form>
      </div>
    )
  }
};
