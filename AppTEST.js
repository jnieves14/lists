import React, { Component } from "react";
import "./App.css";
import Validation from './components/Validation.js';
import CharComponent from './components/CharComponent.js';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = event => {
    this.setState ({
      userInput: event.target.value
    })
  }

  deleteChar = (index) => {
    const text = [...this.state.userInput]
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState ({
      userInput: updatedText
    })
  }

  render() {
    let {userInput} = this.state
    const charList = userInput.split('').map((letter, index) => {
      return (
        <CharComponent 
          letter={letter}
          key={index}
          click={() => this.deleteChar(index)}
        />
      )
    })

    console.log(charList)
    return (
      <div className="App">
        <input onChange={this.inputChangedHandler}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
