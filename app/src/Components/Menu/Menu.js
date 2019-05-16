import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategories } from '../../store/actions';
import { getAllCategories } from '../../PostsAPI';
import './Menu.css';

class Menu extends Component {
  state = {
    listCategories: []
  };

  componentDidMount() {
    getAllCategories().then(res => {
      this.setState({ listCategories: res });

      return getCategories(res);
    });
  }

  render() {
    const { getCategories, allCategories } = this.props;

    return(
      <ul className='menu'>
        { allCategories.map((res, ind) => {
          return <li className='menu_item' key={ ind }>
            <Link className='menu_link' to={`/categories/${ res.path }`}>{ res.name }</Link>
          </li>
        }) }
      </ul>
    );
  }
}

const mapStateToProps = store => ({ getCategories: store.getCategories.allCategories });
const mapDispatchToProps = dispatch => bindActionCreators({ getCategories }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
