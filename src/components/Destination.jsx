// Imports
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-dates/initialize';
import { RangeDatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';


const options = [
  { value: 'hm', label: 'Handicap Moteur' },
  { value: 'hv', label: 'Handicap Visuel' },
  { value: 'ha', label: 'Handicap Auditif' },
  { value: 'hme', label: 'Handicap Moteurs' },
];

class CC extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

    onChange = (date) => {
    console.log(date);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
       <RangeDatePicker onChange={this.onChange}/>


</div>
    );
  }
}
export default CC;
