import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import App from './containers/App';
import './main.css';

console.log(App.render);

ReactDOM.render(<App></App>, 
	document.body.appendChild(document.createElement('div')));