import React from "react";
import "./AgentOptions.css";
import axios from 'axios';


class CustomNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {CustomNote: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    alert('Note submitted successfully!');
    event.preventDefault();
    const data = this.state;
    console.log(data);
    axios.patch('/ClientInfo/1', {
    CustomNote: this.state.CustomNote
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <textarea name = 'CustomNote' type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Add Initial Note" className = 'agent-option-button' />
      </form>
    );
  }
}

export default CustomNotes