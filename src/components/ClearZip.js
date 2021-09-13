import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearZip extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Zipcode Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      Zipcode: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear Zipcode' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}