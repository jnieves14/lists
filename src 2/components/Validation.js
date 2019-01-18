import React, {Component} from 'react';

export default class Validation extends Component {
  state = {
    
  }

  lengthValidator = () => {
    let {length} = this.props;
    let text = 'Text is not long enough';
    if (length > 5) {
        text = 'Text is long enough'
    }
    return text
}
  render () {
    
    return (
      <div> 
        <p>{this.lengthValidator()}</p>
      </div>
    )
  }
}
