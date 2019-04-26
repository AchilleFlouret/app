import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Destination = () => {

return (
<div className="App-Destination">

	<h1>Votre destination :</h1>

	<h1></h1>
   

 <div className="App-Destination-select"> 

<DropdownButton variant="danger" id="dropdown-destination" title="Destination">
  <Dropdown.Item  href="#/action-1"> Mer </Dropdown.Item>
  <h1></h1>
  <Dropdown.Item href="#/action-2"> Montagne </Dropdown.Item>
  <h1></h1>
  <Dropdown.Item href="#/action-3"> Paris </Dropdown.Item>
    <h1></h1>
  <Dropdown.Item href="#/action-4"> Pas de préférence </Dropdown.Item>
</DropdownButton>

</div>
</div>

	);
};

export default Destination;