import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleVote } from '../../actions'
import './BoxForVote.css'

class BoxForVote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      id: null,
    };

    this.setVotesVal = this.setVotesVal.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  componentDidMount() {
    if(this.props.dados) {
      this.setVotesVal(this.props.dados);
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setVotesVal(nextProps);
  }

  setVotesVal(obj) {
    this.setState({
      id: obj.id,
      votes: obj.voteScore
    });
  }

  async upVote() {
    await this.props.setVote(this.state.id, { option: 'upVote' }, this.props.tipo);
    this.setState({ votes: this.state.votes+1 })
  }

  async downVote() {
    await this.props.setVote(this.state.id, { option: 'downVote' }, this.props.tipo);
    this.setState({ votes: this.state.votes-1 })
  }

  render() {
    return(
      <div className='boxVote'>
        <button onClick={ () => this.upVote() }
                className='boxVote_btn boxVote_plus'
                type='button'> + </button>
        <div className='boxVote_info'>
          Votes <span className='boxVote_info_number'>[ { this.state.votes } ]</span>
        </div>
        <button onClick={ () => this.downVote() }
                className='boxVote_btn boxVote_minus'
                type='button'> - </button>
      </div>
    );
  }
}

const mapStateToProps = store => ({});
const mapDispatchToProps = (dispatch) => ({
  setVote: (id, obj, path) => dispatch(handleVote(id, obj, path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxForVote);
