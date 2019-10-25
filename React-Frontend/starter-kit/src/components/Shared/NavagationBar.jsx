import React from 'react';
import {Link} from "react-router-dom";

const NavagationBar = () => {
	return (
		<div className="navagation_bar">
			Navagation Bar lives here. If youre logged in it will show something and if youre logged out youll see some buttons to log-in
			<Link to="/"> home </Link>
			<Link to="/login"> login </Link>
			<Link to="/register"> register </Link>
		</div>
	);
}
 
export default NavagationBar;
