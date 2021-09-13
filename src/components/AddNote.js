import React from "react";
import "./AgentOptions.css";
import axios from 'axios';


class AddNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addedNote: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    alert('Note submitted successfully!');
    event.preventDefault();
    axios.get('/ClientInfo/1').then(response => {
        this.setState({
            CustomNote: response.data.CustomNote + ' ' + this.state.addedNote
        })
    axios.patch('/ClientInfo/1', {
        CustomNote: this.state.CustomNote
        })
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <textarea name = 'addedNote' type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Add Note" className = 'agent-option-button' />
      </form>
    );
  }
}

export default AddNotes