import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategorie } from '../PostsAPI';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: [],
      read: [],
      wantToRead: [],
      currentlyReading: [],
    };

    this.updateList = this.updateList.bind(this);
  };

  componentDidMount() {
    this.updateList();
  }

  async updateList() {}

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
