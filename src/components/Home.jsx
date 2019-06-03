import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './../App.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import Button from 'react-bootstrap/Button'
import logo from './images/Mobee.png';
import fb from './images/facebook.png';
import inst from './images/instagram.png';
import twit from './images/twitter.png';
import budget from"./Budget";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import SearchBar from 'material-ui-search-bar';
import situation from "./Situation";
import Script from 'react-load-script';
import {KeyboardAvoidingView} from 'react-native';


const options = [
  {value: 'hm', label: 'Handicap Moteur' },
  {value: 'hv', label: 'Handicap Visuel' },
  {value: 'ha', label: 'Handicap Auditif' },
  {value: 'hme', label: 'Handicap Mental' },
];

var dest="";
var voy=1;
const bud = new budget();

const CustomDepart = (props) => {
    return (
        <input
            className="myButtonVoy"
            placeholder={"Depart"}
            onClick={props.onClick}
            value={props.value}
            type="text"
            readOnly={true}
        />
    )
}

const CustomRetour = (props) => {
    return (
        <input
            className="myButtonVoy"
            placeholder={"Retour"}
            onClick={props.onClick}
            value={props.value}
            type="text"
            readOnly={true}
        />
    )
}

var selectFieldName = "my-select";
var selectPlaceholder = "Choose some options...";

class Home extends Component {

    constructor(props) {
    super(props);

    this.state = 
    {
      startDate: "",
      startDates: "",
      city: '',
      place: '',
      selectedOption: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);


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



componentDidMount(){
       console.log(bud.getParams().toString());


    if((bud.getParams().get('voy') == null))
  {
    bud.getParams().set('voy', 1);
  }

  if((bud.getParams().get('datd') == null))
  {
          this.setState(
        {
          startDate:null,
        });
  }
  else
  {
    this.setState(
        {
          startDate:new Date(bud.getParams().get('datd')),
        });
  }

    if((bud.getParams().get('datr') == null))
  {
          this.setState(
        {
          startDates:null,
        });
  }
  else
  {
    this.setState(
        {
          startDates:new Date(bud.getParams().get('datr')),
        });
  }

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
          place: addressObject.name,
        }
      );
    }
  }

 modifSearch(pVal,pIndex) 

 {
  console.log("coucou");
    if(pIndex=='hmo')
  {
    bud.getParams().set('hmo', pVal);

    }

        if(pIndex=='hme')
  {
    bud.getParams().set('hme', pVal);

    }

        if(pIndex=='ha')
  {
    bud.getParams().set('ha', pVal);

    }

        if(pIndex=='hv')
  {
    bud.getParams().set('hv', pVal);

    }
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
    	 
    }
     	if(pIndex=='datr')
 	{
    bud.getParams().set('datr', pVal);

    }

          if(pIndex=='sit')
  {
    bud.getParams().set('sit', pVal);

    }

         	if(pIndex=='dest')
 	  {
      if(pVal=="")
      {
          var desti=bud.getParams().get('dest');
          bud.getParams().set('dest', desti);
      }
      else
      {
        bud.getParams().set('dest', pVal);
      }

    }
 }


  ModifHmo (pVal) 
{
    if(pVal.target.checked==false)
    {
      bud.getParams().delete('hmo');
    }
    else
    {
    this.modifSearch(pVal.target.checked,'hmo');
    }
}

  ModifHme (pVal) 
{
    if(pVal.target.checked==false)
    {
      bud.getParams().delete('hme');
    }
    else
    {
    this.modifSearch(pVal.target.checked,'hme');
    }
}

  ModifHa (pVal) 
{
    if(pVal.target.checked==false)
    {
      bud.getParams().delete('ha');
    }
    else
    {
    this.modifSearch(pVal.target.checked,'ha');
    }
}

  ModifHv (pVal) 
{
    if(pVal.target.checked==false)
    {
      bud.getParams().delete('hv');
    }
    else
    {
    this.modifSearch(pVal.target.checked,'hv');
    }
}
     

   


  

