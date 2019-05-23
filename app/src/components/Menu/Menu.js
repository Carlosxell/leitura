import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  state = {};

  render() {
    return(
      <ul className='menu'>
        <li className='menu_item'>
          <Link className='menu_link' to={'/'}>Home</Link>
        </li>
        <li className='menu_item'>
          <Link className='menu_link' to={'/categories'}>Categorias</Link>
        </li>
        <li className='menu_item'>
          <Link className='menu_link' to={'/comments'}>Comentários</Link>
        </li>
        <li className='menu_item'>
          <Link className='menu_link' to={'/posts'}>Posts</Link>
        </li>
      </ul>
    );
  }
}

export default Menu;
