import React, {Component} from 'react';

export default class Validation extends Component {
    state = {
        
    }
    inputLengthChecker = () => {
        let {inputLength} = this.props;
        let text = 'Text too short'
        if (inputLength > 5) {
            return text = 'Text long enough'
        } 
        return text;
    }

    render () {

        return (
            <div>
                {this.inputLengthChecker()}
            </div>
        );
    }
}