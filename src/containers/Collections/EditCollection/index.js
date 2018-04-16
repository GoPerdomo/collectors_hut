import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog/Dialog';

import EditCollectionButton from '../../../components/Buttons/CollectionButtons/EditCollectionButton';
import EditCollectionForm from '../../../components/Forms/CollectionForms/EditCollectionForm';

import { editCollection } from '../../../store/actions';


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
    const { name } = collectionInfo;

    event.preventDefault();

    if (name) {
      editCollection(userId, collection._id, collectionInfo);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <EditCollectionButton handleButtonClick={this.handleButtonClick} />

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
