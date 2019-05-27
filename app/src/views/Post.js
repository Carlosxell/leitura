import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetPostsById, handleGetComments } from "../actions";
import CommentList from '../components/CommentList/CommentList';
import CommentForm from '../components/CommentForm/CommentForm';
import BoxForVote from '../components/BoxForVote/BoxForVote';
import '../assets/css/Post.css';

class Post extends Component {
  async componentWillMount() {
    const { id } = this.props.match.params;
    await this.props.getPost(id);
    await this.props.getComments(id);
  }

  async componentWillReceiveProps(nextProps, nextContext) {
    const { id } = this.props.match.params;

    if(this.props.comments.length !== nextProps.comments.length) {
      await this.props.getComments(id);
    }

    if((nextProps.post === null) || nextProps.post.error) return this.props.history.push('/error')
  }

  render() {
    const { comments } = this.props;
    return (
      <div className='postPage'>
        { this.props.post ? (
          <div className='postPage_content'>
            <h2 className='postPage_title'>{ this.props.post.title }</h2>

            <div className='postPage_subHeader'>
              <h3 className='postPage_subTitle'><strong>Author: </strong>{ this.props.post.author }</h3>
              <div className='postPage_subTitle_box'>
                <span className='postPage_subHeader_tag'>#{ this.props.post.category }</span>
                <BoxForVote dados={ this.props.post } tipo={ 'posts' } />
              </div>
            </div>

            <p className='postPage_text'>{ this.props.post.body }</p>

            <div className='postPage_footer'>
              <CommentForm idParent={ this.props.post.id } />

              { comments && comments.length ? (<CommentList lista={ comments } />) : ('') }
            </div>
          </div>
        ) : ('') }
      </div>
    );
  }
}

const mapStateToProps = store => ({ post: store.posts.post, comments: store.comments.comments });
const mapDispatchToProps = (dispatch) => ({
  getPost: (val) => dispatch(handleGetPostsById(val)),
  getComments: (val) => dispatch(handleGetComments(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
