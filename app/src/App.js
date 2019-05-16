import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Categories from './views/Categories';
import HomePage from './views/Home';
import Comments from './views/Comments';
import Posts from './views/Posts';
import Header from './Components/Header/Header';

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />

          <main className=''>
            <Route component={ HomePage } exact path='/' />
            <Route component={ Posts } exact path='/posts' />
            <Route component={ Comments } exact path='/comments' />
            <Route component={ Categories } exact path='/categories' />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
