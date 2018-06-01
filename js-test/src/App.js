import React, { Component } from 'react';
import './App.css'

import MainButton from './components/main-button/main-button.js'
import ChanginText from './components/changing-text/changing-text.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainButton />
        <ChanginText />
      </div>
    );
  }
}

export default App;
