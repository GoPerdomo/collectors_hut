import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';

import AddItemButton from '../../../components/Buttons/ItemButtons/AddItemButton';
import AddItemForm from '../../../components/Forms/ItemForms/AddItemForm';

import { addItem } from '../../../store/actions';

class AddItem extends Component {

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

  handleSubmit = (event, newItem) => {
    const { userId, collectionId, addItem } = this.props;
    const { name } = newItem.newItemInfo;
    const { isFileTooBig } = newItem;

    event.preventDefault();

    if (name && !isFileTooBig) {
      addItem(userId, collectionId, newItem);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <AddItemButton handleButtonClick={this.handleButtonClick} />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <AddItemForm handleSubmit={this.handleSubmit} />
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (userId, collectionId, newItem) =>
    dispatch(addItem(userId, collectionId, newItem))
});

export default connect(null, mapDispatchToProps)(AddItem);
