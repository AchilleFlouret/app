
import DropdownButton from 'react-bootstrap/DropdownButton'
import React, { Component } from 'react'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom"
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import logo from './images/Mobee.png'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';



const params = new URLSearchParams(location.search);


class Budget extends Component {

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
  return(
    <container>

  <div>
	<div className="App-Budget">

	<h1 >Votre budget </h1> 
  </div>


  <div className="App-Budget_select"> 
  <br /> 
<div className="row">
<div className="col-xs-8">
  <input type="number"className="myButton" placeholder="Mon budget " onChange={e => this.modifSearch(e.target.value,1)} defaultValue={this.getParams().get('bud')}></input> 
</div>
 <div className="col-xs-4">
 <h2>€</h2>
 </div>
 </div>
 </div>



</div>


<div className="Bottom-logo">
 <img src={logo} className="images_petit" alt="logo" />
</div>

<div className="Bottom-retour">
  <Link to="/">
      <button type="button" className="myButton">Retour</button>
  </Link>
</div>
</container>

	);
}
};



export default Budget;
