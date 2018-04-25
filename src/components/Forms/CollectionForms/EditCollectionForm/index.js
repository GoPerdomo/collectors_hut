import React, { Component } from 'react';

import NameInput from '../../../Inputs/NameInput';
import DescriptionInput from '../../../Inputs/DescriptionInput';
import SubmitButton from '../../../Buttons/SubmitButton';

export default class EditCollectionForm extends Component {

  constructor(props) {
    super(props);
    const { name, info } = props.collection;

    this.state = {
      collectionInfo: {
        name,
        info,
      }
    };
  }

  handleContentChange = (event, content) => {
    let { name, info } = this.state.collectionInfo;
    const { id } = event.currentTarget;

    switch (id) {
      case ("edit-collection-name"):
        name = content;
        break;
      case ("edit-collection-info"):
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

  render() {
    const { collectionInfo } = this.state;
    const { name, info } = collectionInfo;
    const { handleSubmit } = this.props

    return (
      <form onSubmit={(event) => handleSubmit(event, collectionInfo)}>
        <NameInput
          id="edit-collection-name"
          value={name}
          onChange={this.handleContentChange}
        />
        <DescriptionInput
          id="edit-collection-info"
          value={info}
          onChange={this.handleContentChange}
        />
        <SubmitButton />
      </form>
    )
  }
};
