import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../PostsAPI';
import './Menu.css';

class Menu extends Component {
  state = {
    listCategories: []
  };

  componentDidMount() {
    getAllCategories().then(res => {
      this.setState({ listCategories: res });
    });
  }

  render() {
    return(
      <ul className='menu'>
        { this.state.listCategories.map((res, ind) => {
          return <li className='menu_item' key={ ind }>
            <Link className='menu_link' to={`/categories/${ res.path }`}>{ res.name }</Link>
          </li>
        }) }
      </ul>
    );
  }
}

export default Menu;
