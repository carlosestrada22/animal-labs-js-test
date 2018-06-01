import React, { Component } from 'react';

class MainButton extends Component {
    state = { 
        initialText: ""
     }
    render() {
        return (
            <div className="button-container">
                <button>
                    click me!
                </button>
            </div>
        );
    }
}

export default MainButton;