import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Budget = () => {

return (

  <div>
	<div className="App-Budget">

	<h1>Votre budget :</h1>

   
</div>
 <div className="App-Budget-select"> 

<DropdownButton variant="success" id="dropdown-budget" title="Budget">

  <Dropdown.Item  href="#/action-1"> 100€ </Dropdown.Item>
  <h1></h1>
  <Dropdown.Item href="#/action-2"> 200€ </Dropdown.Item>
  <h1></h1>
  <Dropdown.Item href="#/action-3"> 300€ </Dropdown.Item>
    <h1></h1>
  <Dropdown.Item href="#/action-4"> Pas de budget </Dropdown.Item>
</DropdownButton>

</div>
</div>

	);
};

export default Budget;