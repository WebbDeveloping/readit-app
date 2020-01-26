import React, { Component } from 'react';

export default class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      title: '',
      post_description: '',
      url: '',
      subread_id: 0
    };
  }
  render() {
    return <div>Add Post page bruh</div>;
  }
}
