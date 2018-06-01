import React, { Component } from 'react';

class ChangingText extends Component {
    state = { 
        initialText: "I'm a changing text"
     }
    render() {
        return (
            <div className="changin-text">
                <h3>
                    {this.state.initialText}
                </h3>
            </div>
        );
    }
}

export default ChangingText;