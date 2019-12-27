import React, { Component } from 'react';
import './App.css';
import InputComponent from './InputComponent/InputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    inputContent : '',
    inputLength : 7
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h2>This is about lists and conditionals</h2>
        <InputComponent
          content={this.state.inputContent}/>
        <ValidationComponent
          length={this.state.inputLength} />
      </div>
    );
  }
}

export default App;
