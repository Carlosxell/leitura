import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/Forms.css'
import './CommentForm.css'

class CommentForm extends Component {
  render() {
    return (
      <form className='commentForm'>
        <div className='commentForm_grid'>
          <label className='commentForm_label' htmlFor="nome">
            <strong>Nome</strong>
          </label>
          <div className='commentForm_grid_wrap'>
            <input className='commentForm_input form'
                   id='nome'
                   placeholder='Ex: José abrantes'
                   type="text" />
          </div>
        </div>

        <textarea className='commentForm_textArea form'
                  placeholder='Digite aqui seu comentário'></textarea>

        <div className='commentForm_footer'>
          <button className='commentForm_btn' type='submit'>Comment</button>
        </div>
      </form>
    );
  }
}
export default connect()(CommentForm);
