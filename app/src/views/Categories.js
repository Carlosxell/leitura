import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { getAll, search } from '../PostsAPI';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      list: [],
      value: '',
      all: [],
    };

    this.getResults = this.getResults.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {}

  updateList() {}

  getResults(event) {}

  render() {
    return (
      <div className="search-books">Categorias</div>
    );
  }
}

export default Categories;
