import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import WordStore from './stores/wordStore'

const Root = (
    <Provider WordStore={WordStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
