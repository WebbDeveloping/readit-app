import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Post.css';
import Dropdown from '../Comments/DropDown';

export default function Post(props) {
  console.log('Post.js', props);
  const { id, name, title, post_description, post_desc, subid } = props;
  return (
    <div className='w3-container'>
      <div className='flex apart'>
        <Link to={`/SubHome/${subid}`}>
          <h5 className='subread-text'>Forum: {name}</h5>
        </Link>

        <h5 className='subread-text'>Author: 'userperson'</h5>
      </div>
      <Link to={`/PostPage/${id}`} style={{ textDecoration: 'none' }} key={id}>
        <div className='w3-card-4'>
          <header className='w3-container w3-light-grey flex-start'>
            <h3>{title}</h3>
          </header>
          <div className='w3-container'>
            <p className='flex-start'>{post_desc}</p>
            <hr />
            <img
              src={'https://www.w3schools.com/w3css/img_avatar3.png'}
              alt='Avatar'
              className='w3-left w3-circle w3-margin-right'
              style={{ width: '60px' }}
            />
            <p>{post_desc}</p>
            <br />
          </div>
        </div>
      </Link>
      <div className='flex'>
        <button className='w3-button w3-block w3-dark-grey'>
          <Dropdown postId={props.id} userId={1} subId={props.subid} />
        </button>
      </div>
    </div>
  );
}
