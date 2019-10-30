// We will be using axios to make HTTP requests
// https://github.com/axios/axios/blob/v0.19.0/README.md
import axios from 'axios';

// We are going to need AxiosWithAuth to send headers & tokens as well as our URL for Connecting To Online Services (CTOS)
import {AxiosWithAuth, CTOS_URL} from '../AxiosWithAuth';

// Here we are creating 3 Actions, Login, Registration & Logging

// Here we define the name of the actions for our login Action
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// We are creating an action for loggin in, it takes in data (creds) and uses dispatch
export const login = (creds) => dispatch => {
	// dispatch is
	// type: login_start means that
	dispatch({
		type: LOGIN_START,
	})

	
}
