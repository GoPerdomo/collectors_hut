import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import CollectionName from '../../components/Collections/CollectionName';
import Display from '../../components/Layout/Display';
import ItemInfo from '../../components/Items/ItemInfo';
import Loading from '../../components/Loading';
import ConfigButtons from '../../components/Buttons/ConfigButtons';
import DeleteItem from '../../containers/Items/DeleteItem';
import EditItem from '../../containers/Items/EditItem'
import EditItemButton from '../../components/Buttons/EditItemButton';

import { getProfile } from '../../store/actions';
import getWindowScroll from '../../helpers/getWindowScroll';
import bp from '../../helpers/breakpoints';


// ========== Styled Components ==========
const ItemWrapper = styled.main`
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

// ============== Component ==============
class Item extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditItemOpen: false,
    };
  }

  componentDidMount() {
    const { loggedUser, currentItem, match, getProfile } = this.props;
    const { userId } = match.params;

    getWindowScroll(loggedUser, userId);
    
    if (!currentItem) {
      getProfile(userId);
    }
  }

  clickEditItem = () => {
    const { isEditItemOpen } = this.state;
    this.setState({ isEditItemOpen: !isEditItemOpen });
  };

  render() {
    const { props, state, clickEditItem } = this;
    const { loggedUser, user, userId, currentCollection, currentItem } = props;
    const { isEditItemOpen } = state;

    if (!user) {
      return (
        <ItemWrapper>
          <Loading />
        </ItemWrapper>
      )
    }

    return (
      <ItemWrapper>
        <ProfileHeader>
          <ConfigButtons loggedUser={loggedUser} userId={userId} >
            <DeleteItem />
            <EditItemButton handleClick={clickEditItem} />
          </ConfigButtons>
        </ProfileHeader>

        <Display>
          <CollectionName userId={userId} collection={currentCollection} />
          <EditItem userId={userId} item={currentItem} isOpen={isEditItemOpen} closeForm={clickEditItem} />
          <ItemInfo {...props} />
        </Display>
      </ItemWrapper>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { loggedUser } = state;
  const { userId, collectionId, itemId } = props.match.params;
  let currentCollection;
  let currentItem;

  if (state[userId] && state[userId].collections) {
    currentCollection = state[userId].collections.find(collection => collection._id === collectionId);

    if (currentCollection.items) {
      currentItem = currentCollection.items.find(item => item._id === itemId);
    }
  }

  return (
    {
      loggedUser,
      userId,
      itemId,
      user: state[userId],
      currentCollection,
      currentItem
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: (userId) => dispatch(getProfile(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
