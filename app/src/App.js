import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './views/Home';
import Header from './components/Header/Header';
import Posts from './views/Posts';
import AddPosts from './views/AddPosts';
import Error from './views/404';

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
            <Route component={ Posts } exact path='/posts/:path' />
            <Route component={ AddPosts } exact path='/add-posts' />
            <Route component={ Error } exact path='/error' />
            {/*<Redirect from='*' to='/' />*/}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default PostsApp;
