import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class AddItemForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
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
    } = this.state.newItem;
    const { id } = event.currentTarget;

    switch (id) {
      case ("new-item-name"):
        name = content;
        break;
      case ("new-item-description"):
        description = content;
        break;
      case ("new-item-photo"):
        photo = content;
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
      default:
        break;
    }

    this.setState({
      newItem: {
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
    const { newItem } = this.state;
    const {
      name,
      description,
      photo,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = newItem;
    const { handleSubmit } = this.props

    return (
      <div>
        <form onSubmit={(event) => handleSubmit(event, newItem)}>
          <TextField
            id="new-item-name"
            hintText="Name"
            required
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            fullWidth
            onChange={this.handleContentChange}
            value={name}
          />
          <TextField
            id="new-item-description"
            hintText="Description"
            fullWidth
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            multiLine
            onChange={this.handleContentChange}
            value={description}
          />
        </form>
        <form onSubmit={(event) => handleSubmit(event, newItem)}>
          <TextField
            id="new-item-photo"
            hintText="Photo Link"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            fullWidth
            onChange={this.handleContentChange}
            value={photo}
          />
          <TextField
            id="new-item-productionYear"
            hintText="Production Year"
            type="number"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            fullWidth
            onChange={this.handleContentChange}
            value={productionYear}
          />
          <TextField
            id="new-item-acquisitionYear"
            hintText="Acquisition Year"
            type="number"
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            fullWidth
            onChange={this.handleContentChange}
            value={acquisitionYear}
          />
          <TextField
            id="new-item-origin"
            hintText="Origin"
            fullWidth
            underlineFocusStyle={{ borderColor: "#FF6517" }}
            onChange={this.handleContentChange}
            value={origin}
          />
          <TextField
            id="new-item-manufacturer"
            hintText="Manufacturer"
            fullWidth
            underlineFocusStyle={{ borderColor: "#FF6517" }}
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
            labelStyle={{ color: "#ffffff", fontWeight: "bold" }}
            backgroundColor="#6D8EAD"
            onClick={(event) => handleSubmit(event, newItem)}
          />
        </form>
      </div>
    )
  }
};
