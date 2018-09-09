import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Footer />
      </React.Fragment>
    )
  }
}