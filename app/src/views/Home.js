import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../PostsAPI';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    this.getPosts = this.getPosts.bind(this);
  };

  componentDidMount() {
    return this.getPosts();
  }

  async getPosts() {
    await getAllPosts().then(res => {
      return console.info(res, 'resposta de todos os posts');
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="open-search">
          <h1>Home</h1>

          <Link to={'search'}>Adicionar um post</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
