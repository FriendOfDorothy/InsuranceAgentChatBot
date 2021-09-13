import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class DisplayNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: 'None'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {
    if (this.state.name == 'None'){
      event.preventDefault();
      const noEntry = () => alert('Please enter a name for the client. I\'ll need this for my notes :-)');
      noEntry();
    } else {
    alert('Name submitted successfully: ' + this.state.name);
    event.preventDefault();
    console.log(this.state);
    const data = this.state.name
    axios.patch('/ClientInfo/1', {
      FullName: this.state.name
    })
  }}

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <input formMethod = "post" name = 'name' type="text" value= {this.state.FullName} onChange={this.handleChange} />
        <input type="submit" value='Submit' className = 'agent-option-button' />
      </form>
    );
  }
}

export default DisplayNameForm;

