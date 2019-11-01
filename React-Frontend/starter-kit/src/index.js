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

// we are importing createStore and applyMiddleWare for do as the name's suggests
import {createStore, applyMiddleware} from 'redux';

// We need our 'rootReducer' to gain access to the list of reducers we will use in the app
// https://redux.js.org/basics/reducers
import rootReducer from './util/reducers/RootReducer';


// Here we initialize our store, use to 'rootReducer' & apply our middleware 'logger' & 'thunk'
// note remove the following line from the createStore obj in production
// && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, applyMiddleware(thunk, logger) && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
