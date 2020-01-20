import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get(`/api/getPosts`).then(res => {
      console.log(res.data);
      //   if (res.data) {
      //     this.props.adminLoggedIn(res.data);
      //   }
      //   this.setState({
      //     posts: res.data
      //   });
    });
  }
  render() {
    return (
      <div>
        <h1>HOMEEEE</h1>
      </div>
    );
  }
}
