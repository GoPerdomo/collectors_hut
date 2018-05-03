import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import ContactForm from '../../components/Forms/ContactForm';

import { sendContact } from '../../store/actions';
import bp from '../../utils/breakpoints';


// ========== Styled Components ==========
const ContactWrapper = styled.main`
  width: 80%;
  max-width: ${bp.maxWidth};
  display: flex;
  flex-direction: column;
  margin: 0 auto auto;

  @media (max-width: ${bp.breakTwo}) {
    width: 90%;
  }
  @media (max-width: ${bp.breakFive}) {
    width: 94%;
  }
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1em;
  text-align: center;
`

const ThanksMessage = Title.withComponent('h2');

const StyledPaper = styled(Paper)`
  width: 60%;
  margin: 0 auto;

  @media (max-width: ${bp.breakTwo}) {
    width: 70%;
  }
  @media (max-width: ${bp.breakFour}) {
    width: 75%;
  }
  @media (max-width: ${bp.breakSix}) {
    width: 80%;
  }
`


// ============== Component ==============
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
      <ContactWrapper>
        <Title>Contact us</Title>
        {
          sent
            ? <ThanksMessage>Thank you for your contact!</ThanksMessage>
            : (
              <StyledPaper zDepth={2}>
                <ContactForm handleSubmit={this.handleSubmit} />
              </StyledPaper>
            )
        }
      </ContactWrapper>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  sendContact: contactInfo => dispatch(sendContact(contactInfo))
});

export default connect(null, mapDispatchToProps)(Contact);
