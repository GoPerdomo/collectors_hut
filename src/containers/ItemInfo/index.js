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

  render() {
    const { history, currentCollection } = this.props;
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
      <Paper zDepth={2} className="item-display" style={{ backgroundColor: "#0288d1" }} >
        <div style={{ backgroundColor: "#ffffff" }}>
          <h2 className="collection-title" onClick={history.goBack}>
            {
              currentCollection.name
            }
          </h2>
          <div style={{ display: "flex" }} >
            <div className="item-photo">
              <img src={photo} alt="" />
            </div>
            <div className="item-info">
              <h2>{name}</h2>
              <List className="item-info-list">
                {description &&
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
                }
                {productionYear &&
                  <ListItem
                    primaryText={`Production Year: ${productionYear}`}
                    autoGenerateNestedIndicator={false}
                    leftIcon={<ActionDateRange />}
                  >
                  </ListItem>
                }
                {acquisitionYear &&
                  <ListItem
                    primaryText={`Acquisition Year: ${acquisitionYear}`}
                    autoGenerateNestedIndicator={false}
                    leftIcon={<ActionDateRange />}
                  >
                  </ListItem>
                }
                {origin &&
                  <ListItem
                    primaryText={`Origin: ${origin}`}
                    autoGenerateNestedIndicator={false}
                    leftIcon={<CommunicationLocationOn />}
                  >
                  </ListItem>
                }
                {manufacturer &&
                  <ListItem
                    primaryText={`Manufacturer: ${manufacturer}`}
                    autoGenerateNestedIndicator={false}
                    leftIcon={<ActionBuild />}
                  >
                  </ListItem>
                }
                {condition &&
                  <ListItem
                    primaryText={`Condition: ${condition}`}
                    autoGenerateNestedIndicator={false}
                    leftIcon={<ActionThumbsUpDown />}
                  >
                  </ListItem>
                }
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
