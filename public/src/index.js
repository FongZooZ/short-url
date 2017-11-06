import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reducers from './reducers';
import Home from './containers/home';

// Additional imports for webpack
import 'jquery';
import 'bootstrap';
import './styles/_index.scss';

const middlewares = [logger, thunk];
const store = createStore(reducers, applyMiddleware(...middlewares));

const Root = () => {
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
			</div>
		</Router>
	</Provider>
};

render(Root(), document.getElementById('root'));