import React, { Component } from 'react';
import axios from 'axios';
import Sub from '../Subs/Sub';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      subs: []
    };
  }
  componentDidMount() {
    axios.get(`/api/getSubs`).then(res => {
      //   console.log(res.data);
      if (res.data) {
        // this.props.adminLoggedIn(res.data);
      }
      this.setState({
        subs: res.data
      });
    });
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
    // const subreads = posts.forEach((v, i, s) => {
    //   subs.push(v);
    //   // return <Subs />;
    // });

    const subposts = subs.map((v, i, s) => {
      console.log('count', v);
      return (
        <Sub
          key={i}
          id={v.subread_id}
          name={v.name}
          desc={v.description}
          created={v.created_at}
        />
      );
    });
    console.log('sp', subposts);
    return (
      <div>
        <h1>HOMEEEE</h1>
        {/* <h1>{subs}</h1> */}
        {/* {subreads} */}
        {subposts}
      </div>
    );
  }
}
