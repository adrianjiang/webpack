

// var React = require('react');
// var ReactDOM = require('react-dom');
var React = window.React;

var ReactDOM = window.ReactDOM;

// import React from 'react';

// import ReactDOM from 'react-dom';
import Atest from './A-react/A-react';
import App from './AppComponent';


// require('./A-react/A-react.js');
require('./A-react/A-react.less');



setTimeout(function(){
    ReactDOM.render(<App />, document.getElementById('app'));

    ReactDOM.render(<Atest />, document.getElementById('testqqq'));
},0);


