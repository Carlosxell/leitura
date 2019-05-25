import React, { Component } from 'react';

class CardFooter extends Component {
  render() {
    return (
      <div className='cardPost_footer'>
        <strong className='cardPost_footer_categorie'>#{ this.props.info.category }</strong>
        <div className='cardPost_footer_votes'>Votes: <i>{ this.props.info.voteScore }</i></div>
      </div>
    );
  }
}
export default CardFooter;
