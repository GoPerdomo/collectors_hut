import React, { Component } from 'react';

import EmailInput from '../../Inputs/EmailInput';
import SubmitButton from '../../Buttons/SubmitButton';

// ========== Styles ==========
const emailStyles = {
  baseStyle: {
    height: "35px",
    marginBottom: "10px",
  },
  
  inputStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
  }
};

const backgroundColor = "#FF6517";

// ========== Component ==========
class NewsletterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form onSubmit={() => { }} >
        <EmailInput
          id="footer-newsletter-input"
          style={emailStyles.baseStyle}
          inputStyle={emailStyles.inputStyle}
        />
        <SubmitButton label="Subscribe" backgroundColor={backgroundColor} />
      </form>
    )
  }
};

export default NewsletterForm;
