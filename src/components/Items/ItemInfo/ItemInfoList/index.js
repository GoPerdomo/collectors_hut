import React from 'react';
import styled from 'styled-components';

import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';

import bp from '../../../../helpers/breakpoints';


// ========== Styled Components ==========
const StyledList = styled(List) `
  width: 45%;
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

const StyledListItem = styled(ListItem) `
  & svg {
    margin: 12px 0 !important;
  }
`

const Description = styled.p`
  white-space: pre-line;
  word-wrap: break-word;
`

// ========= Material-UI Styles =========
const styles = {
  innerDivStyle: {
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingLeft: '40px',
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
      <StyledListItem
        primaryText="Description"
        open
        autoGenerateNestedIndicator={false}
        innerDivStyle={styles.innerDivStyle}
        leftIcon={<ActionInfo />}
      >
        <Description>
          {description}
        </Description>
      </StyledListItem>
      <StyledListItem
        primaryText={`Production Year: ${productionYear || "?"}`}
        autoGenerateNestedIndicator={false}
        innerDivStyle={styles.innerDivStyle}
        leftIcon={<ActionDateRange />}
      >
      </StyledListItem>
      <StyledListItem
        primaryText={`Acquisition Year: ${acquisitionYear || "?"}`}
        autoGenerateNestedIndicator={false}
        innerDivStyle={styles.innerDivStyle}
        leftIcon={<ActionDateRange />}
      >
      </StyledListItem>
      <StyledListItem
        primaryText={`Origin: ${origin || "?"}`}
        autoGenerateNestedIndicator={false}
        innerDivStyle={styles.innerDivStyle}
        leftIcon={<CommunicationLocationOn />}
      >
      </StyledListItem>
      <StyledListItem
        primaryText={`Manufacturer: ${manufacturer || "?"}`}
        autoGenerateNestedIndicator={false}
        innerDivStyle={styles.innerDivStyle}
        leftIcon={<ActionBuild />}
      >
      </StyledListItem>
      <StyledListItem
        primaryText={`Condition: ${condition || "?"}`}
        autoGenerateNestedIndicator={false}
        innerDivStyle={styles.innerDivStyle}
        leftIcon={<ActionThumbsUpDown />}
      >
      </StyledListItem>
    </StyledList>
  )
};
