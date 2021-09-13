import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';
import ClearName from "./ClearName";
import ClearDOB from "./ClearDOB";
import ClearZip from "./ClearZip";
import ClearSEP from "./ClearSEP";
import ClearMarx from "./ClearMarx";
import ClearMCD from "./ClearMCD";
import ClearDoc from "./ClearDoc";
import ClearRx from "./ClearRx";
import ClearPlans from "./ClearPlans";
import ClearCustomNote from "./ClearCustomNote";


export default class ClearData extends Component {
  constructor(props) {
    super(props);
    this.handleAll = this.handleAll.bind(this);
  }

  handleAll(event) {
    alert('All Notes Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      FullName: 'None',
      DOB:'None',
      Zipcode:'None',
      SEP:'None',
      MARx: null,
      LIS: false,
      MCD: 'None',
      Doctors: null,
      Rx: null,
      Plans: null,
      CustomNote: 'None'
    })
  }

  render() {
    return (
      <form >
        <ClearName/>
        <ClearDOB/>
        <ClearZip/>
        <ClearSEP/>
        <ClearMarx/>
        <ClearMCD/>
        <ClearDoc/>
        <ClearRx/>
        <ClearPlans/>
        <ClearCustomNote/>
        <input type="submit" value='Clear All Notes' className = 'agent-option-button' onClick = {this.handleAll} />
      </form>
    );
  }
}