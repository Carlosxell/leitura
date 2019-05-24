import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from "react-router-dom";
import { clickButton, handleGetCategory } from '../../actions';
import './Menu.css';

class Menu extends Component {
  componentWillMount() {
    this.props.history.listen((location, action) => {
      console.info(location, 'location');
      console.info(action, 'action');

      this.props.clickButton(Math.random().toString(36).substr(-8));
    });
  }

  componentDidMount() {
    this.props.categories();
  }

  render() {
    const { newValue } = this.props;

    return(
      <ul className='menu'>
        <li className='menu_item'>
          <Link className='menu_link' to={'/'}>Home</Link>
        </li>

        <li className='menu_item'>
          <Link className='menu_link' to={'/add-post'}>Add Post</Link>
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

        <li className='menu_item'>
          <Link className='menu_link' to={'/posts'}>{ newValue }</Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue });
const mapDispatchToProps = (dispatch) => ({
  clickButton: (value) => dispatch(clickButton(value)),
  categories: () => dispatch(handleGetCategory())
});

// const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));
