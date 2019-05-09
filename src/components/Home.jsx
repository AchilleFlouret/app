import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './../App.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import logo from './images/Mobee.png';
import fb from './images/facebook.png';
import inst from './images/instagram.png';
import twit from './images/twitter.png';

const params = new URLSearchParams(location.search);


class Home extends Component {

 constructor(props)
 {
 super(props)
 }

getParams()
{
  return params;
}

/*Fonction mofification des paramètres de l'URL
  pVal : valeur à passer en paramètre
  pIndex : index du paramètre
*/
 modifSearch(pVal) 
 {
  params.set('bud', pVal);   

 }

render (){

return (
	<container>	
	      <br />

      <br />
<div className="App-Accueil-submit">
<br />


	  <Link to="/destination">
      <Button className="myButton">Votre destination</Button>
      </Link>
      <br />
        <br />
          <br />
      <div className="App-Accueil-submit-bis">
      <br />
      <Link to="/situation">
      <Button className="myButton" id="Btn_Sit"> Vos besoins de mobilité </Button>
      </Link>
      <br />
      <br />
      <Link to="/budget">      
      <Button className="myButton" id="Btn_Bud "> Votre budget </Button>
      </Link>
       <br />	
        <br />	
      <br />	
       <br />	
        </div>

      </div>
            <br />
      <br />
      <br />	
      <br />
      <br />
      <br />
      <br />
      <div className="App-Accueil-search">
		<Button className="myButton" > Partez en vacances  </Button>
		  </div>


        
        <div className="Bottom-logo">
        <img src={logo} className="images_petit" alt="logo" />
        </div>

        <div className="Bottom-app">
        <a href="http://facebook.com/mobeetravel">
        <img src={fb}/>
		</a>
		<a href="http://twitter.com/mobeetravel">
        <img src={twit}/>
		</a>
		<a href="http://instagram.com/mobeetravel">
        <img src={inst}/>
		</a>
		
        </div>

	</container>
	);
}
};

export default Home;


