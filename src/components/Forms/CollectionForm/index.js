import React, { Component } from 'react';
import styled from 'styled-components';

import NameInput from '../../Inputs/NameInput';
import DescriptionInput from '../../Inputs/DescriptionInput';
import SubmitButton from '../../Buttons/SubmitButton';

import { maxCollectionNameLength, maxDescriptionLength, collectionFormSpeed } from '../../../helpers/constants';


// ========== Styled Components ==========
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

// ========= Material-UI Styles =========
const styles = {
  backgroundColor: "#FF6517",
};

// ============== Component ==============
export default class CollectionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collectionInfo: this.getFormData(),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { success } = this.props;
    if (success) this.clearForm();

    if (prevProps.collection.name !== this.props.collection.name) this.setState({ collectionInfo: this.getFormData() });
  }

  getFormData = () => {
    const { collection } = this.props;
    return {
      name: collection ? collection.name : "",
      info: collection ? collection.info : "",
    }
  }

  handleContentChange = (event, content) => {
    let { name, info } = this.state.collectionInfo;
    const { id } = event.currentTarget;

    switch (id) {
      case ("collection-name"):
        name = content;
        break;
      case ("collection-info"):
        info = content;
        break;
      default:
        break;
    }

    this.setState({
      collectionInfo: {
        name,
        info,
      }
    });
  }

  clearForm = () => {
    const { closeForm, resetSuccess } = this.props;

    closeForm();
    resetSuccess();
    setTimeout(() => this.setState({
      collectionInfo: this.getFormData(),
    }), collectionFormSpeed);
  }

  render() {
    const { handleSubmit } = this.props
    const { collectionInfo } = this.state;
    const { name, info } = collectionInfo;

    return (
      <form onSubmit={(event) => handleSubmit(event, collectionInfo)}>
        <NameInput
          id="collection-name"
          maxLength={maxCollectionNameLength}
          value={name}
          onChange={this.handleContentChange}
        />
        <DescriptionInput
          id="collection-info"
          maxLength={maxDescriptionLength}
          value={info}
          onChange={this.handleContentChange}
        />
        <ButtonsWrapper>
          <SubmitButton type="button" label="Cancel" halfWidth onClick={this.clearForm} />
          <SubmitButton backgroundColor={styles.backgroundColor} halfWidth />
        </ButtonsWrapper>
      </form>
    )
  }
};
