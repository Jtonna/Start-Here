import axios from 'axios';

// Here we define our URL for Connecting To Online Service's (CTOS) (basically the database we want to access)
export const CTOS_URL = 'https://artportfoliobw.herokuapp.com'

export const AxiosWithAuth = () => {
	// We need to get the token from localStorage to do things like restoring their last session if they close the page out
	// https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/
	const token = localStorage.getItem('token');

	// The way we pass the "token" depends on what kind of server we are working with.
	// Please see AuthenticationActions.js to configure how we save the token and what we name it
	// Current Configuration: django
	return axios.create({
		headers : {
			'Content-Type' : 'application/json',
			Authorization: `Token ${token}`
		}
	})

}
