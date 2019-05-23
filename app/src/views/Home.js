import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { newValue } = this.props;

    return (
      <div className='Home'>
        <h1 style={{ paddingBottom: '20px' }}>{ newValue }</h1>
        <CardPost />
      </div>
    );
  }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue });

export default connect(mapStateToProps)(HomePage);
