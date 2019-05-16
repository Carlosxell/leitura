import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getAll } from '../PostsAPI';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateList = this.updateList.bind(this);
  };

  componentDidMount() {
    this.updateList();
  }

  updateList() {}

  render() {
    return (
      <div className="list-books">
        <div className="open-search">
          <h1>Posts</h1>

          <Link to={'search'}>Adicionar um post</Link>
        </div>
      </div>
    );
  }
}

export default Posts;
