import React from "react";
import "./AgentOptions.css";


class CustomNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Notes submitted: ' + this.state.value);
    event.preventDefault();
    console.log("Custom Note" + this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <textarea type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Enter Zipcode" className = 'agent-option-button' />
      </form>
    );
  }
}

export default CustomNotes