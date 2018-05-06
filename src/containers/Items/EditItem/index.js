import React, { Component } from 'react';
import { connect } from 'react-redux';

import StandardButton from '../../../components/Buttons/StandardButton';
import ItemForm from '../../../components/Forms/ItemForm';
import StyledDialog from '../../../components/Dialogs/StyledDialog';

import { maxItemInfoLength, maxYearValue, maxDescriptionLength } from '../../../helpers/constants';
import { editItem } from '../../../store/actions';

// ========= Material-UI Styles =========
const styles = {
  labelStyle: {
    display: "flex",
    padding: "2px 8px",
    color: "#6D8EAD",
  },
  backgroundColor: "#ffffff",
};


// ============== Component ==============
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
        <StandardButton
          label="Edit Item"
          labelStyle={styles.labelStyle}
          backgroundColor={styles.backgroundColor}
          handleClick={this.handleButtonClick}
        />

        <StyledDialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <ItemForm
            item={this.props.item}
            handleSubmit={this.handleSubmit}
          />
        </StyledDialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editItem: (userId, collectionId, itemId, item) => dispatch(editItem(userId, collectionId, itemId, item))
});

export default connect(null, mapDispatchToProps)(EditItem);
