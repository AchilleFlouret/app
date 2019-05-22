// Imports
import React, { Component } from 'react';
import {Link} from "react-router-dom"

import Script from 'react-load-script';
import home from"./Home";
import budget from"./Budget";



const hom = new home();
const bud = new budget();
var dest="";

class Destination extends Component {

 constructor(props)
 {
 super(props)

     this.state = 
    {
      city: '',
      place: '',
    };
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
 }

componentDidMount(){
       console.log(bud.getParams().toString());


  if(bud.getParams().get('dest')=="null")
  {
     this.setState(
        {
          place:"",
        });
  }
  else
  {

    this.setState(
        {
          place:(bud.getParams().get('dest')),
        });
  }

  //to put initial dates in state as default
}

 handleScriptLoad() {

    // Declare Options For Autocomplete
    var options = {
      types: ['(cities)'],
    };

    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);

  }
  
  handlePlaceSelect() {
    console.log("fonction2");

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name,
          place: addressObject.formatted_address,
        }
      );
    }
  }

  render() {
  

    return (
<container>

      <div>

      <div className="CityDest">
      <div>
        <script type="text/javascript" size="50" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGRvEMOh6UogAHhNdq_4ggxJsobePs_Rg&libraries=places"></script>

        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIcM7qKHBTXUqMTKgWOnu9zGCiGbB6XmA&libraries=places"
          onLoad={this.handleScriptLoad}
        />
   

     </div>
      </div>
<div className="RetourDest">
  <Link
  to={{
    pathname: "/",
  }}
>
      <button type="button" className="myButtonD">Retour</button>
  </Link>
</div>
</div>

</container>

    );
  }
}
export default Destination;
