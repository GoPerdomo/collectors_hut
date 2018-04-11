import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';

import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';

import './style.css';

class ItemInfo extends Component {

  handleClick = () => {
    const { history } = this.props;
    const { userId, collectionId } = this.props.match.params;
    history.push(`/users/${userId}/collections/${collectionId}`);
  }

  render() {
    const { currentCollection } = this.props;
    const {
      photo,
      name,
      description,
      productionYear,
      acquisitionYear,
      origin,
      manufacturer,
      condition
    } = this.props.currentItem;

    return (
      <Paper zDepth={0} className="item-display" style={{ backgroundColor: "#6D8EAD" }} >
        <div style={{ backgroundColor: "#ffffff", padding: "20px" }}>
          <h1 className="collection-title" onClick={this.handleClick}>
            {
              currentCollection.name
            }
          </h1>
          <div style={{ display: "flex" }} >
            <div className="item-photo">
              <img src={photo} alt="" />
            </div>
            <div className="item-info">
              <h2>{name}</h2>
              <List className="item-info-list">
                <ListItem
                  primaryText="Description"
                  open
                  autoGenerateNestedIndicator={false}
                  leftIcon={<ActionInfo />}
                  nestedItems={[
                    <ListItem key={0} disabled>
                      {description}
                    </ListItem>
                  ]}
                >
                </ListItem>
                <ListItem
                  primaryText={`Production Year: ${productionYear || "?"}`}
                  autoGenerateNestedIndicator={false}
                  leftIcon={<ActionDateRange />}
                >
                </ListItem>
                <ListItem
                  primaryText={`Acquisition Year: ${acquisitionYear || "?"}`}
                  autoGenerateNestedIndicator={false}
                  leftIcon={<ActionDateRange />}
                >
                </ListItem>
                <ListItem
                  primaryText={`Origin: ${origin || "?"}`}
                  autoGenerateNestedIndicator={false}
                  leftIcon={<CommunicationLocationOn />}
                >
                </ListItem>
                <ListItem
                  primaryText={`Manufacturer: ${manufacturer || "?"}`}
                  autoGenerateNestedIndicator={false}
                  leftIcon={<ActionBuild />}
                >
                </ListItem>
                <ListItem
                  primaryText={`Condition: ${condition || "?"}`}
                  autoGenerateNestedIndicator={false}
                  leftIcon={<ActionThumbsUpDown />}
                >
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { userId, collectionId } = props.match.params;

  const currentCollection = state[userId].collections.find(collection => (
    collection._id === collectionId)
  );

  return (
    {
      currentCollection
    }
  )
};

export default withRouter(connect(mapStateToProps)(ItemInfo));