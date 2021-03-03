import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import './style/index';
import App from './components/App';

window.React = React;
window.ReactDOM = ReactDOM;
window.PropTypes = PropTypes;
window.Reflux = Reflux;

ReactDOM.render(<App />, document.getElementById('root'));
