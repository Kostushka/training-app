import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassApp from './ClassApp';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <ClassApp />
    </React.StrictMode>,
    document.getElementById('root')
);
