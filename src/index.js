import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './routes/profile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Profile />
  , document.getElementById('root'));
registerServiceWorker();
