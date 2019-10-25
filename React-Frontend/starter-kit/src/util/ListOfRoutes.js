import React from 'react';
import {Route} from "react-router-dom";

import PublicIndex from ".././components/public/PublicIndex.jsx";
import Login from "./auth/Login"

const ListOfRoutes = () => {
	return (
		<div className="list_of_routes">
			<Route exact path="/" component={PublicIndex} />
			<Route path="/login" component={Login} />
		</div>
	);
}
 
export default ListOfRoutes;
