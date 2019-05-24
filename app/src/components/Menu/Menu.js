import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
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
    const { newValue, list } = this.props;

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
            <Link className='menu_link' to={`/posts/${ item.path }`}>{ item.name }</Link>
          </li>
        )) }

        <li className='menu_item'>
          <Link className='menu_link' to={'/'}>{ newValue }</Link>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue, list: store.categories.list });
const mapDispatchToProps = (dispatch) => ({
  clickButton: (value) => dispatch(clickButton(value)),
  categories: () => dispatch(handleGetCategory())
});

// const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));
