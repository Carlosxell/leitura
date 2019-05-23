import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header className='header'>
        <div className='header_container'>
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header;
