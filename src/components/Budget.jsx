
import DropdownButton from 'react-bootstrap/DropdownButton'
import React, { Component } from 'react'
import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom"
import logo from './images/Mobee.png'


const params = new URLSearchParams(location.search);


class Budget extends Component {

 constructor(props)
 {
 super(props)
 }

 state = {
    selectedOption: null,
  }

    handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }


getParams()
{
  return params;
}


componentDidMount(){
  console.log(this.getParams().toString());
}

render (){
  const { selectedOption } = this.state;
  return(
    <container>

<div className="Bottom-retour">
  <Link
  to={{
    pathname: "/",
  }}
>
      <button type="button" className="myButton">Retour</button>
  </Link>
</div>

</container>

	);
}
};



export default Budget;
