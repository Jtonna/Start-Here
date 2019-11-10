import React, { Component } from 'react'

class Register extends Component {
	
	// Local state that get's set by the event handler and used on submit
	state = {
		userRegistrationInfo: {
			fname: '',
			lname: '',
			username: '',
			email: '',
		}
	}

	handleInput = (e) => {
		// we are going to set local state using setState
		this.setState({
			userRegistrationInfo:{
				// ...this.state.userRegisterationInfo creates a copy of the state everything we set the state
				// https://github.com/tc39/proposal-object-rest-spread
				// [e.target.name] is going to get the 'name' of the field we are entering text from
				// e.target.value gets the value each time we enter in data
				...this.state.userLoginInfo,
				[e.target.name]: e.target.value
			}
		})
	}

	register = (e) => {
		e.preventDefault();
		this.props.register(this.state.userRegistrationInfo).then( () => {
			this.props.history.push('/UserHome')
		})
	}

	render() { 
		return (
			<div className="registration_form">
				<form onSubmit={this.register}></form>
			</div>
		);
	}
}
 
export default Register;