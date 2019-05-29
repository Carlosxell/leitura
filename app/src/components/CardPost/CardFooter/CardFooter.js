import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {handleDeletePost, handleGetPosts} from '../../../actions';
import BoxForVote from '../../BoxForVote/BoxForVote';

class CardFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentType: 'posts'
    };

    this.delete = this.delete.bind(this);
  }

  async delete() {
    await this.props.deletePost(this.props.info.id);
    this.props.getPosts();
    return this.props.history.push('/');
  }

  render() {
    return (
      <div className='cardPost_footer'>
        <div className='cardPost_footer_wrap'>
          <strong className='cardPost_footer_categorie'>#{ this.props.info.category }</strong>
          <Link className='cardPost_footer_btn' to={`/edit-post/${this.props.info.id}`}>Edit</Link>
          <button onClick={ this.delete }
                  className='cardPost_footer_btn--delete'
                  type='button'>Exclude</button>
        </div>

        <BoxForVote dados={ this.props.info } tipo={ this.state.commentType } />
      </div>
    );
  }
}

const mapStateToProps = store => ({});
const mapDispatchToProps = (dispatch) => ({
  deletePost: (data) => dispatch(handleDeletePost(data)),
  getPosts: () => dispatch(handleGetPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardFooter));
