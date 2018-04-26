import React, { Component } from 'react';

import NameInput from '../../../Inputs/NameInput';
import DescriptionInput from '../../../Inputs/DescriptionInput';
import YearInput from '../../../Inputs/YearInput';
import MiscInput from '../../../Inputs/MiscInput';
import SelectInput from '../../../Inputs/SelectInput';
import FileInput from '../../../Inputs/FileInput';
import SubmitButton from '../../../Buttons/SubmitButton';

import { maxFileSize, maxItemInfoLength, maxDescriptionLength } from '../../../../utils/constants';

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
    } = this.state.itemInfo;
    let { itemPhoto, isFileTooBig } = this.state;
    const { id } = event.currentTarget;
    const file = event.target.files && event.target.files[0];


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
        if (file && file.size < maxFileSize) {
          itemPhoto = file;
          isFileTooBig = false;
        } else {
          itemPhoto = {};
          isFileTooBig = true;
        }
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
      isFileTooBig,
    });
  }

  render() {
    const { handleSubmit } = this.props
    const { itemInfo, isFileTooBig } = this.state;
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
        <NameInput
          id="edit-item-name"
          hintText="Name"
          maxLength={maxItemInfoLength}
          value={name}
          onChange={this.handleContentChange}
        />
        <DescriptionInput
          id="edit-item-description"
          maxLength={maxDescriptionLength}
          value={description}
          onChange={this.handleContentChange}
        />
        <YearInput
          id="edit-item-productionYear"
          hintText="Production Year"
          value={productionYear}
          onChange={this.handleContentChange}
        />
        <YearInput
          id="edit-item-acquisitionYear"
          hintText="Acquisition Year"
          value={acquisitionYear}
          onChange={this.handleContentChange}
        />
        <MiscInput
          id="edit-item-origin"
          hintText="Origin"
          maxLength={maxItemInfoLength}
          value={origin}
          onChange={this.handleContentChange}
        />
        <MiscInput
          id="edit-item-manufacturer"
          hintText="Manufacturer"
          maxLength={maxItemInfoLength}
          value={manufacturer}
          onChange={this.handleContentChange}
        />
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <SelectInput
            id="edit-item-condition"
            value={condition}
            style={{ width: "45%" }}
            menuItems={["Mint", "Good", "Fair", "Poor"]}
            onChange={(event, index, value) => this.setState({ itemInfo: { ...itemInfo, condition: value } })}
          />
          <FileInput
            id="edit-item-photo"
            errorText={isFileTooBig ? `Image exceeds the size limit of ${maxFileSize / 1000000} Mb` : null}
            onChange={this.handleContentChange}
          />
        </div>
        <SubmitButton />
      </form>
    )
  }
};
