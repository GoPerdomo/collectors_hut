import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import AddCircleButton from '../../../components/Buttons/IconButtons/AddCircleButton';
import ItemForm from '../../../components/Forms/ItemForm';
import StyledDialog from '../../../components/Dialogs/StyledDialog';

import { maxItemInfoLength, maxYearValue, maxDescriptionLength } from '../../../helpers/constants';
import { addItem } from '../../../store/actions';
import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  @media (max-width: ${bp.breakFour}) {
    position: absolute;
    bottom: 20px;
    right: 15px;
  }
  @media (max-width: ${bp.breakEight}) {
    position: static;
  }
`

// ============== Component ==============
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
    const { name, description, productionYear, acquisitionYear, origin, manufacturer } = newItem.itemInfo;
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
      <Wrapper>
        <AddCircleButton handleButtonClick={this.handleButtonClick} />

        <StyledDialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <ItemForm handleSubmit={this.handleSubmit} />
        </StyledDialog>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (userId, collectionId, newItem) => dispatch(addItem(userId, collectionId, newItem))
});

export default connect(null, mapDispatchToProps)(AddItem);
