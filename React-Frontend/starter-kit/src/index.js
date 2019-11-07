import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// We are going to wrap our app in a Provider to allow our Redux-based store to have access to all of the child components.
// https://react-redux.js.org/api/provider
import {Provider} from 'react-redux';

// We are going to use some middleware 'logger' and 'thunk' to
// https://github.com/LogRocket/redux-logger/blob/v2.0.4/README.md
// https://github.com/reduxjs/redux-thunk/blob/v2.3.0/README.md
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

// we are importing createStore and applyMiddleWare for setting up the store with middleware. Compose is for the devtools extension
import {createStore, applyMiddleware, compose} from 'redux';

// We need our 'rootReducer' to gain access to the list of reducers we will use in the app
// https://redux.js.org/basics/reducers
import rootReducer from './util/reducers/RootReducer';

// This enables the devtools
// https://github.com/zalmoxisus/redux-devtools-extension/tree/v2.15.0#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Here we initialize our store, use to 'rootReducer' & apply our middleware 'logger' & 'thunk'
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
