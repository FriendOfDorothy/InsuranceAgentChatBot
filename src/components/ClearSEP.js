import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearSEP extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('SEP Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      SEP: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear SEP' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}