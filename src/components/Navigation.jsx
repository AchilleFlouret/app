import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {

return (
	<div>
	    <NavLink to="/">Accueil  </NavLink> 
		<NavLink to="/Home">Home  </NavLink> 
		<NavLink to="/Home/destination">Destination  </NavLink>		
		<NavLink to="/Home/situation">Situation  </NavLink>
		<NavLink to="/Home/budget">Budget  </NavLink>
	</div>
	);
};

export default Navigation;