import React from "react";
import "./AgentOptions.css";
import axios from 'axios';

class GetDOB extends React.Component {
    constructor(props) {
      super(props);
      this.state = {DOB: 'None'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name] : event.target.value});
    }
  
    handleSubmit(event) {
      alert('Birthday Submitted: ' + this.state.DOB );
      event.preventDefault();
      console.log(this.state);
      axios.patch('/ClientInfo/1', {
        DOB: this.state.DOB
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} >
            <input name = 'DOB' type="date" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" className = 'agent-option-button' />
        </form>
      );
    }
  }
  
  export default GetDOB