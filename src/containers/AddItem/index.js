import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ConfigButton from '../../containers/ConfigButton';


// TODO: Refactor

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

  handleSubmit = (event) => {
    event.preventDefault();    
  }

  handleContentChange = (event, content) => {
    let {
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
    } = this.state.newItem;
    const { id } = event.target;

    if (id === "new-item-name") name = content;
    if (id === "new-item-description") description = content;
    if (id === "new-item-productionYear") productionYear = content;
    if (id === "new-item-acquisitionYear") acquisitionYear = content;
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
      }
    });
  }

  render() {
    const {
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer
    } = this.state.newItem;

    return (
      <ConfigButton label="Add item">
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
            onChange={(event, value) => this.setState({ conditionValue: value })}
            value={this.state.conditionValue}
            hintText="Condition"
          >
            <MenuItem value={0} primaryText={"Mint"} />
            <MenuItem value={1} primaryText={"Good"} />
            <MenuItem value={2} primaryText={"Fair"} />
            <MenuItem value={3} primaryText={"Poor"} />
          </SelectField>
          <RaisedButton type="submit" label="Create" fullWidth />
        </form>
      </ConfigButton>
    )
  }
}

export default AddItem;
