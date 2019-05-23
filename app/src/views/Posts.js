import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

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
      <div className="">
        <h1>Posts</h1>
      </div>
    );
  }
}

export default Posts;
