import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Menu from '../Menu/Menu';
import './Header.css';

class Header extends Component {
/*
  constructor(props) {
    super(props);

    this.state = {};
  }
*/

  componentWillMount() {
    this.props.history.listen((location, action) => {
      console.info(location, 'location');
      console.info(action, 'action');
    });
  }

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

export default withRouter(Header);
