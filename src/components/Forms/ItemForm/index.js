import React, { Component } from 'react';
import styled from 'styled-components';

import NameInput from '../../Inputs/NameInput';
import DescriptionInput from '../../Inputs/DescriptionInput';
import YearInput from '../../Inputs/YearInput';
import MiscInput from '../../Inputs/MiscInput';
import SelectInput from '../../Inputs/SelectInput';
import FileInput from '../../Inputs/FileInput';
import SubmitButton from '../../Buttons/SubmitButton';

import { maxFileSize, maxItemInfoLength, maxDescriptionLength } from '../../../utils/constants';
import bp from '../../../utils/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${bp.minWidth}) {
    flex-direction: column;
  }
`

// ========= Material-UI Styles =========
const styles = {
  base: {
    width: "45%",
  },
};

// ============== Component ==============
export default class ItemForm extends Component {

  constructor(props) {
    super(props);
    const { item } = props;
    const name = item ? item.name : "";
    const description = item ? item.description : "";
    const productionYear = item ? item.productionYear : "";
    const acquisitionYear = item ? item.acquisitionYear : "";
    const origin = item ? item.origin : "";
    const manufacturer = item ? item.manufacturer : "";
    const condition = item ? item.condition : "";

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
      case ("item-name"):
        name = content;
        break;
      case ("item-description"):
        description = content;
        break;
      case ("item-productionYear"):
        if (!isNaN(content)) productionYear = content;
        break;
      case ("item-acquisitionYear"):
        if (!isNaN(content)) acquisitionYear = content;
        break;
      case ("item-origin"):
        origin = content;
        break;
      case ("item-manufacturer"):
        manufacturer = content;
        break;
      case ("item-photo"):
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
          id="item-name"
          hintText="Name"
          maxLength={maxItemInfoLength}
          value={name}
          onChange={this.handleContentChange}
        />
        <DescriptionInput
          id="item-description"
          maxLength={maxDescriptionLength}
          value={description}
          onChange={this.handleContentChange}
        />
        <YearInput
          id="item-productionYear"
          hintText="Production Year"
          value={productionYear}
          onChange={this.handleContentChange}
        />
        <YearInput
          id="item-acquisitionYear"
          hintText="Acquisition Year"
          value={acquisitionYear}
          onChange={this.handleContentChange}
        />
        <MiscInput
          id="item-origin"
          hintText="Origin"
          maxLength={maxItemInfoLength}
          value={origin}
          onChange={this.handleContentChange}
        />
        <MiscInput
          id="item-manufacturer"
          hintText="Manufacturer"
          maxLength={maxItemInfoLength}
          value={manufacturer}
          onChange={this.handleContentChange}
        />
        <Wrapper>
          <SelectInput
            id="item-condition"
            style={styles.base}
            value={condition}
            menuItems={["Mint", "Good", "Fair", "Poor"]}
            onChange={(event, index, value) => this.setState({ itemInfo: { ...itemInfo, condition: value } })}
          />
          <FileInput
            id="item-photo"
            errorText={isFileTooBig ? `Image exceeds the size limit of ${maxFileSize / 1000000} Mb` : null}
            onChange={this.handleContentChange}
          />
        </Wrapper>
        <SubmitButton />
      </form>
    )
  }
};
