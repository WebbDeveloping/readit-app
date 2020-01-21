import React from 'react';
import './Sub.css';

const Sub = props => (
  <div className='sub'>
    {console.log('sub props', props)}
    <h1>{props.name}</h1>
    <div className='sub-content'>
      <h5>{props.desc}</h5>
    </div>
    <div className='sub-posts'>
      <div className='post'>1</div>
      <div className='post'>2</div>
      <div className='post'>3</div>
    </div>
  </div>
);

export default Sub;
