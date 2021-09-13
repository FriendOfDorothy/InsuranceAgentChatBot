import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearDOB extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Date of Birth Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      DOB: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear DOB' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}