import React, { Component } from 'react';
import './App.css';
import './CharComponent/CharComponent.css';
import InputComponent from './InputComponent/InputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputContent : '',
    inputLength : 0,
    inputChars : []
  }

  inputContentChangedHandler = (event) => {
    this.setState({
      inputContent : event.target.value,
      inputLength : this.state.inputContent.length,
      inputChars:  this.state.inputContent.split('')
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h2>This is about lists and conditionals</h2>
        <InputComponent
          changed={this.inputContentChangedHandler}/>
        <ValidationComponent
          length={this.state.inputLength} />
        <ul className="rgdt2-CharComponent_List">
          {this.state.inputChars.map((char) => {
            return <CharComponent char={char} />
          })}           
        </ul>
      </div>
    );
  }
}

export default App;
