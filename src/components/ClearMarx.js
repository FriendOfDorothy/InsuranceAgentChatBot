import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


export default class ClearMarx extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('MARx Cleared Successfully!');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      MARx: null,
    })
  }

  render() {
    return (
        <input type="submit" value='Clear MARx' className = 'agent-option-button' onClick = {this.handleSubmit} />
    );
  }
}