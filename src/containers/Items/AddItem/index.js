import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';

import AddCircleButton from '../../../components/Buttons/AddCircleButton';
import AddItemForm from '../../../components/Forms/ItemForms/AddItemForm';

import { maxItemInfoLength, maxYearValue, maxDescriptionLength } from '../../../utils/constants';
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
    const { name, description, productionYear, acquisitionYear, origin, manufacturer } = newItem.newItemInfo;
    const { isFileTooBig } = newItem;
    const isValidName = !!(name && name.length <= maxItemInfoLength);
    const isValidDescription = description.length <= maxDescriptionLength;
    const isValidYears = productionYear <= maxYearValue && acquisitionYear <= maxYearValue;
    const isValidInfo = origin.length <= maxItemInfoLength && manufacturer.length <= maxItemInfoLength;

    event.preventDefault();

    if (isValidName && isValidDescription && isValidYears && isValidInfo && !isFileTooBig) {
      addItem(userId, collectionId, newItem);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <AddCircleButton handleButtonClick={this.handleButtonClick} />

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
