import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/Post.css';

class Post extends Component {
  render() {
    return (
      <div className='postPage'>
        <h2 className='postPage_title'>Título</h2>
        <h3 className='postPage_subTitle'>Author</h3>

        <p className='postPage_text'>Textinhos</p>
      </div>
    );
  }
}
export default connect()(Post);
