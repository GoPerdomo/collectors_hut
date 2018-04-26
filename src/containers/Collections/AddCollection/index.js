import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';

import AddCollectionButton from '../../../components/Buttons/CollectionButtons/AddCollectionButton';
import AddCollectionForm from '../../../components/Forms/CollectionForms/AddCollectionForm';

import { maxCollectionNameLength, maxDescriptionLength } from '../../../utils/constants';
import { addCollection } from '../../../store/actions';

class AddCollection extends Component {

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

  handleSubmit = (event, newCollection) => {
    const { userId, addCollection } = this.props;
    const { name, info } = newCollection;
    const isValidName = !!(name && name.length <= maxCollectionNameLength);
    const isValidInfo = info.length <= maxDescriptionLength;

    event.preventDefault();

    if (isValidName && isValidInfo) {
      addCollection(userId, newCollection);
      this.handleRequestClose();
    }
  }

  render() {

    return (
      <div>
        <AddCollectionButton handleButtonClick={this.handleButtonClick} />

        <Dialog
          open={this.state.open}
          autoScrollBodyContent
          onRequestClose={this.handleRequestClose}
        >
          <AddCollectionForm handleSubmit={this.handleSubmit} />
        </Dialog>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCollection: (userId, newCollection) => dispatch(addCollection(userId, newCollection))
});

export default connect(null, mapDispatchToProps)(AddCollection);
