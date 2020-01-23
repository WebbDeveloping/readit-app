import React from 'react';
import './Post.css';

export default function Post(props) {
  console.log('post props', props);
  return (
    <article className='post'>
      <div className='sub-info-container row'>
        <div className='sub-img'>.</div>
        <div className='sub-title-and-user'>
          <h5 className='subread-text'>r/{props.name}</h5>
          <h5>u/{'userperson'}</h5>
        </div>
      </div>
      <div className='title-container'>
        <h3>{props.title}</h3>
      </div>
      <h5>{props.desc}</h5>
      <h5>{props.name}</h5>
      <div className='post-content'>Post</div>
    </article>
  );
}
