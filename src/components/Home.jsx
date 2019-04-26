import React from "react";
import {NavLink} from "react-router-dom";

const Home = () => {

return (
	<div className="App-Accueil-submit">
	<h1></h1>

		<button variant="danger" id="Btn_dest" > Destination </button>
        <h1></h1>
        <button variant="myButton_red" id="Btn_Sit"> Situation </button>
        <h1></h1>
        <button variant="myButton_red" id="Btn_Bud " onClick={"/Home/destination"} > Budget </button>		
	    <h1></h1>

	<div className="App-Accueil-submit">
	<h1></h1>

		<button variant="myButton_red" > Submit ! </button>
		</div>
	</div>
	
		
	
	);
};

export default Home;