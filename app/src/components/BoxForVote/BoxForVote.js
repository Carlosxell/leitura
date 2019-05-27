import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleVote } from '../../actions'
import './BoxForVote.css'

class BoxForVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      path: '',
      id: null
    };

    this.vote = this.vote.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      path: nextProps.post ? 'posts' : 'comments',
      id: nextProps.id,
    });
  }

  vote(type) {
    let opt = { option: type };
    console.info(type, 'tipo');
    this.props.setVote('teste');
  }

  render() {
    return(
      <div className='boxVote'>
        <button onClick={ () => this.vote('upVote') }
                className='boxVote_btn boxVote_plus'
                type='button'> + </button>
        <div className='boxVote_info'>
          Votes <span className='boxVote_info_number'>[ { this.state.votes } ]</span>
        </div>
        <button onClick={ () => this.vote('downVote') }
                className='boxVote_btn boxVote_minus'
                type='button'> - </button>
      </div>
    );
  }
}

const mapStateToProps = store => ({});
const mapDispatchToProps = (dispatch) => ({
  setVote: (val) => dispatch(handleVote(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxForVote);
