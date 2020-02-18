import React, { useState } from 'react';
import useInput from '../Hooks/useInput';
import axios from 'axios';

export default function PopUp(props) {
  //   console.log(props);
  const { subid } = props;
  const [title, bindTitle, resetTitle] = useInput('');
  const [description, bindDescription, resetDescription] = useInput('');

  const submitHandler = e => {
    e.preventDefault();
    console.log(`Title: ${title} Description: ${description}`);
    axios.post(`/api/postPost`, { title, description, subid }).then(res => {
      console.log('we coming back');
    });
    resetDescription();
    resetTitle();
  };
  return (
    <div className='popup'>
      <div className='close-popup' onClick={props.closePopUp}>
        CLOSE
      </div>
      <div className='popup_inner'>
        <div className='container'>
          <div>
            <div className='row'>
              <div className='col-25'>
                <label>Title</label>
              </div>
              <div className='col-75'>
                <input
                  type='text'
                  id='fname'
                  name='title'
                  placeholder='Post title...'
                  {...bindTitle}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label for='country'>Type</label>
              </div>
              <div className='col-75'>
                <select id='country' name='country'>
                  <option value='text'>Text</option>
                  <option value='link'>Link</option>
                  <option value='image'>Image</option>
                </select>
              </div>
            </div>
            <div className='row'>
              <div className='col-25'>
                <label>Description</label>
              </div>
              <div className='col-75'>
                <textarea
                  id='subject'
                  name='subject'
                  placeholder='Write something..'
                  style={{ height: '200px' }}
                  {...bindDescription}
                ></textarea>
              </div>
            </div>
            <div className='row'>
              <button className='submit-button' onClick={submitHandler}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
