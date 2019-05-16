import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { getPostsByCategory } from '../PostsAPI';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: '',
      posts: []
    };

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.setState({ params: this.props.match.params });
    return this.getPosts(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ params: this.props.match.params });
    return this.getPosts(this.props.match.params.id);
  }

  getPosts(category) {
    getPostsByCategory(category).then(res => {
      console.info(res, 'resposta de posts da categoria');
      this.setState({ posts: res });
    });
  }

  render() {
    return (
      <div className="search-books">Categorias</div>
    );
  }
}

export default Categories;
