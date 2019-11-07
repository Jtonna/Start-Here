import React, {Component} from 'react';
import {connect} from 'react-redux';

// This Login component handles user input and saves it to a local state, on submit it will update the global redux state tree which handles the API call

class Login extends Component {
	// Here we set a local state to be used onSubmit
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

				// This basically checks to see if the value for emailOrUsername (in local state) contains "@", if it does it does something
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
		if(Object.values(this.state.userLoginInfo.emailOrUsername).includes("@") === true ){
			// since the value contains an "@" we need to return email & password
			console.log(' YA SHIT IS AN EMAIL ')
		} else {
			// if not we return username & password
			console.log('looks like a username to me')
		}
	}


	render(){
		return (
			<div className="login">
				Login Page lives here
				<form action="">
					<input type="text" name="emailOrUsername" id="" onChange={this.handleInput} />
					<input type="password" name="password" id="" onChange={this.handleInput} />
					<input type="submit" name="submit" id="" onClick={this.handleSubmit} />

				</form>
				<h3>{this.state.userLoginInfo.emailOrUsername}</h3>
				<h3>{this.state.userLoginInfo.password}</h3>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// To make it easier on the backend we are going to loop through the state object's emailOrUsername key:value pair (but only the value)
	// The time complexity is 
	// if this.state.userLoginInfo.emailOrUsername contains "@"
	// return email & password
	// else
	// return username & password
}


export default connect(mapStateToProps, {})(Login);
