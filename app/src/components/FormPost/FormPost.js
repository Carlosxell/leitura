import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FormPost.css'

class FormPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: null
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeBody = this.changeTitle.bind(this);
    this.changeTitle = this.changeBody.bind(this);
    this.changeAuthor = this.changeAuthor.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.list) {
      this.setState({ select: this.props.list[0] })
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }
  changeBody(e) {}
  changeSelect(e) {}
  changeTitle(e) {}
  changeAuthor(e) {}

  render() {
    const { list } = this.props;

    return (
      <form autoComplete='off' className='formPost' noValidate>
        <div className='formPost_gridA'>
          <div className='boxForm'>
            <label className='label' htmlFor='titulo'>Título</label>
            <input onClick={ this.changeTitle }
                   className='form'
                   id='titulo'
                   name='titulo'
                   placeholder='Título'
                   type='text' />
          </div>

          <div className='formPost_gridA_box'>
            <div className='boxForm'>
              <label className='label' htmlFor='author'>Author</label>
              <input onClick={ this.changeAuthor }
                     className='form'
                     id='author'
                     name='author'
                     placeholder='Author'
                     type='text' />
            </div>
          </div>

          <div className='formPost_gridA_box'>
            <div className="boxForm">
              <label className='label' htmlFor='categoria'>Category</label>
              <select onChange={ this.changeSelect }
                      className='form'
                      name='categoria'
                      id='categoria'
                      value={ this.state.selected }>
                { list.length ? (
                  list.map((item, ind) => ( <option key={ ind } value={ item.name }>{ item.name }</option> ))
                ) : (<option value=''>Selecione</option>) }
              </select>
            </div>
          </div>

          <div className="boxForm">
            <label className='label' htmlFor='body'>Body</label>
            <textarea onChange={ this.changeBody }
                      className='form'
                      id='body'
                      name='body'
                      placeholder='Descrição do post'
                      rows='6'
                      value={ this.state.body }></textarea>
          </div>
        </div>

        <div className="formPost_footer">
          <button onClick={ this.onSubmit } className='formPost_btn' type='submit'>Cadastrar</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = store => ({ list: store.categories.list });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormPost);
