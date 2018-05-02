import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import ContactForm from '../../components/Forms/ContactForm';

import { sendContact } from '../../store/actions';

// ========== Styles ==========
const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto auto',
  width: '80%',
  maxWidth: '1440px',
};

const titleStyle = {
  marginTop: '0',
  marginbottom: '1em',
  textAlign: 'center',
};

const paperStyle = {
  width: '50%',
  margin: '0 auto',
};


// ========== Component ==========
class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = { sent: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit = (event, contactInfo) => {
    const { name, email, subject, message } = contactInfo;
    const { sendContact } = this.props;
    event.preventDefault();

    if (name && email && subject && message) {
      sendContact(contactInfo);
      this.setState({ sent: true });
    }
  }

  render() {
    const { sent } = this.state;

    return (
      <main className="contact" style={wrapper}>
        <h1 style={titleStyle}>Contact us</h1>
        {
          sent
            ? <h2 style={titleStyle}>Thank you for your contact!</h2>
            : (
              <Paper zDepth={2} style={paperStyle}>
                <ContactForm handleSubmit={this.handleSubmit} />
              </Paper>
            )
        }
      </main>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  sendContact: contactInfo => dispatch(sendContact(contactInfo))
});

export default connect(null, mapDispatchToProps)(Contact);
