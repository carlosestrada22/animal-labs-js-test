import React, { Component } from 'react';
import './changing-text.css';

class ChangingText extends Component {
    state = { 
        initialText: "I'm a changing text"
     }
    render() {
        return (
            <div className="changing-text">
                <span className="text">
                    {this.props.text}
                </span>
            </div>
        );
    }
}

export default ChangingText;