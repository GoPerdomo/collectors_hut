import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddIconButton from '../../../components/Buttons/IconButtons/AddIconButton';
import CollectionForm from '../../../components/Forms/CollectionForm';
import StyledDialog from '../../../components/Dialogs/StyledDialog';

import { maxCollectionNameLength, maxDescriptionLength } from '../../../helpers/constants';
import { addCollection } from '../../../store/actions';

class AddCollection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleButtonClick = (event) => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  handleSubmit = (event, collectionInfo) => {
    const { userId, addCollection } = this.props;
    const { name, info } = collectionInfo;
    const isValidName = !!(name && name.length <= maxCollectionNameLength);
    const isValidInfo = info.length <= maxDescriptionLength;

    event.preventDefault();

    if (isValidName && isValidInfo) {
      addCollection(userId, collectionInfo);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <AddIconButton handleClick={this.handleButtonClick} />

        <StyledDialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <CollectionForm handleSubmit={this.handleSubmit} />
        </StyledDialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCollection: (userId, collectionInfo) => dispatch(addCollection(userId, collectionInfo))
});

export default connect(null, mapDispatchToProps)(AddCollection);
