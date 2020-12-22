import React, {Component} from 'react';
import {BrowserRouter} from 'react-dom-router';

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <link to="/about"></link>
      </BrowserRouter>
    )
  }
}