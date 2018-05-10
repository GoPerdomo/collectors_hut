import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CollectionForm from '../../../components/Forms/CollectionForm';

import { editCollection } from '../../../store/actions';
import { maxCollectionNameLength, maxDescriptionLength, collectionFormSpeed } from '../../../helpers/constants';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => isOpen ? "370px" : "0"};
  transition: height ${collectionFormSpeed}ms;
  overflow: hidden;
`

// ============== Component ==============
class EditCollection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      success: false,
    }
  }

  handleSubmit = (event, collectionInfo) => {
    const { userId, collection, editCollection } = this.props;
    const { name, info } = collectionInfo;
    const isValidName = !!(name && name.length <= maxCollectionNameLength);
    const isValidInfo = info.length <= maxDescriptionLength;

    event.preventDefault();

    if (isValidName && isValidInfo) {
      editCollection(userId, collection._id, collectionInfo);
      this.setState({ success: true });
    }
  }

  render() {
    const { success } = this.state;
    const { isOpen, closeForm } = this.props;

    return (
      <Wrapper isOpen={isOpen}>
        <h2>Edit collection</h2>
        <CollectionForm
          collection={this.props.collection}
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
  editCollection: (userId, collectionId, collection) => dispatch(editCollection(userId, collectionId, collection)),
});

export default connect(null, mapDispatchToProps)(EditCollection);
