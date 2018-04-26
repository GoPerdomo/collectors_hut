import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';

import EditItemButton from '../../../components/Buttons/ItemButtons/EditItemButton';
import EditItemForm from '../../../components/Forms/ItemForms/EditItemForm';

import { maxItemInfoLength, maxYearValue, maxDescriptionLength } from '../../../utils/constants';
import { editItem } from '../../../store/actions';

class EditItem extends Component {

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

  handleSubmit = (event, editedItem) => {
    const { userId, item, editItem } = this.props;
    const { name, description, productionYear, acquisitionYear, origin, manufacturer } = editedItem.itemInfo;
    const { isFileTooBig } = editedItem;
    const isValidName = !!(name && name.length <= maxItemInfoLength);
    const isValidDescription = description.length <= maxDescriptionLength;
    const isValidYears = productionYear <= maxYearValue && acquisitionYear <= maxYearValue;
    const isValidInfo = origin.length <= maxItemInfoLength && manufacturer.length <= maxItemInfoLength;    

    event.preventDefault();

    if (isValidName && isValidDescription && isValidYears && isValidInfo && !isFileTooBig) {

      editItem(userId, item.collectionId, item._id, editedItem);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <EditItemButton handleButtonClick={this.handleButtonClick} />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <EditItemForm
            item={this.props.item}
            handleSubmit={this.handleSubmit}
          />
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editItem: (userId, collectionId, itemId, item) => dispatch(editItem(userId, collectionId, itemId, item))
});

export default connect(null, mapDispatchToProps)(EditItem);
