import React, { Component } from 'react';
import './App.css';
import './Char/Char.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

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

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.inputChars];
    chars.splice(charIndex, 1);
    this.setState({
      inputChars: chars,
      inputContent : this.state.inputChars.join(''),
      inputLength : this.state.inputContent.length
    });
  }

  render() {
    let charList = null;

    if (this.state.inputLength > 0) {
      charList = (
        <ul className="rgdt2-Char_List">
          {this.state.inputChars.map((char, index) => {
            return <Char
            click={this.deleteCharHandler.bind(this, index)}
            char={char}
            key={index} />
          })}           
        </ul>
      )
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <h2>This is about lists and conditionals</h2>
        <input
          type="text"
          onChange={this.inputContentChangedHandler}
          value={this.state.inputContent} />
        <Validation
          length={this.state.inputLength} />
        {charList}
      </div>
    );
  }
}

export default App;
