import React, { Component } from 'react';
import CardPost from '../components/CardPost/CardPost';
// import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateList = this.updateList.bind(this);
  };

  componentDidMount() {
    return this.updateList();
  }

  async updateList() {}

  render() {
    return (
      <div className='Home'>
        <CardPost />
      </div>
    );
  }
}

export default HomePage;
