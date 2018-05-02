import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog/Dialog';

import StandardButton from '../../../components/Buttons/StandardButton';
import EditCollectionForm from '../../../components/Forms/CollectionForms/EditCollectionForm';

import { maxCollectionNameLength, maxDescriptionLength } from '../../../utils/constants';
import { editCollection } from '../../../store/actions';

// ========== Styles ==========
const buttonStyles = {
  labelStyle: {
    color: "#6D8EAD",
  },
  backgroundColor: "#ffffff",
};


// ========== Component ==========
class EditCollection extends Component {

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
    const { userId, collection, editCollection } = this.props;
    const { name, info } = collectionInfo;
    const isValidName = !!(name && name.length <= maxCollectionNameLength);
    const isValidInfo = info.length <= maxDescriptionLength;

    event.preventDefault();

    if (isValidName && isValidInfo) {
      editCollection(userId, collection._id, collectionInfo);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <StandardButton
          label="Edit Collection"
          labelStyle={buttonStyles.labelStyle}
          backgroundColor={buttonStyles.backgroundColor}
          handleClick={this.handleButtonClick}
        />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <EditCollectionForm
            collection={this.props.collection}
            handleSubmit={this.handleSubmit}
          />
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editCollection: (userId, collectionId, collection) => dispatch(editCollection(userId, collectionId, collection)),
});

export default connect(null, mapDispatchToProps)(EditCollection);
