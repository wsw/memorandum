import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import App from './containers/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import {Route, IndexRoute, Router, hashHistory } from 'react-router';
import TodoList from './containers/TodoList';

let store = createStore(reducers)
import './main.css';

ReactDOM.render( 
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={TodoList}/>
				<Route path="/?type=doing" component={TodoList}/>
				<Route path="/?type=done" component={TodoList}/>
			</Route>
		</Router>
	</Provider>, 
	document.body.appendChild(document.createElement('div')));