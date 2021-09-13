import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearPlans extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Searched Plans Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      Plans: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear Plans' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}