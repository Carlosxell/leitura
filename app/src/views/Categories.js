import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { handleGetPostsByCategory } from "../actions";
import CardPost from "../components/CardPost/CardPost";
import NoResults from "../components/NoResults";

class Categories extends Component {
  componentWillMount() {
    this.props.getPosts(this.props.match.params.path);

    this.props.history.listen((location, action) => {
      console.info(location, 'location');
      console.info(action, 'action');
    });
  }

  componentDidMount() {
    this.props.getPosts(this.props.match.params.path);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    let oldPath = this.props.match.params.path;
    let newPath = nextProps.match.params.path;

    if(oldPath !== newPath) return this.props.getPosts(newPath);
  }

  render() {
    const { postsByCategory } = this.props;

    return (
      <div className='categories'>
        { !postsByCategory.length ? (<NoResults />) : (
          postsByCategory.map((item, ind) => (
            <CardPost dados={ item } key={ ind } />
          ))
        ) }
      </div>
    );
  }
}

const mapStateToProps = store => ({ postsByCategory: store.posts.postsByCategory });
const mapDispatchToProps = (dispatch) => ({
  getPosts: (value) => dispatch(handleGetPostsByCategory(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories))
