import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm/CommentForm'
import '../assets/css/EditComment.css';
import { handleGetCommentById } from "../actions";

class EditComment extends Component {
  async componentWillMount() {
    const { id } = this.props.match.params;
    await this.props.getComment(id);
  }

  render() {
    const dados = this.props.commentForEdit;

    return(
      <div className='teste'>
        <CommentForm dados={ dados } />
      </div>
    )
  }
}

const mapStateToProps = store => ({ commentForEdit: store.comments.commentForEdit });
const mapDispatchToProps = (dispatch) => ({
  getComment: (val) => dispatch(handleGetCommentById(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
