import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/Profile/ProfileHeader';
import ProfileCollections from '../../components/Profile/ProfileCollections';
import ProfileButtons from '../../components/Buttons/ConfigButtons/ProfileButtons';
import Loading from '../../components/Loading';

import { getProfile } from '../../store/actions';
import bp from '../../utils/breakpoints';


// ========== Styled Components ==========
const ProfileWrapper = styled.main`
  width: 80%;
  max-width: ${bp.maxWidth};
  margin: 0 auto auto;
  text-align: center;

  @media (max-width: ${bp.breakTwo}) {
    width: 90%;
  }
`


// ============== Component ==============
class Profile extends Component {

  componentDidMount() {
    const { userId, user, getProfile } = this.props;

    window.scrollTo(0, 0);
    if (!user) {
      getProfile(userId);
    }
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return (
        <ProfileWrapper>
          <Loading />
        </ProfileWrapper>
      )
    }

    return (
      <ProfileWrapper className="profile">
        <ProfileHeader>
          <ProfileButtons {...this.props} />
        </ProfileHeader>

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
