import React, { Component } from 'react';
import axios from 'axios';
import Sub from '../Subs/Sub';
import Post from '../Posts/Post';

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
    console.log('posts', posts);

    const subposts = posts.map((v, i, s) => {
      return (
        // <Sub
        //   key={i}
        //   id={v.subread_id}
        //   name={v.name}
        //   desc={v.description}
        //   created={v.created_at}
        // />
        <Post
          key={i}
          img={v.image}
          title={v.title}
          desc={v.description}
          url={v.url}
          subid={v.subread_id}
          created={caches.created_at}
          udated={v.updated_at}
          name={v.name}
        />
      );
    });
    console.log('sp', subposts);
    return (
      <div>
        <h1>HOMEEEE</h1>
        {subposts}
      </div>
    );
  }
}
