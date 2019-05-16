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
import budget from"./Budget";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import Select from 'react-select';
import TextInput from 'mineral-ui/TextInput';


const options = [
  { value: 'hm', label: 'Handicap Moteur' },
  { value: 'hv', label: 'Handicap Visuel' },
  { value: 'ha', label: 'Handicap Auditif' },
  { value: 'hme', label: 'Handicap Mental' },
];

const bud = new budget();

class Home extends Component {

    constructor(props) {
    super(props);

    this.state = 
    {
      startDate: "",
      startDates: "",
      city: '',
      query: '',
      selectedOption: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

}



componentDidMount(){
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

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          city: address[0].long_name,
          query: addressObject.formatted_address,
        }
      );
    }
  }

 modifSearch(pVal,pIndex) 
 {
 	if(pIndex=='bud')
 	{
    bud.getParams().set('bud', pVal);

    }
    	if(pIndex=='voy')
 	{
    bud.getParams().set('voy', pVal);

    }
     	if(pIndex=='datd')
 	{
    bud.getParams().set('datd', pVal);
    	console.log(bud.getParams().get('datd'));

   
  
    }
     	if(pIndex=='datr')
 	{
    bud.getParams().set('datr', pVal);

    }
         	if(pIndex=='dest')
 	{
    bud.getParams().set('dest', pVal);

    }
      console.log(bud.getParams().toString());

 }

     handleChange(date) {
    this.setState({
      startDate: date
    });
    this.modifSearch(date,'datd');
  }

      handleChanges(dates) {
    this.setState({
      startDates: dates
      
    });
    this.modifSearch(dates,'datr');
  }


 handleChangeSit = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

render (){
  const { selectedOption } = this.state;

return (
	<container>
   <br /> <br />  

          <div className="Bottom-logo">
        <img src={logo} className="images_petit" alt="logo" />
        </div>	

	      <br />
    <br />
<div className="App-Accueil-submit">
<br />
      <div>
        <script type="text/javascript" size="50" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGRvEMOh6UogAHhNdq_4ggxJsobePs_Rg&libraries=places"></script>

        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIcM7qKHBTXUqMTKgWOnu9zGCiGbB6XmA&libraries=places"
          onLoad={this.handleScriptLoad}
        />
   
        <SearchBar id="autocomplete"  size="50" placeholder="Votre destination" value={this.state.query}
          style={{
            margin: '0 auto',
            maxWidth: 400,
            size : 50,
            
          }}
        />
  
      </div>

        <br />
          <br />
      <div className="App-Accueil-submit-bis">
            <div className="row">
			<div className="col-xs-6">
			<div className="myV">
            <DatePicker className="myButtonVoy"
            minDate={new Date()}
            placeholderText={"Départ"}
            selected={this.state.startDate}
            onChange={this.handleChange }
            popperClassName="react-datepicker-popper1"          

            />
            </div>
            </div>
            <div className="col-xs-6">
            <div className="myB">
            <DatePicker 
            className="myButtonVoy " 
            minDate={this.state.startDate}
 			      placeholderText={"Retour"}
            selected={this.state.startDates}
            onChange={this.handleChanges }
            popperClassName="react-datepicker-popper2"  
             
            />            
		      	</div>
			      </div>
            </div>
           <Select
              isMulti={true}
              value={selectedOption}
              onChange={this.handleChangeSit}
              options={options}
              placeholder="Vos besoins de mobilité "
           />

      <div className="row">
		  <div className="col-xs-6">
		  <div className="myV">
        <select 
        className="myButtonVoy" 
        placeholder="Voyageurs " 
        onChange={e => this.modifSearch(e.target.value,'voy')} 
        drop="down"
       // defaultValue={bud.getParams().get('voy')}>
       >
    <option >0</option>
    <option >1</option>
    <option >2</option>
    <option >3</option>
    <option >4</option>
    <option >5</option>
    <option >6</option>
    <option >8</option>
    <option >10</option>
    <option >12</option>
    <option >15</option>
  </select>  
  </div>
  </div>
  <div className="col-xs-6">
  <div className="myB">
         <TextInput 
         type="number" 
         className="myButtonBud" 
         placeholder="Budget"         
         defaultValue={bud.getParams().get('bud')}
         onChange={e => this.modifSearch(e.target.value,'bud')} 
         name="eur"
         suffix="€"
         >
         </TextInput>  
         </div>

       </div>
   </div>
   </div>
      </div>



      <br />
      <br />
      <br />	
      <br />
      <div className="App-Accueil-search">
      <Link to="/situation">
		<Button className="myButtonD" > Partez en vacances  </Button>
    </Link>
		  </div>



        


        <div className="Bottom-app">
        <a href="http://facebook.com/mobeetravel">
        <img src={fb} className="images_icone"/>
		    </a>
		    <a href="http://twitter.com/mobeetravel">
        <img src={twit} className="images_icone"/>
		    </a>
		    <a href="http://instagram.com/mobeetravel">
        <img src={inst} className="images_icone"/>
		    </a>
        </div>

	</container>
	);
}
};

export default Home;


