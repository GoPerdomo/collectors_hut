import React from 'react';

import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';

import './style.css';

export default currentItem => {  
  const {
    description,
    productionYear,
    acquisitionYear,
    origin,
    manufacturer,
    condition
  } = currentItem;

  return (
    <List className="item-info-list" style={{ padding: "0" }}>
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
  )
};
