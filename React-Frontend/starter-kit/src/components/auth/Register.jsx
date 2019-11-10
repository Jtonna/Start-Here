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
				...this.state.userRegistrationInfo,
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
			<div className="registration">
				<form className="registration_form" onSubmit={this.register}>
					<input type="firstname" name="fname" id="" onChange={this.handleInput} />
					<input type="lastname" name="lname" id="" onChange={this.handleInput} />
					<input type="username" name="username" id="" onChange={this.handleInput} />
					<input type="email" name="email" id="" onChange={this.handleInput} />
					<input type="password" name="password" id="" onChange={this.handleInput} />
					<input type="submit" name="submit" id="" onChange={this.register} />
				</form>
				<h3>{this.state.userRegistrationInfo.fname}</h3>
				<h3>{this.state.userRegistrationInfo.lname}</h3>
				<h3>{this.state.userRegistrationInfo.username}</h3>
				<h3>{this.state.userRegistrationInfo.email}</h3>
				<h3>{this.state.userRegistrationInfo.password}</h3>
			</div>
		);
	}
}
 
export default Register;