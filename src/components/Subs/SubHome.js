import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from '../Posts/Post';
import './sub.css';
import PopUp from './PopUp';
import './popup.css';

export default class SubHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: [],
      title: 'Title Coming',
      description: 'Description Coming...',
      showPopUp: false
    };
  }
  componentDidMount(props) {
    const { id } = this.props.match.params;
    axios.get(`/api/subPosts/${id}`).then(res => {
      this.setState({
        sub: res.data,
        title: res.data[0].name,
        description: res.data[0].description
      });
    });
  }

  togglePopUp = () => {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  };

  addPost = e => {
    console.log(e);
    console.log('add post');
  };

  render() {
    const subposts = this.state.sub.map((v, i, s) => {
      return (
        // <Link to={`/PostPage/${v.id}`} style={{ textDecoration: 'none' }}>
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
        // </Link>
      );
    });
    const { id } = this.props.match.params;
    const { subread_id, name, description, created_at } = this.state.sub;
    const { showPopUp } = this.state;
    return (
      <div className=''>
        <div className='w3-card-4 border'>
          <header className='w3-container w3-blue'>
            <h1>{this.state.title}</h1>
          </header>
          <hr />
          <div className='w3-container'>
            <p>{this.state.description}</p>
          </div>
        </div>
        <hr />
        <button onClick={this.togglePopUp} className='addButton'>
          Add Post
        </button>
        {showPopUp ? (
          <PopUp
            text='text'
            add={this.addPost}
            closePopUp={this.togglePopUp.bind(this)}
            subid={id}
          />
        ) : null}
        {subposts}
      </div>
    );
  }
}
