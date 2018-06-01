import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

import MainButton from './components/main-button/main-button.js'
import ChanginText from './components/changing-text/changing-text.js'

@inject('WordStore')
@observer
class App extends Component {
  render() {
    const { WordStore } = this.props;

    return (
      <div className="App">
        <MainButton changeText={WordStore.setCurrentWord}/>
        <ChanginText text={WordStore.currentWord} />
      </div>
    );
  }
}

export default App;
