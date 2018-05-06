import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import StandardButton from '../../../components/Buttons/StandardButton';
import CollectionForm from '../../../components/Forms/CollectionForm';
import StyledDialog from '../../../components/Dialogs/StyledDialog';

import { editCollection } from '../../../store/actions';
import { maxCollectionNameLength, maxDescriptionLength } from '../../../helpers/constants';
import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledStandardButton = styled(StandardButton) `
  & button {
    @media (max-width: ${bp.breakOne}) {
      line-height: 17px !important;
    }
    @media (max-width: ${bp.breakEight}) {
      line-height: 36px !important;
    }
 }
`

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
        <StyledStandardButton
          label="Edit Collection"
          labelStyle={styles.labelStyle}
          backgroundColor={styles.backgroundColor}
          handleClick={this.handleButtonClick}
        />

        <StyledDialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <CollectionForm
            collection={this.props.collection}
            handleSubmit={this.handleSubmit}
          />
        </StyledDialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editCollection: (userId, collectionId, collection) => dispatch(editCollection(userId, collectionId, collection)),
});

export default connect(null, mapDispatchToProps)(EditCollection);
