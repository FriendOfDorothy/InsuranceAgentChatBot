import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearDoc extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Doctors Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      Doctors: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear Doctors' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}