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
    const subreads = this.state.posts.forEach((v, i, s) => {
      //   console.log('s', s);
      console.log('v', v);
      this.state.subs.push(v.name);
      //   console.log('i', i);
      //   return <h1>{v.description}</h1>;
    });
    console.log(123, this.state.subs);
    return (
      <div>
        <h1>HOMEEEE</h1>
        <h1>{this.state.subs}</h1>
        {subreads}
      </div>
    );
  }
}
