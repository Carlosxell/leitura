import React, { Component } from 'react';
import FormPost from '../components/FormPost/FormPost';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className="">
        <FormPost />
      </div>
    );
  }
}

export default Posts;
