import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/api/products');

    console.log(response.data.docs);
  }

  render() {
    return <h1>Hello Rocketseat</h1>;
  }
}
