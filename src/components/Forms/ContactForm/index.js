import React, { Component } from 'react';

import NameInput from '../../Inputs/NameInput';
import EmailInput from '../../Inputs/EmailInput';
import SelectInput from '../../Inputs/SelectInput';
import DescriptionInput from '../../Inputs/DescriptionInput';
import SubmitButton from '../../Buttons/SubmitButton';

// ========== Styles ==========
const formStyle = {
  padding: '1em',
  boxSizing: 'border-box',
};

// ========== Component ==========
class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "Support",
      message: "",
    };
  }

  handleContentChange = (event, content) => {
    let { name, email, subject, message } = this.state;
    const { id } = event.currentTarget;

    switch (id) {
      case ("name"):
        name = content;
        break;
      case ("email"):
        email = content;
        break;
      case ("message"):
        message = content;
        break;
      default:
        break;
    }

    this.setState({ name, email, subject, message });
  }

  render() {
    const { name, email, subject, message } = this.state;
    const { handleSubmit } = this.props;

    return (
      <form style={formStyle} onSubmit={event => handleSubmit(event, this.state)} >
        <NameInput
          id="name"
          value={name}
          onChange={this.handleContentChange}
        />
        <EmailInput
          id="email"
          value={email}
          onChange={this.handleContentChange}
        />
        <SelectInput
          id="subject"
          fullWidth
          value={subject}
          menuItems={['Support', 'Sugestion', 'Report a bug', 'Other']}
          onChange={(event, index, value) => this.setState({ subject: value })}
        />
        <DescriptionInput
          id="message"
          hintText="Tell us what you are thinking"
          rows={7}
          value={message}
          onChange={this.handleContentChange}
        />
        <SubmitButton label="Send" backgroundColor="#FF6517" />
      </form>
    )
  }
};

export default ContactForm;
