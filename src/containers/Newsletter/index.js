import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import NewsletterForm from '../../components/Forms/NewsletterForm';

import { subNewsletter } from '../../store/actions';
import bp from '../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.2em;

  @media (max-width: ${bp.breakEight}) {
    width: 90%;
    margin-bottom: 3em;
  }
`

// ============== Component ==============
class Newsletter extends Component {

  constructor(props) {
    super(props);

    this.state = { sent: false };
  }

  handleSubmit = (event, email) => {
    const { subNewsletter } = this.props;

    event.preventDefault();
    if (email) {
      subNewsletter({ email });
      this.setState({ sent: true });
    }

  };

  render() {
    const { sent } = this.state;

    return (
      <Wrapper>
        {
          sent
            ? <span>Thank you for subscribing!</span>
            : [
              <span key="title">Subscribe to our newsletter:</span>,
              <NewsletterForm key="form" handleSubmit={this.handleSubmit} />
            ]
        }
      </Wrapper>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  subNewsletter: email => dispatch(subNewsletter(email)),
})

export default connect(null, mapDispatchToProps)(Newsletter);
