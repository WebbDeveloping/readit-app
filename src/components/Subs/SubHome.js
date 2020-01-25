import React, { Component } from 'react';
import axios from 'axios';

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
    axios.get(`/api/subread/${id}`).then(res => {
      this.setState({
        sub: res.data[0]
      });
    });
  }
  render() {
    const { subread_id, name, description, created_at } = this.state.sub;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
      </div>
    );
  }
}
