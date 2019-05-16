import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { getAll, search } from '../PostsAPI';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: ''
    };

    this.getResults = this.getResults.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    this.setState({ params: this.props.match.params })
  }

  updateList() {}

  getResults(event) {}

  render() {
    return (
      <div className="search-books">Categorias</div>
    );
  }
}

export default Categories;
