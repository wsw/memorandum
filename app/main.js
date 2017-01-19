import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import App from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

let store = createStore(reducers)
import './main.css';

ReactDOM.render( 
	<Provider store={store}>
    	<App />
	</Provider>, 
	document.body.appendChild(document.createElement('div')));