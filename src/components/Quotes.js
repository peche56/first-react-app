import React, { Component } from 'react';

class Quotes extends Component {
  state = {
  };
  render(){
    return (

      <div>
      <p className="App-intro">{this.props.details.citation}</p>
      <code>{this.props.details.auteur}</code>
    </div>
    )
  }
}
export default Quotes;
