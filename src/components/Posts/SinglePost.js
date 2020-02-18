import React, { Component } from 'react';
import './Post.css';
import { Link, Redirect } from 'react-router-dom';
import './w3.css';
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
  deletePost = e => {
    // console.log(e);
    console.log(`I am ready to execute order ${e}`);
    // .then(e => {

    // });
    axios.delete(`/api/deletePost/${e}`).then(res => {
      console.log('The Deed Is Done My Lord');
      this.props.history.push('/');
    });
  };
  render() {
    const { id, name, title, desc, post_description } = this.state.post;
    return (
      <div className='w3-container'>
        <div className='flex apart'>
          <Link to={`/SubHome/${id}`}>
            <h5 className='subread-text'>Forum: {name}</h5>
          </Link>
          <h5 className='subread-text'>User: 'userperson'</h5>
        </div>
        <div className='w3-card-4'>
          <header className='w3-container w3-light-grey flex-start'>
            <h3>{title}</h3>
          </header>
          <div className='w3-container'>
            <p className='flex-start'>{desc}</p>
            <hr />
            <img
              src={'https://www.w3schools.com/w3css/img_avatar3.png'}
              alt='Avatar'
              className='w3-left w3-circle w3-margin-right'
              style={{ width: '60px' }}
            />
            <p>{post_description}</p>
            <br />
          </div>
          <div className='flex'>
            <button className='w3-button w3-block add'>Add</button>
            <button className='w3-button w3-block w3-dark-grey'>
              + Comment
            </button>
            <button
              onClick={e => this.deletePost(id)}
              className='w3-button w3-block delete'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
