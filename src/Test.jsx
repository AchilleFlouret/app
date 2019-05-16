// import Calendar Component 
import React, { Component } from 'react';
import { DatePicker } from '@y0c/react-datepicker';
// import calendar style 
// You can customize style by copying asset folder.
import '@y0c/react-datepicker/assets/styles/calendar.scss';

// Please include the locale you want to use.
// and delivery props to calendar component 
// See locale list https://github.com/moment/moment/tree/develop/locale
import 'moment/locale/ko';

class Test extends Component {

  onChange = (date) => {
    console.log(date);
  }
  
  render() {
    return (
       <div>
	<h1 >Votre budget </h1> 
  </div>
    )
  }
}
export default Test;
