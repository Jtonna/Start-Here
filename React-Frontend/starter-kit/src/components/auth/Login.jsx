import React, {Component} from 'react';
import {connect} from 'react-redux';

import {login} from '../../util/actions/AuthenticationActions';

// This Login component handles user input and saves it to a local state, on submit it will update the global redux state tree which handles the API call

class Login extends Component {
	
	// Local state that get's set by the event handler and used on submit
	state = {
		userLoginInfo: {
			emailOrUsername: '',
			password: '',
		}
	}

	// function that takes in parameters as 'e'
	handleInput = (e) => {
		// we are going to need to set local state
		this.setState({
			userLoginInfo: {
				// ...this.state.userLoginInfo creates a copy of the state everything we set the state
				// https://github.com/tc39/proposal-object-rest-spread
				// [e.target.name] is going to get the 'name' of the field we are entering text from
				// e.target.value gets the value each time we enter in data
				...this.state.userLoginInfo,
				[e.target.name]: e.target.value
			}
		})
	}

	// This function is going to be used in the login function to pass it the data it needs
	handleEmailOrUsername = () => {
		// This basically checks to see if the value for emailOrUsername (in local state) contains "@", if it does it does something
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
		if(Object.values(this.state.userLoginInfo.emailOrUsername).includes("@") === true ){
			// since the value contains an "@" we need to return email & password
			console.log("You sent an email B")
			return {
				email: this.state.userLoginInfo.emailOrUsername,
				password: this.state.userLoginInfo.password
			}
		} else {
			// if not we return username & password
			console.log("UserName Sent! !!")
			return{
				username: this.state.userLoginInfo.emailOrUsername,
				password: this.state.userLoginInfo.password,
			}
		}
	}

	handleLogin = (e) => {
		// This basically prevents the submit button from re-freshing the page
		e.preventDefault();
		//this.props.(whatever action from redux we need to use)
		this.props.login(this.handleEmailOrUsername())
		.then( () => {
			this.props.history.push('/RouteChooser')
		})
	}

	render(){
		return (
			<div className="login">
				Login Page lives here
				<form className="login_form" onSubmit={this.handleLogin} >
					<input type="text" name="emailOrUsername" id="login_emailOrUsername" onChange={this.handleInput} />
					<input type="password" name="password" id="login_password" onChange={this.handleInput} />
					<input type="submit" name="submit" id="login_submit" onClick={this.handleLogin} />
				</form>
				<h3>{this.state.userLoginInfo.emailOrUsername}</h3>
				<h3>{this.state.userLoginInfo.password}</h3>
			</div>
		);
	}
}

// this will map the state to props (redux store)
const mapStateToProps = (state) => ({
	loggingIn: state.loggingIn,
	error: state.loggingIn,
})

// connect (state to props), action's, then export the component
export default connect(mapStateToProps, {login})(Login);
