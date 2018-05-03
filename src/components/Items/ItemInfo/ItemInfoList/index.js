import React from 'react';
import styled from 'styled-components';

import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';

import bp from '../../../../utils/breakpoints';


// ========== Styled Components ==========
const StyledList = styled(List) `
  width: 48%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  text-align: left;
  word-break: break-word;

  @media (max-width: ${bp.breakThree}) {
    width: 100%;
  }
`

const Description = styled.p`
  white-space: pre-line;
  word-wrap: break-word;
`

// ========= Material-UI Styles =========
const styles = {
  innerDivStyle: {
    display: "flex",
    flexDirection: "column-reverse",
  }
};

// ============== Component ==============
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
    <StyledList>
      <ListItem
        primaryText="Description"
        open
        autoGenerateNestedIndicator={false}
        leftIcon={<ActionInfo />}
        innerDivStyle={styles.innerDivStyle}
      >
        <Description>
          {description}
        </Description>
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
    </StyledList>
  )
};
