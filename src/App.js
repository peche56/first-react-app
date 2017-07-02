import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Citations from './citations';

class App extends Component {
  state = {
  };

  componentWillMount() {
    this.changeCitation();
  }

  changeCitation = event => {
    const key = Object.keys(Citations);
    const randomKey = key[Math.floor(Math.random() * key.length)];
    if(this.state.citation === Citations[randomKey].citation){
      this.changeCitation();
      return
    }
    this.setState(Citations[randomKey]);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Wild citations</h1>
        </div>
        <div>
        <p className="App-intro">{this.state.citation}</p>
        <code>{this.state.auteur}</code>
      </div>
        <button onClick={ e => this.changeCitation(e)} className="valid" type="button">Change citation</button>
      </div>
    );
  }
}

export default App;
