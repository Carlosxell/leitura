import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CommentList.css'

class CommentList extends Component {
  render() {
    return (
      <ul className='commentList'>
        { this.props.lista.map((item, ind) => (
          <li className='commentList_item' key={ ind }>
            <div className='commentList_grid'>
              <div className='commentList_grid_info'>
                <p className='commentList_wrap_author'><strong>Author:</strong> { item.author }</p>
                <p className='commentList_text'>{ item.body }</p>
              </div>

              <div className='commentList_grid_box'>
                <Link className='commentList_btn' to={`/edit-comment/${ item.id }`}>Edit</Link>
                <br />
                <button className='commentList_btn--danger' type='button'>Delete</button>
              </div>
            </div>
          </li>
        )) }
      </ul>
    );
  }
}

export default connect()(CommentList);
