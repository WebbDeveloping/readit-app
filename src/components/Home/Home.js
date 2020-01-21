import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      subs: []
    };
  }
  componentDidMount() {
    axios.get(`/api/getPosts`).then(res => {
      //   console.log(res.data);
      if (res.data) {
        // this.props.adminLoggedIn(res.data);
      }
      this.setState({
        posts: res.data
      });
    });
  }
  render() {
    const { posts, subs } = this.state;
    const subreads = posts.forEach((v, i, s) => {
      subs.push(v.name);
    });
    return (
      <div>
        <h1>HOMEEEE</h1>
        <h1>{subs}</h1>
        {subreads}
      </div>
    );
  }
}
