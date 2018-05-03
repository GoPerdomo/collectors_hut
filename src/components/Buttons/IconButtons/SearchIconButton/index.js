import React from 'react';

import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

// ========= Material-UI Styles =========
const styles = {
  base: {
    width: "36px",
    height: "36px",
    padding: "0",
  },
  iconStyle: {
    borderRadius: "50px",
    backgroundColor: "ffffff",
    width: "36px",
    height: "36px",
    padding: "0",
  },
};

// ============== Component ==============
export default () => (
  <IconButton
    type="submit"
    style={styles.base}
    iconStyle={styles.iconStyle}
  >
    <ActionSearch
      color="#FF6517"
      hoverColor="#d95a2f"
      viewBox="1 1 22 22"
    />
  </IconButton>
);
