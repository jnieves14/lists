import React, {Component} from 'react';

export default class Validation extends Component {
    state = {
        
    }


    render () {
        const style = {
            display: 'inline-block',
            padding: 16,
            textAlign: 'center',
            margin: 16,
            border: '1px solid black'
        }

        return (
            <div 
                style={style}
                onClick={this.props.click}
            >
                {this.props.letter}
            </div>
        );
    }
}