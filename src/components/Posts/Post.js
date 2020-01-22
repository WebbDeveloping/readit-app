import React from 'react';

export default function Post(props) {
  return (
    <div className='post'>
      <h1>{props.title}</h1>
      <h5>{props.desc}</h5>
      <h5>{props.name}</h5>
      <div className='post-content'>Post</div>
    </div>
  );
}
