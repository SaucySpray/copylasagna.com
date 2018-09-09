import React, { Component } from 'react';
import '../styles/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu--logo"></div>
        <div className="menu--search">
          <div className="blank"></div>
          <div className="searchBtn"></div>
        </div>
        <div className="menu--nav">
          <a className="menu--nav-e explore">Explore</a>
          <a className="menu--nav-e categories">Categories</a>
          <a className="menu--nav-e post">Post</a>
        </div>
      </div>
    )
  }
}

export default Menu;
    