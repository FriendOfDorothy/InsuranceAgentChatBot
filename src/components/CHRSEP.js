import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class CHRSEP extends Component {
  constructor(props) {
    super(props);
    this.state = {conditionNote: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {
    alert('Condition submitted successfully: ' + this.state.conditionNote);
    event.preventDefault();
    console.log(this.state);
    const data = this.state.name
    axios.patch('/ClientInfo/1', {
      SEP: 'CHR: ' + this.state.conditionNote
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <textarea name = 'conditionNote' type="text" value= {this.state.value} onChange={this.handleChange} />
        <input type="submit" value='Submit' className = 'agent-option-button' />
      </form>
    );
  }
}

export default CHRSEP;

