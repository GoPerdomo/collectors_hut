import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import NameInput from '../../components/Inputs/NameInput';
import EmailInput from '../../components/Inputs/EmailInput';
import SelectInput from '../../components/Inputs/SelectInput';
import DescriptionInput from '../../components/Inputs/DescriptionInput';

// ========== Styles ==========
const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  width: '80%',
  maxWidth: '1440px',
  minHeight: '50vh',
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

const descriptionStyles = {
  style: {
    height: '150px'
  },
  hintStyle: {
    top: '0'
  },
  textareaStyle: {
    height: '100%',
    marginTop: '0',
  },
};


// ========== Component ==========
class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="contact" style={wrapper}>
        <h1 style={titleStyle}>Contact</h1>
        <Paper zDepth={4} style={paperStyle}>
          <form>
            <NameInput

            />
            <EmailInput
            
            />
            <SelectInput
              fullWidth
              value={"Support"}
              menuItems={['Support', 'Sugestion', 'Report a bug']}
            />
            <DescriptionInput
              hintText="Tell us what you are thinking"
              style={descriptionStyles.style}
              hintStyle={descriptionStyles.hintStyle}
              textareaStyle={descriptionStyles.textareaStyle}
            />
          </form>
        </Paper>
      </main>
    )
  }
}

export default connect()(Contact);
