import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import CollectionForm from '../../../components/Forms/CollectionForm';

import { maxCollectionNameLength, maxDescriptionLength, collectionFormSpeed } from '../../../helpers/constants';
import { addCollection } from '../../../store/actions';

// ========== Styled Components ==========
const StyledPaper = styled(Paper) `
  width: 86%;
  height: ${({ isOpen }) => isOpen ? "370px" : "0"};
  margin: auto;
  margin-bottom: ${({ isOpen }) => isOpen ? "50px" : "0"};
  transition: height ${collectionFormSpeed}ms, margin-bottom .1s !important;
  overflow: hidden;
`

const Wrapper = styled.div`
  padding: 1em;
`

// ============== Component ==============
class AddCollection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      success: false,
    }
  }

  handleSubmit = (event, collectionInfo) => {
    const { userId, addCollection } = this.props;
    const { name, info } = collectionInfo;
    const isValidName = !!(name && name.length <= maxCollectionNameLength);
    const isValidInfo = info.length <= maxDescriptionLength;

    event.preventDefault();

    if (isValidName && isValidInfo) {
      addCollection(userId, collectionInfo);
      this.setState({ success: true });
    }
  }

  render() {
    const { success } = this.state;
    const { isOpen, closeForm } = this.props;

    return (
      <StyledPaper zDepth={4} isOpen={isOpen}>
        <Wrapper>
          <h2>Add new collection</h2>
          <CollectionForm
            closeForm={closeForm}
            success={success}
            handleSubmit={this.handleSubmit}
            resetSuccess={() => this.setState({ success: false })}
          />
        </Wrapper>
      </StyledPaper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCollection: (userId, collectionInfo) => dispatch(addCollection(userId, collectionInfo))
});

export default connect(null, mapDispatchToProps)(AddCollection);
