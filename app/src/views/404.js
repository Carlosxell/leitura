import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Error extends Component {
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
        <h1>404 [ Error ]</h1>
      </div>
    );
  }
}

export default Error;