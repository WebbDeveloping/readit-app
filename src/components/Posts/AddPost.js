import React, { Component } from 'react';
import Axios from 'axios';

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      post_description: '',
      url: ''
      // subread_id: ''
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addPost = async props => {
    const { image, title, post_description, url } = this.state;
    const { id } = this.props.match.params;
    const newPost = { image, title, post_description, url, id };
    const add = await Axios.post(`/api/postPost`, newPost);
  };
  render() {
    const { image, title, post_description, url } = this.state;
    const { handleInput, addPost } = this;
    return (
      <div>
        <input
          name='image'
          value={image}
          placeholder={'image'}
          onChange={e => handleInput(e)}
        />
        <input
          name='title'
          value={title}
          placeholder={'title'}
          onChange={e => handleInput(e)}
        />
        <input
          name='post_description'
          value={post_description}
          placeholder={'post description'}
          onChange={e => handleInput(e)}
        />
        <input
          name='url'
          value={url}
          placeholder={'url'}
          onChange={e => handleInput(e)}
        />
        {/* <input
          name='subread_id'
          value={subread_id}
          placeholder={'subread_id'}
          onChange={e => handleInput(e)}
        /> */}
        <button style={{ border: '2px solid black' }} onClick={addPost} />
      </div>
    );
  }
}
