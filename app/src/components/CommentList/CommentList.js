import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CommentList.css'

class CommentList extends Component {
  render() {
    return (
      <ul className='commentList'>
        { this.props.lista.map((item, ind) => (
          <li className='commentList_item' key={ ind }>
            <p className='commentList_wrap_author'><strong>Author:</strong> { item.author }</p>
            <p className='commentList_text'>{ item.body }</p>
          </li>
        )) }
      </ul>
    );
  }
}

export default connect()(CommentList);
