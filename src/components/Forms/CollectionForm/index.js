import React, { Component } from 'react';

import NameInput from '../../Inputs/NameInput';
import DescriptionInput from '../../Inputs/DescriptionInput';
import SubmitButton from '../../Buttons/SubmitButton';

import { maxCollectionNameLength, maxDescriptionLength } from '../../../utils/constants';

export default class CollectionForm extends Component {

  constructor(props) {
    super(props);
    const { collection } = props;
    const name = collection ? collection.name : "";
    const info = collection ? collection.info : "";

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

  render() {
    const { collectionInfo } = this.state;
    const { name, info } = collectionInfo;
    const { handleSubmit } = this.props

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
        <SubmitButton />
      </form>
    )
  }
};
