import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Styled from 'styled-components';
import axios from 'axios';
import { NewHomePop } from './Style';
import Sub from '../Subs/Sub';
import Post from '../Posts/Post';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      subs: [],
      selectedPost: ''
    };
  }
  componentDidMount() {
    axios.get(`/api/getPosts`).then(res => {
      if (res.data) {
        // this.props.adminLoggedIn(res.data);
      }
      this.setState({
        posts: res.data
      });
    });
  }
  deletePost = e => {
    console.log('I am ready to execute the order 626');
    // return <Redirect push to='/' />;
  };
  render() {
    const { posts, subs } = this.state;

    const subposts = posts.map((v, i, s) => {
      return (
        <Post
          key={v.id}
          id={v.id}
          img={v.image}
          title={v.title}
          desc={v.description}
          post_desc={v.post_description}
          url={v.url}
          subid={v.subread_id}
          created={v.created_at}
          post_created={v.post_created_at}
          post_udated={v.post_updated_at}
          udated={v.updated_at}
          name={v.name}
          delete={this.deletePost}
        />
      );
    });
    return (
      <div>
        <NewHomePop>
          <h3>News</h3>
          <h3>Home</h3>
          <h3>Popular</h3>
        </NewHomePop>
        {subposts}
      </div>
    );
  }
}
