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
      <div className="error">
        <h1 className='error_title'>404 [ Error ]</h1>
        <p className='error_text'>Desculpe, essa página ou post não existe.</p>
      </div>
    );
  }
}

export default Error;
