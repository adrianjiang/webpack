require('normalize.css/normalize.css');
require('styles/App.css');

// import React from 'react';

// var React = require('react');
var React = window.React;

// var React = require('react-dom');
let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started! 哈哈 老子居然成功了</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {

};

export default AppComponent;