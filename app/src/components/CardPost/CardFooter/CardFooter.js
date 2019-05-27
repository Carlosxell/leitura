import React, { Component } from 'react';
import BoxForVote from '../../BoxForVote/BoxForVote'

class CardFooter extends Component {
  state = {
    commentType: 'posts'
  };

  render() {
    return (
      <div className='cardPost_footer'>
        <strong className='cardPost_footer_categorie'>#{ this.props.info.category }</strong>
        <BoxForVote dados={ this.props.info } tipo={ this.state.commentType } />
      </div>
    );
  }
}
export default CardFooter;
