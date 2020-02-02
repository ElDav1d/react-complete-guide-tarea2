import React, { Component } from 'react';
import './App.css';
import './Char/Char.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputContent : ''
  }

  inputContentChangedHandler = (event) => {
    this.setState({
      inputContent : event.target.value,
    })
  }

  deleteCharHandler = (charIndex) => {
    const characters = this.state.inputContent.split('');
    characters.splice(charIndex, 1);
    const updatedinputContent = characters.join('')
    this.setState({
      inputContent : updatedinputContent
    });
  }

  render() {
    let charList = null;

    if (this.state.inputContent.length > 0) {
      charList = (
        <ul className="rgdt2-Char_List">
          {this.state.inputContent.split('').map((inputContentItem, index) => {
            return <Char
            click={this.deleteCharHandler.bind(this, index)}
            character={inputContentItem}
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
          inputLength={this.state.inputContent.length} />
        {charList}
      </div>
    );
  }
}

export default App;
