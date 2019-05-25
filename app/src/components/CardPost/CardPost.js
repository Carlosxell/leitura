import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CardFooter from './CardFooter/CardFooter';
import './CardPost.css'

class CardPost extends Component {
  render() {
    let alt = 'Image de fallback';

    return (
      <div className='cardPost'>
        <div className='cardPost_content'>
          <figure className='cardPost_content_wrap'>
            <img className='cardPost_content_wrap_img' src={ 'https://via.placeholder.com/350x350' } alt={ alt } />
          </figure>

          <div className='cardPost_content_info'>
            <Link className='cardPost_content_info_link' to={`/post/${this.props.dados.id}`}>
              <h1 className='cardPost_content_info_title'>{ this.props.dados.title }</h1>
              <p className='cardPost_content_info_text'>{ this.props.dados.body }</p>
              <p className='cardPost_content_info_text'><strong><em>Author: </em></strong>{ this.props.dados.author }</p>
            </Link>
            <CardFooter info={ this.props.dados } />
          </div>
        </div>
      </div>
    );
  };
}

export default CardPost;
