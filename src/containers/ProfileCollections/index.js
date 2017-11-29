import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class ProfileCollections extends Component {

  componentWillMount() {
    const httpHeaders = {
      "method": 'GET',
      "Content-Type": "application/json"
    };

    if(this.props.collection._id) {
      fetch(`http://localhost:3030/api/users/5a1da1bf972c7b073ae06e17/collections/${this.props.collection._id}`, httpHeaders)
      .then(res => res.json())
      .then(collection => {
        this.props.dispatch({
          type: "SET_CURRENT_USERS_COLLECTIONS",
          payload: {collection}
        })
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    const collection = this.props.collection;
    console.log(this.props);
    return (
      <div className="collection">
        <div className="collection-photos-preview">
        {
          collection.items && collection.items.map(item => <img key={ item._id } src={ item.photo } alt="TODO: Add a nonredundant alt"/>)
        }
        </div>
        <div className="collection-description">
          <h3>{ collection.name }</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus turpis nec felis pretium egestas. In sodales posuere eros quis elementum. In fringilla at ante facilisis lacinia. Sed tempor nulla elit, in egestas tortor malesuada hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras ac risus libero. Morbi vitae cursus sapien, eget blandit lorem. Sed elementum ex purus, condimentum dapibus ipsum aliquet in. Nulla commodo accumsan lectus, eu interdum tortor lobortis eu. Cras consectetur pretium mi, non porttitor mi cursus id. Curabitur eros mi, maximus in feugiat quis, pellentesque non nisl. Mauris ac feugiat ligula.</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return (
    {
      userCollections: state
    }
  )
};

export default connect(mapStateToProps)(ProfileCollections);
