import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class ConfirmOCC extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('OCC submitted successfully');
    event.preventDefault();
    axios.patch('/ClientInfo/1', {
      SEP: 'OCC: Already has Rx drug coverage via VA. Looking for an MA only plan.'
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <button type="submit" value='Confirm' className = 'agent-option-button'> Confirm</button>
      </form>
    );
  }
}

export default ConfirmOCC;

