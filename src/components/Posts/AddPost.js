import React, { Component } from 'react';
import Axios from 'axios';

export default class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      title: '',
      post_description: '',
      url: '',
      subread_id: ''
    };
  }
  handleInput = e => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addPost = async () => {
    const { image, title, post_description, url, subread_id } = this.state;
    const newPost = { image, title, post_description, url, subread_id };
    console.log('newPost', newPost);
    const add = await Axios.post(`/api/postPost`, newPost);
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <input
          name='image'
          value={this.state.image}
          placeholder={'image'}
          onChange={e => this.handleInput(e)}
        />
        <input
          name='title'
          value={this.state.title}
          placeholder={'title'}
          onChange={e => this.handleInput(e)}
        />
        <input
          name='post_description'
          value={this.state.post_description}
          placeholder={'post description'}
          onChange={e => this.handleInput(e)}
        />
        <input
          name='url'
          value={this.state.url}
          placeholder={'url'}
          onChange={e => this.handleInput(e)}
        />
        <input
          name='subread_id'
          value={this.state.subread_id}
          placeholder={'subread_id'}
          onChange={e => this.handleInput(e)}
        />
        <button style={{ border: '2px solid black' }} onClick={this.addPost} />
      </div>
    );
  }
}
