import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Categories from './views/Categories';
import HomePage from './views/Home';
import Comments from './views/Comments';
import Posts from './views/Posts';
import Header from './Components/Header/Header';
import { getAllPosts } from './PostsAPI';

class ReadApp extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    return this.callCategories()
  }

  async callCategories() {
    await getAllPosts().then(resp => {
      this.setState({ categories: resp });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header listCategories={ this.state.categories } />

          <main className='content'>
            <Route component={ HomePage } exact path='/' />
            <Route component={ Posts } exact path='/posts' />
            <Route component={ Comments } exact path='/comments' />
            <Route component={ Categories } exact path='/categories/:id' />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default ReadApp;
