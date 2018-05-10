import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import ProfileCollections from '../../components/Profile/ProfileCollections';
import Loading from '../../components/Loading';
import ConfigButtons from '../../components/Buttons/ConfigButtons';
import EditProfileButton from '../../components/Buttons/EditProfileButton';
import AddIconButton from '../../components/Buttons/IconButtons/AddIconButton';
import AddCollection from '../../containers/Collections/AddCollection';

import { getProfile } from '../../store/actions';
import { collectionFormSpeed, profileFormSpeed } from '../../helpers/constants';
import bp from '../../helpers/breakpoints';


// ========== Styled Components ==========
const ProfileWrapper = styled.main`
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
class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditProfileOpen: false,
      isAddCollectionOpen: false,
    };
  }

  componentDidMount() {
    const { userId, user, getProfile } = this.props;

    window.scrollTo(0, 0);
    if (!user) {
      getProfile(userId);
    }
  }

  clickEditProfile = () => {
    const { isEditProfileOpen, isAddCollectionOpen } = this.state;

    if (!isAddCollectionOpen) {
      this.setState({ isEditProfileOpen: !isEditProfileOpen });
    } else {
      this.setState({ isAddCollectionOpen: false });

      // Awaits for the previous window to close before opening
      setTimeout(() => {
        this.setState({ isEditProfileOpen: !isEditProfileOpen })
      }, profileFormSpeed);
    }
  }

  clickAddCollection = () => {
    const { isEditProfileOpen, isAddCollectionOpen } = this.state;

    if (!isEditProfileOpen) {
      this.setState({ isAddCollectionOpen: !isAddCollectionOpen });
    } else {
      this.setState({ isEditProfileOpen: false });

      // Awaits for the previous window to close before opening
      setTimeout(() => {
        this.setState({ isAddCollectionOpen: !isAddCollectionOpen })
      }, collectionFormSpeed);
    }
  }

  render() {
    const { props, state, clickEditProfile, clickAddCollection } = this;
    const { loggedUser, user, userId } = props;
    const { isEditProfileOpen, isAddCollectionOpen } = state;

    if (!user) {
      return (
        <ProfileWrapper>
          <Loading />
        </ProfileWrapper>
      )
    }

    return (
      <ProfileWrapper>
        <ProfileHeader isOpen={isEditProfileOpen} closeForm={clickEditProfile}>
          <ConfigButtons loggedUser={loggedUser} userId={userId} >
            <EditProfileButton handleClick={clickEditProfile} />
            <AddIconButton handleClick={clickAddCollection} />
          </ConfigButtons>
        </ProfileHeader>

        <AddCollection userId={userId} isOpen={isAddCollectionOpen} closeForm={clickAddCollection} />
        {
          user.collections.map((collection) => (
            <ProfileCollections
              key={collection._id}
              collection={collection}
              userId={user._id}
            />
          ))
        }
      </ProfileWrapper>
    )
  }
};

const mapStateToProps = (state, props) => {
  const { userId } = props.match.params;
  const { loggedUser } = state;

  return (
    {
      loggedUser,
      userId,
      user: state[userId],
    }
  )
};

const mapDispatchToProps = (dispatch) => ({
  getProfile: userId => dispatch(getProfile(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
