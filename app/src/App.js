import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './views/Home';
import Header from './components/Header/Header';
import Posts from './views/Posts';
import AddPosts from './views/AddPosts';
import Error from './views/404';

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="app">
          <Route component={ HomePage } exact path='/' />
          <Route component={ Posts } exact path='/posts' />
          <Route component={ AddPosts } exact path='/add-posts' />
          <Route component={ Error } exact path='/error' />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
