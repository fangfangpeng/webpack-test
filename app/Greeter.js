// var config = require('./config.json');
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };
import React, { Component } from 'react';
import config from './config.json';
import styles from './Grees.css';

export default class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}dfv
      </div>
    );
  }
}
