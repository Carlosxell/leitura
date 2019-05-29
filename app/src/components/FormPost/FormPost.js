import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { handleSetPost, handleEditPost } from '../../actions';
import './FormPost.css';

class FormPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'react',
      title: '',
      author: '',
      body: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeAuthor = this.changeAuthor.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.checkForBlock = this.checkForBlock.bind(this);
  }

  componentDidMount() {
    if(this.props.edicao) {
      this.setState({
        body: this.props.edicao.body,
        author: this.props.edicao.author,
        title:  this.props.edicao.title,
        category:  this.props.edicao.category,
      })
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.list) {
      this.setState({ category: 'react' })
    }

    if(this.props.edicao) {
      this.setState({
        body: this.props.edicao.body,
        author: this.props.edicao.author,
        title:  this.props.edicao.title,
        category:  this.props.edicao.category.name,
      })
    }
  }

  async onSubmit(e) {
    let obj = {};
    e.preventDefault();

    if(!this.props.edicao) {
      obj.id = Math.random().toString(36).substr(-8);
      obj.timestamp = (new Date()).toISOString();

      await this.props.setPost({ ...obj, ...this.state });
      return this.props.history.push('/');
    }

    await this.props.editPost(Object.assign({}, this.props.edicao, this.state));
    return this.props.history.push(`/post/${this.props.edicao.id}`);
  }

  changeBody(e) { this.setState({ body: e.target.value }) }
  changeSelect(e) { this.setState({ category: e.target.value }) }
  changeTitle(e) { this.setState({ title: e.target.value }) }
  changeAuthor(e) { this.setState({ author: e.target.value }) }

  checkForBlock() {
    let title = (this.state.title.length > 2);
    let author = (this.state.author.length > 2);
    let body = (this.state.body.length > 2);

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
                      value={ this.state.category }>
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
                      value={ this.state.body }></textarea>
          </div>
        </div>

        <div className="formPost_footer">
          <button onClick={ this.onSubmit }
                  className='formPost_btn'
                  disabled={ !this.checkForBlock() }
                  type='submit'>{ this.props.edicao ? 'Editar' : 'Cadastrar' }</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = store => ({ list: store.categories.list });
const mapDispatchToProps = (dispatch) => ({
  setPost: (data) => dispatch(handleSetPost(data)),
  editPost: (data) => dispatch(handleEditPost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormPost));
