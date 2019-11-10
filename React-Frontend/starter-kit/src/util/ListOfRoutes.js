import React from 'react';
import {Route} from "react-router-dom";

// Components for Public Routes (No Auth)
import PublicIndex from ".././components/public/PublicIndex";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

// Components for User Routes (Auth)
// Stuff goes here

// Components for Admin Routes (Auth)
// Stuff goes here

export const ListOfPublicRoutes = () => {
	return (
		<div className="list_of_public_routes">
			<Route exact path="/" component={PublicIndex} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</div>
	);
}

export const ListOfUserRoutes = () => {
	return (
		<div className="list_of_user_routes">

		</div>
	);
}

export const ListOfAdminRoutes = () => {
	return (
		<div className="list_of_admin_routes">

		</div>
	)
}

