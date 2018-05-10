import React, { Component } from 'react';
import styled from 'styled-components';

import NameInput from '../../Inputs/NameInput';
import DescriptionInput from '../../Inputs/DescriptionInput';
import YearInput from '../../Inputs/YearInput';
import MiscInput from '../../Inputs/MiscInput';
import SelectInput from '../../Inputs/SelectInput';
import FileInput from '../../Inputs/FileInput';
import SubmitButton from '../../Buttons/SubmitButton';

import { maxFileSize, maxItemInfoLength, maxDescriptionLength, itemFormSpeed } from '../../../helpers/constants';
import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const ConditionFileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

  @media (max-width: ${bp.breakEight}) {
    flex-direction: column;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

// ========= Material-UI Styles =========
const styles = {
  base: {
    width: "45%",
  },
  backgroundColor: "#FF6517",
};

// ============== Component ==============
export default class ItemForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      itemInfo: this.getFormData(),
      itemPhoto: {},
      isFileTooBig: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { success } = this.props;
    if (success) this.clearForm()
  }

  getFormData = () => {
    const { item } = this.props;
    return {
      name: item ? item.name : "",
      description: item ? item.description : "",
      productionYear: item ? item.productionYear : "",
      acquisitionYear: item ? item.acquisitionYear : "",
      origin: item ? item.origin : "",
      manufacturer: item ? item.manufacturer : "",
      condition: item ? item.condition : "",
    }
  }

  handleContentChange = (event, content) => {
    let { itemInfo, itemPhoto, isFileTooBig } = this.state;
    let { name, description, productionYear, acquisitionYear, origin, manufacturer, condition } = itemInfo;
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

  clearForm = () => {
    const { closeForm, resetSuccess } = this.props;

    closeForm();
    resetSuccess();
    setTimeout(() => this.setState({
      itemInfo: this.getFormData(),
      itemPhoto: {},
      isFileTooBig: false,
    }), itemFormSpeed);
  }

  render() {
    const { handleSubmit } = this.props
    const { itemInfo, isFileTooBig } = this.state;
    const { name, description, productionYear, acquisitionYear, origin, manufacturer, condition } = itemInfo;

    return (
      <form onSubmit={(event) => handleSubmit(event, this.state)}>
        <NameInput
          id="item-name"
          hintText="Name"
          required
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
        <ConditionFileWrapper>
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
        </ConditionFileWrapper>
        <ButtonsWrapper>
          <SubmitButton type="button" label="Cancel" halfWidth onClick={this.clearForm} />
          <SubmitButton backgroundColor={styles.backgroundColor} halfWidth />
        </ButtonsWrapper>
      </form>
    )
  }
};
