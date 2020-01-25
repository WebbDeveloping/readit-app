import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
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
  handleClickOnPost = e => {
    return <Redirect to={'/PostPage'} />;
  };
  render() {
    const { posts, subs } = this.state;

    const subposts = posts.map((v, i, s) => {
      // console.log(v);
      return (
        // <li onClick={() => this.handleClickOnPost(v.id)}>
        <Link to={`/PostPage/${v.id}`} style={{ textDecoration: 'none' }}>
          <Post
            key={i}
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
            // onClick={this.handleClickOnPost(v.id)}
          />
        </Link>
        // </li>
      );
    });
    return (
      <div>
        <h1>HOMEEEE</h1>
        <ul>{subposts}</ul>
      </div>
    );
  }
}
