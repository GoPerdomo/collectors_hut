import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DeleteIconButton from '../../../components/Buttons/IconButtons/DeleteIconButton';
import StyledDialog from '../../../components/Dialogs/StyledDialog';
import CancelButton from '../../../components/Buttons/AlertButtons/CancelButton';
import DeleteButton from '../../../components/Buttons/AlertButtons/DeleteButton';

import { deleteCollection } from '../../../store/actions';
import bp from '../../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  @media (max-width: ${bp.breakFour}) {
    position: relative;
    right: 35px;
  }
  @media (max-width: ${bp.breakEight}) {
    position: static;
  }
`

// ============== Component ==============
class DeleteCollection extends Component {

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

  handleDeleteButton = () => {
    const { userId, collectionId } = this.props.match.params;
    const { deleteCollection, history } = this.props;

    deleteCollection(userId, collectionId);
    history.push(`/users/${userId}`);
  }

  render() {
    
    return (
      <Wrapper>
        <DeleteIconButton handleClick={this.handleButtonClick} />
        <StyledDialog
          title="Are you sure you want to delete?"
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          actions={[
            <DeleteButton handleDeleteButton={this.handleDeleteButton} />,
            <CancelButton handleRequestClose={this.handleRequestClose} />,
          ]}
        />
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteCollection: (userId, collectionId) => {
    dispatch(deleteCollection(userId, collectionId))
  },
});

export default withRouter(connect(null, mapDispatchToProps)(DeleteCollection));
