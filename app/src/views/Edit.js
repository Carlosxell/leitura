import React, { Component } from 'react';
import FormPost from '../components/FormPost/FormPost';
import { withRouter } from 'react-router';
import { handleGetPostsById, handleGetComments } from "../actions";
import {connect} from "react-redux";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.getPost(id);
  }

  async componentWillMount() {
    const { id } = this.props.match.params;
    await this.props.getPost(id);
  }

  async componentWillReceiveProps(nextProps, nextContext) {
    const { id } = this.props.match.params;

    // await this.props.getPost(id);
    if((nextProps.post === null) || nextProps.post.error) return this.props.history.push('/error')
  }

  render() {
    return (
      <div className="">
        <FormPost edicao={ this.props.post } />
      </div>
    );
  }
}

const mapStateToProps = store => ({ post: store.posts.post, comments: store.comments.comments });
const mapDispatchToProps = (dispatch) => ({
  getPost: (val) => dispatch(handleGetPostsById(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Edit));
