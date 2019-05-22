
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import {Link} from "react-router-dom"
import React, { Component } from 'react'
import budget from"./Budget"
import ResponsiveContainer from 'react-responsive-widget'
import { Button, Col, Row } from 'react-bootstrap'
import './../App.css';
import logo from './images/Mobee.png';

const bud = new budget();
var destina ="gg";

class Situation extends Component {


 constructor(props) {
        super(props);
   
    } 



componentDidMount(){
  console.log(bud.getParams().toString());
  this.destina=bud.getParams();
  console.log(bud.getParams().toString());
}
/*Fonction mofification des paramètres de l'URL
  pVal : valeur à passer en paramètre
  pIndex : index du paramètre
*/
getDestina()
{
  return this.destina;
}

render (){

return (
<container>

      <div className="App-Accueil-search">
      <Link to="/">
    <Button className="myButtonRetour" >Retour </Button>
    </Link>
      </div>


</container>


);

}
};

export default Situation;