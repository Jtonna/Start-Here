import React from 'react';
import {Route} from "react-router-dom";

// Components
import PublicIndex from ".././components/public/PublicIndex";
import Login from "./auth/Login";
import Register from "./auth/Register";

const ListOfRoutes = () => {
	return (
		<div className="list_of_routes">
			<Route exact path="/" component={PublicIndex} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</div>
	);
}
 
export default ListOfRoutes;
