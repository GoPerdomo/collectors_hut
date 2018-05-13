import React, { Component } from 'react';

import EmailInput from '../../Inputs/EmailInput';
import SubmitButton from '../../Buttons/SubmitButton';


// ========= Material-UI Styles =========
const emailStyles = {
  baseStyle: {
    height: "40px",
    marginBottom: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
  },
  hintStyle: {
    top: '8px',
  },
  inputStyle: {
    borderRadius: "10px",
  }
};

const backgroundColor = "#FF6517";

// ============== Component ==============
class NewsletterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  render() {
    const { email } = this.state;
    const { handleSubmit } = this.props;
    const { baseStyle, hintStyle, inputStyle } = emailStyles;

    return (
      <form onSubmit={event => handleSubmit(event, email)} >
        <EmailInput
          id="footer-newsletter-input"
          style={baseStyle}
          hintStyle={hintStyle}
          inputStyle={inputStyle}
          value={email}
          onChange={(event, content) => this.setState({ email: content })}
        />
        <SubmitButton label="Subscribe" backgroundColor={backgroundColor} />
      </form>
    )
  }
};

export default NewsletterForm;
