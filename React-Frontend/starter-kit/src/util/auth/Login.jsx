import React, {Component} from 'react';

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
				... this.state.userLoginInfo,
				// [e.target.name] is going to get the 'name' of the field we are entering text from
				// e.target.value gets the value each time we enter in data
				[e.target.name]: e.target.value
			}
		})
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
 
export default Login;
