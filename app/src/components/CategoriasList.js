import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { capitalize } from '../utils/helpers'
import { callCarregarCategorias, selecionarCategoria } from '../actions'
import { connect } from 'react-redux'

class CategoriasList extends Component {
  componentDidMount() {
    this.props.callCarregarCategorias();
  }

  handleSelecionarCategoria = (e) => {
    let categoria = e.target.attributes.getNamedItem('categoria').value;

    e.preventDefault();
    this.props.selecionarCategoria(categoria);
    window.location = '/' + categoria;
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
                    to="#">{capitalize(categoria.name)}</Link>
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

export default connect(mapStateToProps, { callCarregarCategorias, selecionarCategoria })(CategoriasList)
