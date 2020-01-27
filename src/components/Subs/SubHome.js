import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../Posts/Post';

export default class SubHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: []
    };
  }
  componentDidMount(props) {
    const { id } = this.props.match.params;
    console.log(id);
    axios.get(`/api/subPosts/${id}`).then(res => {
      this.setState({
        sub: res.data
      });
    });
  }
  render() {
    const subposts = this.state.sub.map((v, i, s) => {
      return (
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
          />
        </Link>
      );
    });
    const { id } = this.props.match.params;
    const { subread_id, name, description, created_at } = this.state.sub;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        turn this into a pop up model
        <Link to={`/addPost/${id}`}>
          <h4>Add Post</h4>
        </Link>
        {subposts}
      </div>
    );
  }
}
