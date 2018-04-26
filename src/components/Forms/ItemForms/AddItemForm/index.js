import React, { Component } from 'react';

import NameInput from '../../../Inputs/NameInput';
import DescriptionInput from '../../../Inputs/DescriptionInput';
import YearInput from '../../../Inputs/YearInput';
import MiscInput from '../../../Inputs/MiscInput';
import SelectInput from '../../../Inputs/SelectInput';
import FileInput from '../../../Inputs/FileInput';
import SubmitButton from '../../../Buttons/SubmitButton';

import { maxFileSize, maxItemInfoLength, maxDescriptionLength } from '../../../../utils/constants';

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
      isFileTooBig: false,
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
    let { newItemPhoto, isFileTooBig } = this.state;
    const { id } = event.currentTarget;
    const file = event.target.files && event.target.files[0];

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
        if (file && file.size < maxFileSize) {
          newItemPhoto = file;
          isFileTooBig = false;
        } else {
          newItemPhoto = {};
          isFileTooBig = true;
        }
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
      isFileTooBig,
    });
  }

  render() {
    const { handleSubmit } = this.props;
    const { newItemInfo, isFileTooBig } = this.state;
    const {
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition,
    } = newItemInfo;

    return (
      <div>
        <form onSubmit={event => handleSubmit(event, this.state)}>
          <NameInput
            id="new-item-name"
            hintText="Name"
            maxLength={maxItemInfoLength}
            value={name}
            onChange={this.handleContentChange}
          />
          <DescriptionInput
            id="new-item-description"
            maxLength={maxDescriptionLength}
            value={description}
            onChange={this.handleContentChange}
          />
          <YearInput
            id="new-item-productionYear"
            hintText="Production Year"
            value={productionYear}
            onChange={this.handleContentChange}
          />
          <YearInput
            id="new-item-acquisitionYear"
            hintText="Acquisition Year"
            value={acquisitionYear}
            onChange={this.handleContentChange}
          />
          <MiscInput
            id="new-item-origin"
            hintText="Origin"
            maxLength={maxItemInfoLength}
            value={origin}
            onChange={this.handleContentChange}
          />
          <MiscInput
            id="new-item-manufacturer"
            hintText="Manufacturer"
            maxLength={maxItemInfoLength}
            value={manufacturer}
            onChange={this.handleContentChange}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <SelectInput
              id="new-item-condition"
              value={condition}
              style={{ width: "45%" }}
              menuItems={["Mint", "Good", "Fair", "Poor"]}
              onChange={(event, index, value) => this.setState({ newItemInfo: { ...newItemInfo, condition: value } })}
            />
            <FileInput
              id="new-item-photo"
              errorText={isFileTooBig ? `Image exceeds the size limit of ${maxFileSize / 1000000} Mb` : null}
              onChange={this.handleContentChange}
            />
          </div>
          <SubmitButton label="Create" />
        </form>
      </div>
    )
  }
};
