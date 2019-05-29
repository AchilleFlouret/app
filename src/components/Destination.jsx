import React, { Component } from 'react';
import {Link} from "react-router-dom"
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import home from"./Home";
import budget from"./Budget";
import DatePicker from "react-datepicker"




const hom = new home();
const bud = new budget();
var dest="";

class Destination extends Component {

 constructor(props)
 {
 super(props)

     this.state = 
    {
      startDate: "",
      startDates: "",
      rooms:[],
      city: '',
      place: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
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

 fetch('/api/rooms')
 .then(res => res.json())
 .then(rooms =>this.setState({rooms}, () => console.log('rooms trouvees', rooms)));

}

     handleChange(date) {
    this.setState({
      startDate: date
    });
    hom.modifSearch(date,'datd');
  }

      handleChanges(dates) {
    this.setState({
      startDates: dates
      
    });
    hom.modifSearch(dates,'datr');
  }

actualisation()
{
   fetch('/api/rooms')
 .then(res => res.json())
 .then(rooms =>this.setState({rooms}, () => console.log('rooms trouvees', rooms)));
 console.log(bud.getParams().toString());
}

 handleScriptLoad() {
  console.log("fonction1");

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
          place: addressObject.name,
        }
      );
    }
  }

  render() {
  
return (
<container>
  <div>


    <div className="CityDest">
    <br />
      <script type="text/javascript" size="50" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGRvEMOh6UogAHhNdq_4ggxJsobePs_Rg&libraries=places"></script>
      <Script
      url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIcM7qKHBTXUqMTKgWOnu9zGCiGbB6XmA&libraries=places"
      onLoad={this.handleScriptLoad}>
      </Script>
   
      <SearchBar 
      id="autocomplete" 
      size="50" 
      placeholder="Votre destination" 
      value={this.state.place}
      onResultSelect={hom.modifSearch(this.state.place,'dest')} 
      onCancelSearch={()=>{hom.modifSearch("null",'dest'); this.actualisation(); this.componentDidMount();}}
      style={{
            margin: '0 auto',
            maxWidth: 400,
            size : 50,}}>
      </SearchBar>
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
            dateFormat="dd/MM/yyyy"     
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
                onChange={e => hom.ModifHmo(e)} 
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
                onChange={e => hom.ModifHme(e)} 
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
                onChange={e => hom.ModifHa(e)} 
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
                onChange={e => hom.ModifHv(e)} 
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
        onChange={e => {hom.modifSearch(e.target.value,'voy'); this.actualisation();}}
        defaultValue={bud.getParams().get('voy')}>
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
         onChange={e => {hom.modifSearch(e.target.value,'bud'); this.actualisation();}}
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
     

    
    <ul>
       {this.state.rooms
            .filter(rooms => 
              rooms.voyageurs==bud.getParams().get('voy') 
              && (rooms.Budget<=bud.getParams().get('bud') || bud.getParams().get('bud')==null) 
              && (rooms.ville==bud.getParams().get('dest') || bud.getParams().get('dest')=="null") )
            .map(rooms=>
      <div>
        <br />
          <li className="Proposition" key={rooms.id}>
          <div>
                <div className="row">
                <div className="col-xs-6">
                <br />
            <h3>{rooms.ville}</h3>
            <br />
            <h4>Prix : {rooms.Budget} € </h4>
            <h4>Voyageurs : {rooms.voyageurs}</h4>
            </div>
            <div className="col-xs-6">
            <br />
            <img className="imageRecize" src={rooms.image} />
            </div>
            </div>
            </div>
            
          </li>
      </div>
                )
       }

    </ul>
    <br /> 
    <br /> 


        <div className="RetourDest">
          <Link
            to={{pathname: "/",}}>
            <button type="button" className="myButtonD">Retour</button>
          </Link>
        </div>
</div>
</container>

    );
  }
};

export default Destination;
