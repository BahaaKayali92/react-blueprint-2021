import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './style/index';
import App from './components/App';

window.React = React;
window.ReactDOM = ReactDOM;
window.PropTypes = PropTypes;

ReactDOM.render(<App />, document.getElementById('root'));
