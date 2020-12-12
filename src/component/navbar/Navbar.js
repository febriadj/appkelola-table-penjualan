import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar-logo"><p>React Crud</p></div>
      <div id="navbar-menu">
        <a href="#!">Home</a>
        <a href="#!">Work</a>
        <a href="#!">About</a>
      </div>
    </div>
  )
}

export default Navbar;