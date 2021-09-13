import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearRx extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Rx Medications Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      Rx: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear Rx Meds' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}