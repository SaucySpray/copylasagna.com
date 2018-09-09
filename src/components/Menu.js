import React, { Component } from 'react';
import '../styles/Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu--logo"></div>
        <div className="menu--search">
          <div className="blank"></div>
          <a href="#" className="searchBtn"></a>
        </div>
        <div className="menu--nav">
          <a href="#" className="menu--nav--e explore">Explore</a>
          <a href="#" className="menu--nav--e categories">Categories</a>
          <a href="#" className="menu--nav--e post">Post</a>
        </div>
      </div>
    )
  }
}
    