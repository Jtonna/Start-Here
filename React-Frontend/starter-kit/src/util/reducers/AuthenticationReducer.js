import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGOUT,
} from '../actions/AuthenticationActions'

const initialState = {
	// Initial State for Loggin In
	loggingIn: false,
	loggedIn: false,
	loginError: '',

	// Initial State for Registering
	registering: false,
	registered: false,
	registerationError: false,
}

// We need to set the state first & we do that with initialState. We also are going to be using actions to update said state.
export const AuthenticationReducer = (state = initialState, action) => {
	switch(action.type){
		// Here we define what we do based upon certian cases
		// We should always make a copy of the existing state (using a spread operator) because ___

		// Login Cases
		case LOGIN_START:
			return {
				...state,
				loggedIn: true,
				loginError: '',
			}
		
		case LOGIN_SUCCESS:
			return {
				loggingIn: false,
				loggedIn: true,
				loginError: '',
				user: action.payload,
			}
		
		case LOGIN_FAILURE:
			return {
				...state,
				loggedIn: false,
			}
		
		// Registration Cases
		case REGISTER_START:
			return {
				...state,
				registering: true,
				registerationError: '',
			}
		
		case REGISTER_SUCCESS:
			return {
				...state,
				registering: false,
				registered: true,
				registerationError: '',
				user: action.payload,
			}
		
		case REGISTER_FAILURE:
			return {
				...state,
				registerationError: action.payload,
			}
		
		default:
			return state;
	}
}
