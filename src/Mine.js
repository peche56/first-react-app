import React, { Component } from 'react';
import logo from './logo.svg';
import './Mine.css';

class Mine extends Component {
  render() {
    return (
      <div className="Mine">
        <h1>My first react app</h1>
        <input className="search" type="text" name="" value=""/>
        <button className="valid" type="button">OK</button>

      </div>
    );
  }
}

export default Mine;
