
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
const NBdemandes =0;
const flagmo =false;
const flagv =false;
const flaga =false;
const flagme =false;
bud.getParams().set('sitmo', false);
bud.getParams().set('sitv', false);
bud.getParams().set('sita', false);
bud.getParams().set('sitme', false);


class Situation extends Component {


 constructor(props) {
        super(props);
        this.init();
    } 

/*Fonction mofification des paramètres de l'URL
  pVal : valeur à passer en paramètre
  pIndex : index du paramètre
*/
 modifSearch(pVal,pIndex) 
 {
  if(pIndex==1)
  {bud.getParams().set('sitmo', pVal);}
  if(pIndex==2)
  {bud.getParams().set('sitv', pVal);}
  if(pIndex==3)
  {bud.getParams().set('sita', pVal);}
  if(pIndex==4)
  {bud.getParams().set('sitme', pVal);}
  
  console.log(bud.getParams().toString());
 }

/*Fonction init : récupère la valeur des params entrés précédement
afin de pouvoir les afficher
*/
init()
{
 flagmo=bud.getParams().get('sitmo');
 flagv=bud.getParams().get('sitv');
 flaga=bud.getParams().get('sita');
 flagme=bud.getParams().get('sitme');
}

render (){

return (
<container>

	<div className="App-Situation">
	<h1>Votre situation :</h1>
    <br />

<br />
<br />
<div className="row">
<div className="col-xs-6">
    <h4>Handicap moteur</h4>
</div>
<div className="col-xs-6">
    <select className="myButtonRetour" onChange={e => this.modifSearch(e.target.value,1)} defaultValue={bud.getParams().get('sitmo')}>
    <option >non</option>
    <option >oui</option>
    </select>
</div>
</div>
<br />
<div className="row">
<div className="col-xs-6">
    <h4>Handicap visuel </h4>
</div>
<div className="col-xs-6">
    <select className="myButtonRetour" onChange={e => this.modifSearch(e.target.value,2)} defaultValue={bud.getParams().get('sitv')}>
    <option >non</option>
    <option >oui</option>
    </select>
</div>
</div>
<br />
<div className="row">
<div className="col-xs-6">
    <h4>Handicap auditif </h4>
</div>
<div className="col-xs-6">
    <select className="myButtonRetour" onChange={e => this.modifSearch(e.target.value,3)} defaultValue={bud.getParams().get('sita')}>
    <option >non</option>
    <option >oui</option>
    </select>
</div>
</div>
<br />
<div className="row">
<div className="col-xs-6">
    <h4>Handicap mental </h4>
</div>
<div className="col-xs-6">
    <select className="myButtonRetour" onChange={e => this.modifSearch(e.target.value,4)} defaultValue={bud.getParams().get('sitme')}>
    <option >non</option>
    <option >oui</option>
    </select>
</div>
</div>
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

export default Situation;