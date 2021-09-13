import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearCustomNote extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Custom Notes Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      CustomNote: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear Custom Notes' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}