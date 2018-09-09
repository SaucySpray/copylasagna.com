import React, { Component } from 'react';
import '../styles/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--left">
          <div className="footer--left--e footer--logo"></div>
          <div className="footer--left--e"></div>
          <div className="footer--left--e"></div>
        </div>
        <div className="footer--right">
          <div className="footer--right--e">
            <a href="#">https://www.twitch.tv/saucissonus</a>
            <div className="footer--twitch"></div>
          </div>
          <div className="footer--right--e">
            <a href="#">https://twitter.com/Saucissonus</a>
            <div className="footer--twitter"></div>
          </div>
          <div className="footer--right--e">
            <a href="#">https://github.com/SaucySpray/copylasagna.com</a>
            <div className="footer--github"></div>
          </div>
        </div>
      </div>
    )
  }
}