import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FormPost.css'

class FormPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: '',
      title: '',
      author: '',
      bodyText: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeAuthor = this.changeAuthor.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.checkForBlock = this.checkForBlock.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.list) {
      this.setState({ select: this.props.list[0] })
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }

  changeBody(e) { this.setState({ bodyText: e.target.value }) }
  changeSelect(e) { this.setState({ select: e.target.value }) }
  changeTitle(e) { this.setState({ title: e.target.value }) }
  changeAuthor(e) { this.setState({ author: e.target.value }) }

  checkForBlock() {
    let title = (this.state.title.length > 2);
    let author = (this.state.author.length > 2);
    let body = (this.state.bodyText.length > 2);

    return (title && author && body);
  }

  render() {
    const { list } = this.props;

    return (
      <form autoComplete='off' className='formPost' noValidate>
        <div className='formPost_gridA'>
          <div className='boxForm'>
            <label className='label' htmlFor='titulo'>Título</label>
            <input onChange={ this.changeTitle }
                   className='form'
                   id='titulo'
                   name='titulo'
                   placeholder='Título'
                   type='text'
                   value={ this.state.title } />
          </div>

          <div className='formPost_gridA_box'>
            <div className='boxForm'>
              <label className='label' htmlFor='author'>Author</label>
              <input onChange={ this.changeAuthor }
                     className='form'
                     id='author'
                     name='author'
                     placeholder='Author'
                     type='text'
                     value={ this.state.author } />
            </div>
          </div>

          <div className='formPost_gridA_box'>
            <div className="boxForm">
              <label className='label' htmlFor='categoria'>Category</label>
              <select onChange={ this.changeSelect }
                      className='form'
                      name='categoria'
                      id='categoria'
                      value={ this.state.select }>
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
                      placeholder='Descrição do post'
                      rows='6'
                      value={ this.state.bodyText }></textarea>
          </div>
        </div>

        <div className="formPost_footer">
          <button onClick={ this.onSubmit }
                  className='formPost_btn'
                  disabled={ !this.checkForBlock() }
                  type='submit'>Cadastrar</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = store => ({ list: store.categories.list });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FormPost);
