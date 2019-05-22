import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { capitalize } from '../utils/helpers'
import { callCarregarCategorias, selecionarCategoria } from '../actions'
import { connect } from 'react-redux'

class CategoriasList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.info(this.props.history, 'histórico');

    this.props.history.listen((data, push) => {
      console.info(this.props.categorias, 'categorias');

      if(data.path === '/react') return this.props.selecionarCategoria('react');
      if(data.path === '/redux') return this.props.selecionarCategoria('redux');
      if(data.path === '/udacity') return this.props.selecionarCategoria('udacity');
    });
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.callCarregarCategorias();
  }

  handleSelecionarCategoria = (e) => {
    let categoria = e.target.attributes.getNamedItem('categoria').value;
    this.props.selecionarCategoria(categoria);

    // e.preventDefault();
    // window.location = '/' + categoria;
  };

  render() {
    let categorias = this.props.categorias.categorias;

    return (
      <section className="categorias-wrapper">
        <ul className="menu">
          <li className='menu_item'>
            <Link className='menu_link' to="/">Home</Link>
          </li>

          {categorias !== undefined && categorias.map((categoria) => (
            <li className='menu_item' key={categoria.name}>
              <Link onClick={ this.handleSelecionarCategoria }
                    className='menu_link'
                    categoria={ categoria.name }
                    to={`${categoria.name}`}>{capitalize(categoria.name)}</Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = ({ categoria, categorias }) => ({
  categoria,
  categorias
})

export default connect(mapStateToProps, { callCarregarCategorias, selecionarCategoria })(withRouter(CategoriasList))
