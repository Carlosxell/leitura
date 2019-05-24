import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { clickButton } from '../actions';

class Categories extends Component {
  componentWillMount() {
    this.props.history.listen((location, action) => {
      console.info(location, 'location');
      console.info(action, 'action');

      this.props.clickButton(Math.random().toString(36).substr(-8));
    });
  }

  render() {
    const { newValue } = this.props;

    return (
      <div className='categories'>
        <h1>{ newValue }</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue });
const mapDispatchToProps = (dispatch) => ({
  clickButton: (value) => dispatch(clickButton(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories))
