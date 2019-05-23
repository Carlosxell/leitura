import React, { Component } from 'react';
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
            <h1 className='cardPost_content_info_title'>Teste</h1>
            <p className='cardPost_content_info_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam esse, et illo magni pariatur repudiandae temporibus vel voluptate voluptatem. Aspernatur consequuntur debitis dolorum fugit ipsa necessitatibus perspiciatis quasi, quod?</p>
          </div>
        </div>
      </div>
    );
  };
}

export default CardPost;
