import React, { Component } from 'react';

import './main-button.css'

class MainButton extends Component {
    state = { 
        initialText: "Click me!"
     }
    render() {
        return (
            <div className="button-container">
                <button className="magic-button" onClick={this.props.changeText}>
                    {this.state.initialText}
                </button>
            </div>
        );
    }
}

export default MainButton;