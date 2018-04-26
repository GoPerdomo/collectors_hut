import React, { Component } from 'react';

import NameInput from '../../../Inputs/NameInput';
import DescriptionInput from '../../../Inputs/DescriptionInput';
import SubmitButton from '../../../Buttons/SubmitButton';

import { maxCollectionNameLength, maxDescriptionLength } from '../../../../utils/constants';

export default class AddCollectionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newCollection: {
        name: "",
        info: "",
      }
    };
  }

  handleContentChange = (event, content) => {
    let { name, info } = this.state.newCollection;
    const { id } = event.currentTarget;

    switch (id) {
      case ("new-collection-name"):
        name = content;
        break;
      case ("new-collection-info"):
        info = content;
        break;
      default:
        break;
    }

    this.setState({
      newCollection: {
        name,
        info,
      }
    });
  }

  render() {
    const { newCollection } = this.state;
    const { name, info } = newCollection;
    const { handleSubmit } = this.props

    return (
      <form onSubmit={(event) => handleSubmit(event, newCollection)}>
        <NameInput
          id="new-collection-name"
          maxLength={maxCollectionNameLength}
          value={name}
          onChange={this.handleContentChange}
        />
        <DescriptionInput
          id="new-collection-info"
          maxLength={maxDescriptionLength}
          value={info}
          onChange={this.handleContentChange}
        />
        <SubmitButton label="Create" />
      </form>
    )
  }
};
