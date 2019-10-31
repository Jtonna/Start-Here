// combineReducers allows to to combine all of our reducers into one file for easier state management of the app becomes large and complex
// https://redux.js.org/api/combinereducers
import {combineReducers} from 'redux';

// Import all of the reducers here
import AuthenticationReducer from './AuthenticationReducer';

export default combineReducers({
	user: AuthenticationReducer,
})
