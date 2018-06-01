import React, { Component } from 'react';

import './main-button.css'

class MainButton extends Component {
    state = { 
        initialText: "click me!"
     }
    render() {
        return (
            <div className="button-container">
                <button className="magic-button">
                    {this.state.initialText}
                </button>
            </div>
        );
    }
}

export default MainButton;