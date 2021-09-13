import React from "react";
import "./AgentOptions.css";


class ZipForm extends React.Component {
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
    alert('Zipcode submitted: ' + this.state.value);
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Enter Zipcode" className = 'agent-option-button' />
      </form>
    );
  }
}

export default ZipForm
  