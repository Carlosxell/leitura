import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardPost from '../components/CardPost/CardPost';
import { handleGetPosts } from "../actions";
import NoResults from "../components/NoResults";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className='Home'>
        { !posts.length ? (<NoResults />) : (
          posts.map((item, ind) => (
            <CardPost dados={ item } key={ ind } />
          ))
        ) }
      </div>
    );
  }
}

const mapStateToProps = store => ({ posts: store.posts.posts });
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(handleGetPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
