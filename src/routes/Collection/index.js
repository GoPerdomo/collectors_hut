import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import Display from '../../components/Layout/Display';
import ConfigButtons from '../../components/Buttons/ConfigButtons';
import DeleteCollection from '../../containers/Collections/DeleteCollection';
import EditCollectionButton from '../../components/Buttons/EditCollectionButton';
import EditCollection from '../../containers/Collections/EditCollection';
import AddIconButton from '../../components/Buttons/IconButtons/AddIconButton';
import AddItem from '../../containers/Items/AddItem';
import CollectionName from '../../components/Collections/CollectionName';
import CollectionInfo from '../../components/Collections/CollectionInfo';
import Loading from '../../components/Loading';

import { getProfile } from '../../store/actions';
import { collectionFormSpeed, itemFormSpeed } from '../../helpers/constants';
import getWindowScroll from '../../helpers/getWindowScroll';
import bp from '../../helpers/breakpoints';


// ========== Styled Components ==========
const CollectionWrapper = styled.main`
  width: 80%;
  max-width: ${bp.maxWidth};
  margin: 0 auto auto;
  text-align: center;

  @media (max-width: ${bp.breakTwo}) {
    width: 90%;
  }
  @media (max-width: ${bp.breakFive}) {
    width: 92%;
  }
  @media (max-width: ${bp.breakNine}) {
    width: 100%;
  }
`

const AddButtonWrapper = styled.div`
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
class Collection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditCollectionOpen: false,
      isAddItemOpen: false,
    };
  }

  componentDidMount() {
    const { loggedUser, currentCollection, match, getProfile } = this.props;
    const { userId } = match.params;

    getWindowScroll(loggedUser, userId);

    if (!currentCollection) {
      getProfile(userId);
    }
  }

  clickEditCollection = () => {
    const { isEditCollectionOpen, isAddItemOpen } = this.state;

    if (!isAddItemOpen) {
      this.setState({ isEditCollectionOpen: !isEditCollectionOpen });
    } else {
      this.setState({ isAddItemOpen: false });

      // Awaits for the previous window to close before opening
      setTimeout(() => {
        this.setState({ isEditCollectionOpen: !isEditCollectionOpen })
      }, itemFormSpeed);
    }
  }

  clickAddItem = () => {
    const { isEditCollectionOpen, isAddItemOpen } = this.state;

    if (!isEditCollectionOpen) {
      this.setState({ isAddItemOpen: !isAddItemOpen });
    } else {
      this.setState({ isEditCollectionOpen: false });

      // Awaits for the previous window to close before opening
      setTimeout(() => {
        this.setState({ isAddItemOpen: !isAddItemOpen })
      }, collectionFormSpeed);
    }
  }

  render() {
    const { props, clickEditCollection, clickAddItem } = this;
    const { loggedUser, user, userId, currentCollection, collectionId } = this.props;
    const { isEditCollectionOpen, isAddItemOpen } = this.state;

    if (!user) {
      return (
        <CollectionWrapper>
          <Loading />
        </CollectionWrapper>
      )
    }

    return (
      <CollectionWrapper>
        <ProfileHeader>
          <ConfigButtons loggedUser={loggedUser} userId={userId} >
            <DeleteCollection />
            <EditCollectionButton handleClick={clickEditCollection} />
            <AddButtonWrapper>
              <AddIconButton handleClick={clickAddItem} />
            </AddButtonWrapper>
          </ConfigButtons>
        </ProfileHeader>

        <Display>
          <CollectionName userId={userId} collection={currentCollection} />
          <EditCollection userId={userId} collection={currentCollection} isOpen={isEditCollectionOpen} closeForm={clickEditCollection} />
          <AddItem userId={userId} collectionId={collectionId} isOpen={isAddItemOpen} closeForm={clickAddItem} />
          <CollectionInfo {...props} />
        </Display>
      </CollectionWrapper>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { loggedUser } = state;
  const { userId, collectionId } = props.match.params;
  let currentCollection;

  if (state[userId]) {
    currentCollection = state[userId].collections.find(collection => (
      collection._id === collectionId)
    );

  }

  return (
    {
      loggedUser,
      userId,
      user: state[userId],
      collectionId,
      currentCollection
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Collection);
