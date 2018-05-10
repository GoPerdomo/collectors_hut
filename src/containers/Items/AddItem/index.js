import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ItemForm from '../../../components/Forms/ItemForm';

import { maxItemInfoLength, maxYearValue, maxDescriptionLength, itemFormSpeed } from '../../../helpers/constants';
import { addItem } from '../../../store/actions';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => isOpen ? "620px" : "0"};
  transition: height ${itemFormSpeed}ms;
  overflow: hidden;
`

// ============== Component ==============
class AddItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      success: false,
    }
  }

  handleSubmit = (event, newItem) => {
    const { userId, collectionId, addItem } = this.props;
    const { name, description, productionYear, acquisitionYear, origin, manufacturer } = newItem.itemInfo;
    const { isFileTooBig } = newItem;
    const isValidName = !!(name && name.length <= maxItemInfoLength);
    const isValidDescription = description.length <= maxDescriptionLength;
    const isValidYears = productionYear <= maxYearValue && acquisitionYear <= maxYearValue;
    const isValidInfo = origin.length <= maxItemInfoLength && manufacturer.length <= maxItemInfoLength;

    event.preventDefault();

    if (isValidName && isValidDescription && isValidYears && isValidInfo && !isFileTooBig) {
      addItem(userId, collectionId, newItem);
      this.setState({ success: true });
    }
  }

  render() {
    const { success } = this.state;
    const { isOpen, closeForm } = this.props;

    return (
      <Wrapper isOpen={isOpen}>
        <h2>Add new item</h2>
        <ItemForm
          closeForm={closeForm}
          success={success}
          handleSubmit={this.handleSubmit}
          resetSuccess={() => this.setState({ success: false })}
        />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (userId, collectionId, newItem) => dispatch(addItem(userId, collectionId, newItem))
});

export default connect(null, mapDispatchToProps)(AddItem);
