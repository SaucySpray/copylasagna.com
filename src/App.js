import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu--logo"></div>
        <div className="menu--nav--e search">
          <div className="blank"></div>
          <div className="searchBtn"></div>
        </div>
        <div className="menu--nav">
          <a className="menu--nav-e explore">Explore</a>
          <div className="menu--nav-e categories">Categories
            <a href="copypasta" className="copyPasta">Copy Pasta</a>
            <a href="emotes" className="emotes">Emotes</a>
            <a href="drawings" className="drawings">Drawings</a>
          </div>
          <a className="menu--nav-e post">
            <div className="post--img"></div>
            <div className="post--title">Post</div>
          </a>
        </div>
      </div>
    )
  }
}

export default App;
    