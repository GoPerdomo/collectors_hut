import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ItemForm from '../../../components/Forms/ItemForm';

import { maxItemInfoLength, maxYearValue, maxDescriptionLength, itemFormSpeed } from '../../../helpers/constants';
import { editItem } from '../../../store/actions';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => isOpen ? "620px" : "0"};
  transition: height ${itemFormSpeed}ms;
  overflow: hidden;
`

// ============== Component ==============
class EditItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      success: false,
    }
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
      this.setState({ success: true });
    }
  }

  render() {
    const { success } = this.state;
    const { item, isOpen, closeForm } = this.props;

    return (
      <Wrapper isOpen={isOpen}>
        <h2>Edit item</h2>
        <ItemForm
          closeForm={closeForm}
          success={success}
          item={item}
          handleSubmit={this.handleSubmit}
          resetSuccess={() => this.setState({ success: false })}
        />
      </Wrapper >
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editItem: (userId, collectionId, itemId, item) => dispatch(editItem(userId, collectionId, itemId, item))
});

export default connect(null, mapDispatchToProps)(EditItem);
