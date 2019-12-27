import React, { Component } from 'react';
import './App.css';
import './CharComponent/CharComponent.css';
import InputComponent from './InputComponent/InputComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputContent : 'Blah',
    inputLength : 0,
    inputChars : ['B','l','a','h']
  }

  inputContentChangedHandler = (event) => {
    this.setState({
      inputContent : event.target.value,
      inputLength : this.state.inputContent.length
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
