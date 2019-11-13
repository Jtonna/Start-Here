// We will be using axios to make HTTP requests
// https://github.com/axios/axios/blob/v0.19.0/README.md
import axios from 'axios';

// We are going to need AxiosWithAuth to send headers & tokens as well as our URL for Connecting To Online Services (CTOS)
import {CTOS_URL} from '../AxiosWithAuth';

// Heres some information describing what actions are
// https://redux.js.org/basics/actions

// for modularity we are going to define some paths for logging in & registration
// https://doepud.co.uk/blog/anatomy-of-a-url
const login_path = '/login';
const registration_path = '/register';

// In this file we have 3 Actions, Login, Registration & Logging Out

// Here we define the name of the actions for our login Action for Reducer which will be used for Dispatches
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// We are creating an action for logging in, it takes in data (creds) and sends it to the server for validation. The server returns a 'response'
export const login = (creds) => (dispatch) => {
	// console.log('hits the login action & passes the credentials to the server for a response')
	// console.log(creds)
	// dispatch gets sent to the reducer that updates the state (basically stating that the LOGIN is Starting)
	dispatch({
		type: LOGIN_START,
	})

	// Here we will send a post request, do something with the response & setup a catch if the request fails for whatever reason
	return axios
		// This will create a url like this https://something.com/login
		.post(`${CTOS_URL+login_path}`, creds)
		.then(response => {
			localStorage.setItem('token', response.data.token);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: response.data,
			})
			localStorage.setItem('user', response.data.artistId)
		})
		.catch(error =>{
			console.log('login error: ', error)
			dispatch({
				type: LOGIN_FAILURE,
			})
		})
}

// Registration Actions Names for Reducer
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

// Registration Action
export const registration = (creds) => (dispatch) => {
	// console.log(creds)

	dispatch ({
		type: REGISTER_START,
	})

	return axios
		.post(`${CTOS_URL+registration_path}`, creds)
		.then( response => {
			// If registration was succesful we set a token so the user can be logged in with it
			localStorage.setItem('token', response.data.token);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: response.data,
			})
		})
		.catch(err => {
			console.log('registration error:', err)
			dispatch({
				type: REGISTER_FAILURE
			})
		})
}

// Logout Action Name for Reducer
export const LOGOUT = 'LOGOUT';

// This clears local storage and dispatches the LOGOUT action
// https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
export const logout = () => (dispatch) => {
	localStorage.clear();
	dispatch({
		type: LOGOUT,
	})
}
