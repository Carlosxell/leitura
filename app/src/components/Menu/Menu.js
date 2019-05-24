import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { handleGetCategory } from '../../actions';
import './Menu.css';

class Menu extends Component {
  componentDidMount() {
    this.props.categories();
  }

  render() {
    const { list } = this.props;

    return(
      <ul className='menu'>
        <li className='menu_item'>
          <Link className='menu_link' to={'/'}>Home</Link>
        </li>

        <li className='menu_item'>
          <Link className='menu_link' to={'/add-post'}>Add Post</Link>
        </li>

        { list.map((item, ind) => (
          <li className='menu_item' key={ ind }>
            <Link className='menu_link' to={`/categorie/${ item.path }`}>{ item.name }</Link>
          </li>
        )) }
      </ul>
    );
  }
}

const mapStateToProps = store => ({ list: store.categories.list });
const mapDispatchToProps = (dispatch) => ({
  categories: () => dispatch(handleGetCategory())
});

// const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
