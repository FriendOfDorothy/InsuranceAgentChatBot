import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearName extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Name Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      FullName: 'None',
    })
  }

  render() {
    return (
        <input type="submit" value='Clear Name' className = 'agent-option-button'  onClick = {this.handleSubmit}/>
    );
  }
}