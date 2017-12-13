import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfileHeader from '../../containers/ProfileHeader';
import ItemInfo from '../../containers/ItemInfo';
import DeleteItem from '../../containers/DeleteItem';

import './style.css';

class Item extends Component {

  componentDidMount() {
    const { currentItem, match, history } = this.props;

    if (currentItem) return;
    history.push(`/users/${match.params.userId}`);
  }

  render() {
    const { currentItem } = this.props;

    return (
      <main className="item">
        <ProfileHeader
          actionButtons={
            <div className="profile-config-buttons">
              <DeleteItem />
            </div>
          }
        />
        {
          currentItem && <ItemInfo currentItem={currentItem} />
        }
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { userId, collectionId, itemId } = props.match.params;
  let currentItem;

  if (state[userId]) {
    currentItem = state[userId].collections
      .find(collection => collection._id === collectionId)
      .items.find(item => item._id === itemId);
  }

  return (
    {
      itemId,
      user: state[userId],
      currentItem
    }
  )
};

export default connect(mapStateToProps)(Item);
