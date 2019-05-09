import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom"
import budget from"./Budget"
import './../App.css'
import logo from './images/Mobee.png'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";



 const bud = new budget();


class Destination extends Component {

    constructor(props) {
    super(props);

    this.state = 
    {
      startDate: new Date(),
      startDates: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);

}

    handleChange(date) {
    this.setState({
      startDate: date
    });
    this.modifSearch(date,3);
  }

      handleChanges(dates) {
    this.setState({
      startDates: dates
      
    });
    this.modifSearch(dates,4);
  }


 modifSearch(pVal,pIndex) 
 {
  if(pIndex==1)
  {
     bud.getParams().set('dest', pVal);
  }
 if(pIndex==2)
   {
     bud.getParams().set('voy', pVal);
  }

    if(pIndex==3)
  {
     bud.getParams().set('datd', pVal);
  }
 if(pIndex==4)
   {
     bud.getParams().set('datr', pVal);
  }


  console.log(bud.getParams().toString('data'));

 }

render (){
  
  return (
     <container>
     <br /> 
    <div className="App-Destination">
    <h1 color="#FFFF">Votre destination :</h1>
    <br /> 
    <br />
    <div className="App-Destination-select"> 
     <select  className="myButton" onChange={e => this.modifSearch(e.target.value,1)} defaultValue={bud.getParams().get('dest')}>
    <option >Destination</option>
    <option >Lyon</option>
    <option >Marseille</option>
    <option >Paris</option>
    <option >Lille</option>
    <option >Nice</option>
    <option >Bordeaux</option>
    <option >Toulouse</option>
    <option >Bastia</option>
    <option >Perpignan</option>
  </select>
     <br />
     <br />


  <select  className="myButton" onChange={e => this.modifSearch(e.target.value,2)} defaultValue={bud.getParams().get('voy')}>
    <option >Voyageurs</option>
    <option >1</option>
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

     <br />
     </div>
          <div className="App-Destination-select"> 
          <h3> Début du séjour :</h3>
          </div>
          
          <div className="App-Destination-select-date"> 
            <DatePicker className="myDate" dateFormat="dd/MM/yyyy" selected={this.state.startDate}
              selected={this.state.startDate}
              onChange={this.handleChange}

            />
          </div>
           
           
           <div className="App-Destination-select"> 
           <h3> Fin du séjour :</h3>
          </div>
          
           <div className="App-Destination-select-date"> 
            <DatePicker className="myDate" dateFormat="dd/MM/yyyy"
              selected={this.state.startDates}
              onChange={this.handleChanges}
            />


          </div>

     <div className="Bottom-logo">
      <img src={logo} className="images_petit" alt="logo" />
     </div>

     <div className="Bottom-retour">
      <Link to="/">
       <button type="button" className="myButtonRetour">Retour</button>
      </Link>
     </div>

     </container>

    );
        }
};


export default Destination;