render (){
  const { selectedOption } = this.state;

return (
	<container>
   <br /> 

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
   
        <SearchBar id="autocomplete" size="50" placeholder="Votre destination" value={this.state.place}
        onResultSelect={this.modifSearch(this.state.place,'dest')} 
        onCancelSearch={()=>this.modifSearch("null",'dest')}
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
            customInput={<CustomDepart />}
            minDate={new Date()}
            selected={this.state.startDate}
            onChange={this.handleChange }
            popperClassName="react-datepicker-popper1"
            dateFormat="dd/MM/yyyy"     
            />
            </div>
            </div>
            <div className="col-xs-6">
            <div className="myB">
            <DatePicker 
             customInput={<CustomRetour />}
            className="myButtonVoy " 
            minDate={this.state.startDate}
            selected={this.state.startDates}
            onChange={this.handleChanges }
            popperClassName="react-datepicker-popper2"  
            dateFormat="dd/MM/yyyy"
             
            />            
		      	</div>
			      </div>
            </div>
            <div className="mySituation">
            

            <div className="row">
            <div className="col-xs-6">

            <div className="row">
            <div className="col-xs-9">
            <h5>Handicap moteur</h5>
            </div>
            <div className="col-xs-3">
            <div className="colCheck">
              <input type="checkbox"               
                onChange={e => this.ModifHmo(e)} 
                defaultChecked={bud.getParams().get('hmo')}
              />

             </div>
             </div>
            </div>
            </div>
            

            <div className="col-xs-6">
            <div className="row">
            <div className="col-xs-9">
            <h5>Handicap mental</h5>
            </div>
            <div className="col-xs-3">
             <div className="colCheck">
              <input type="checkbox"             
                onChange={e => this.ModifHme(e)} 
                defaultChecked={bud.getParams().get('hme')}
              />
              </div>
            </div>
            </div>
            </div>
            </div>

            <div className="row">
            <div className="col-xs-6">
            <div className="row">
            <div className="col-xs-9">
            <h5>Handicap auditif</h5>
            </div>
            <div className="col-xs-3">
            <div className="colCheck">
              <input type="checkbox"               
                onChange={e => this.ModifHa(e)} 
                defaultChecked={bud.getParams().get('ha')}
              />
            </div>
            </div>
            </div>
            </div>

            <div className="col-xs-6">
            <div className="row">
            <div className="col-xs-9">
            <h5>Handicap visuel</h5>            
            </div>
            <div className="col-xs-3">
            <div className="colCheck">
              <input type="checkbox"             
                onChange={e => this.ModifHv(e)} 
                defaultChecked={bud.getParams().get('hv')}
              />
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>

                        


      <div className="row">
		  <div className="col-xs-6">

		  <div className="myV">
      
      <div className="row">
      <div className="myVoyage" >
      <div className="col-xs-5">

    <select 
        className="selectvoy" 
        label="voyageurs" 
        menuplacement="bottom"
        onChange={e => this.modifSearch(e.target.value,'voy')} 
        defaultValue={bud.getParams().get('voy')}>
    <option >1</option>
    <option >2</option>
    <option >4</option>
    <option >6</option>
    <option >8</option>
    <option >10</option>
    <option >12</option>
    <option >15</option>
  </select>
    </div> 
      <div className="col-xs-7"> 
      <div className="Voyageurs"> 
      <h4>Voyageurs</h4>
      </div>
  </div>
  </div>
  </div>

  </div>
  </div>
  <div className="col-xs-6">
  <div className="myB">
        <div className="row">
        <div className="myVoyage" >
      <div className="col-xs-9">
         <input
         type="number" 
         className="myButtonBud" 
         placeholder="Budget"         
         defaultValue={bud.getParams().get('bud')}
         onChange={e => this.modifSearch(e.target.value,'bud')} 
         >
         </input>  
         </div>
         <div className="col-xs-3">
         <div className="BudgetSigne"> 
         <h4>€</h4>
         </div>
          </div>
         </div>
           </div>

         </div>

       </div>
   </div>
   </div>
      </div>
      <br />
      <br />
      <br />
      <div className="App-Accueil-search">
      <Link to="/destination">
		<Button className="myButtonD" > Partez en vacances  </Button>
    </Link>
		  </div>



        

<KeyboardAvoidingView behavior="padding">
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

</KeyboardAvoidingView>

	</container>
	);
}
};

export default Home;


