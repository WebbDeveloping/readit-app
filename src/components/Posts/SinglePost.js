import React, { Component } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }
  componentDidMount(props) {
    const { id } = this.props.match.params;
    axios.get(`/api/SinglePost/${id}`).then(res => {
      this.setState({
        post: res.data[0]
      });
    });
  }
  render() {
    const { name, title, desc, post_description } = this.state.post;
    // console.log(this.state.post);
    return (
      <article className='post'>
        <div className='sub-info-container row'>
          <div className='sub-img'>.</div>
          <div className='sub-title-and-user'>
            <Link to={`/SubHome`}>
              <h5 className='subread-text'>r/{name}</h5>
            </Link>
            <h5>u/{'userperson'}</h5>
          </div>
        </div>
        <div className='title-container'>
          <h3>{title}</h3>
        </div>
        <h5>{post_description}</h5> cl
        <h5>{name}</h5>
      </article>
    );
  }
}
