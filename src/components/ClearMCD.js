import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearMCD extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Medicaid Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      MCD: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear Medicaid' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}