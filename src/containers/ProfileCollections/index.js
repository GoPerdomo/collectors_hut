import React, { Component } from 'react';
// import { connect } from 'react-redux';

import './style.css';

class ProfileCollections extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <section className="collections">
      {
        this.props.user.collections && this.props.user.collections.map(collection => (
          <section key={ collection._id } className="collection">
            <div className="collection-photos-preview">
            {
              collection.items && collection.items.map(item => <img key={ item._id } src={ item.photo } alt="TODO: Add a nonredundant alt"/>)
            }
            </div>
            <div className="collection-description">
              <h3>Collection Name</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus turpis nec felis pretium egestas. In sodales posuere eros quis elementum. In fringilla at ante facilisis lacinia. Sed tempor nulla elit, in egestas tortor malesuada hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras ac risus libero. Morbi vitae cursus sapien, eget blandit lorem. Sed elementum ex purus, condimentum dapibus ipsum aliquet in. Nulla commodo accumsan lectus, eu interdum tortor lobortis eu. Cras consectetur pretium mi, non porttitor mi cursus id. Curabitur eros mi, maximus in feugiat quis, pellentesque non nisl. Mauris ac feugiat ligula.</p>
            </div>
          </section>
        ))
      }
    </section>
    )
  }
}

export default ProfileCollections;
