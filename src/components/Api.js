import React, { Component } from 'react';
import api from '../services/Api';

class Api extends Component {

  state = {
    cafes: [],
  }

  async componentDidMount() {
    const response = await api.get('catalogo/produtos');

    this.setState({ cafes: response.data });
  }

  render() {

    const { cafes } = this.state;

    return (
      <div>
        <h1>Catalogo</h1>
        {cafes.map(cafe => (
          <li key={cafe.id}>
            <h2>
              <strong>Título: </strong>
              {cafe.data.nome}
            </h2>
            <p>
              {cafe.desc}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default Api;