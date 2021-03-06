import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import { BrowserRouter } from 'react-router-dom';
import './style/index';
import App from './components/App';

window.React = React;
window.ReactDOM = ReactDOM;
window.PropTypes = PropTypes;
window.Reflux = Reflux;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
