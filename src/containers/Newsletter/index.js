import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsletterForm from '../../components/Forms/NewsletterForm';

import { subNewsletter } from '../../store/actions';

// ========== Styles ==========
const wrapper = {
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontSize: '1.2em',
};

// ========== Component ==========
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
      <div style={wrapper}>
        {
          sent
            ? <span>Thank you for subscribing!</span>
            : [
              <span key="title">Subscribe to our newsletter:</span>,
              <NewsletterForm key="form" handleSubmit={this.handleSubmit} />
            ]
        }
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  subNewsletter: email => dispatch(subNewsletter(email)),
})

export default connect(null, mapDispatchToProps)(Newsletter);
