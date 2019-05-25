import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/Post.css';
import { handleGetPostsById } from "../actions";

class Post extends Component {
  async componentWillMount() {
    const { id } = this.props.match.params;
    await this.props.getPost(id);
  }

  async componentWillReceiveProps(nextProps, nextContext) {
    const { id } = this.props.match.params;
    // await this.props.getPost(id);

    if(nextProps.post === null) return this.props.history.push('/error');
  }

  render() {
    return (
      <div className='postPage'>
        { this.props.post ? (
          <div className='postPage_content'>
            <h2 className='postPage_title'>{ this.props.post.title }</h2>

            <div className='postPage_subHeader'>
              <h3 className='postPage_subTitle'><strong>Author: </strong>{ this.props.post.author }</h3>

              <span className='postPage_subHeader_tag'>#{ this.props.post.category }</span>
            </div>

            <p className='postPage_text'>{ this.props.post.body }</p>

            <div className='postPage_footer'></div>
          </div>
        ) : ('') }
      </div>
    );
  }
}

const mapStateToProps = store => ({ post: store.posts.post });
const mapDispatchToProps = (dispatch) => ({
  getPost: (value) => dispatch(handleGetPostsById(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
