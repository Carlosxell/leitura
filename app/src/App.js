import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './views/Home';
import Header from './components/Header/Header';
// import Edit from './views/Edit';
import AddPosts from './views/AddPosts';
import Error from './views/404';
import Categories from "./views/Categories";

class PostsApp extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <BrowserRouter>
        <Header />

        <div className="app">
          <Switch>
            <Route component={ HomePage } exact path='/' />
            <Route component={ Categories } exact path='/categorie/:path' />
            <Route component={ AddPosts } exact path='/add-posts' />
            <Route component={ AddPosts } exact path='/edit/:id' />
            <Route component={ Error } exact path='/error' />
            <Redirect from='*' to='/error' />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default PostsApp;
