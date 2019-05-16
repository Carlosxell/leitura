import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../store/actions';
// import { getPostsByCategory } from '../PostsAPI';

class Categories extends Component {
  state = {
    inputValue: ''
  };

  inputChange = (event) => this.setState({ inputValue: event.target.value });

  /*
  constructor(props) {
    super(props);
    this.state = {
      params: null,
      posts: []
    };

    this.getPosts = this.getPosts.bind(this);
    this.getClick = this.getClick.bind(this);
  }

  componentDidMount() {
    this.setState({ params: this.props.match.params });
    return this.getPosts(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ params: this.props.match.params });
    return this.getPosts(this.props.match.params.id);
  }

  getPosts(category) {
    getPostsByCategory(category).then(res => {
      console.info(res, 'resposta de posts da categoria');
      this.setState({ posts: res });
    });
  }
*/

  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <h1 className="search-books">{ newValue }</h1>

        <div>
          <input onChange={ this.inputChange } type='text' value={ inputValue } />
          <button onClick={ () => clickButton(inputValue) }>Clicar</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue });
const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
