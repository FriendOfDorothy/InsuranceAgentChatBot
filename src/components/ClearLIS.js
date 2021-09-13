import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearLIS extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('LIS Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      LIS: false,
    })
  }

  render() {
    return (
        <input type="submit" value='Clear LIS' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}