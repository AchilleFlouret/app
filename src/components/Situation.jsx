import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Situation = () => {

return (
	<div className="App-Situation">

	<h1>Votre situation :</h1>

	<h1></h1>
   

 <div className="App-Situation-select"> 

<DropdownButton variant="warning" id="dropdown-situation" title="Situation">
  <Dropdown.Item  href="#/action-1"> pas de jambe </Dropdown.Item>
  <h1></h1>
  <Dropdown.Item href="#/action-2"> pas de bras </Dropdown.Item>
  <h1></h1>
  <Dropdown.Item href="#/action-3"> pas de tête </Dropdown.Item>
    <h1></h1>
  <Dropdown.Item href="#/action-4"> pas d'handicap </Dropdown.Item>
</DropdownButton>

</div>
</div>
);
};

export default Situation;