import React, {Component} from 'react';
import Validation from './components/Validation';
import CharComponent from './components/CharComponent'

export default class App extends Component {
  state = {
    userInput: ''
  }

  inputLengthHandler = (event) => {
    this.setState ({
      userInput: event.target.value
    })
  }

  deleteChar = (index) => {
    let text = [...this.state.userInput];
    text.splice(index, 1);
    let updatedText = text.join('');
    this.setState({
      userInput: updatedText
    })
  }

  render () {
    let {userInput} = this.state;
    const charList = userInput.split('').map((letter, index) => {
        return (
          <CharComponent
          letter={letter}
          key={index}
          click={() => this.deleteChar(index)}
          />
        )
      })
    return (
      <div> 
        <input 
          value={this.state.userInput}
          onChange={this.inputLengthHandler}
        >
          </input>
          <Validation length={this.state.userInput.length} />
          {charList}
      </div>
    )
  }
}
