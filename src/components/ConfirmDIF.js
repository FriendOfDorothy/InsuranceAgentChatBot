import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class ConfirmDIF extends Component {
  constructor(props) {
    super(props);
    this.state = {enrolledDate: 'None'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {
    const newday = new Date();
    const todaytwo = new Date();
    todaytwo.setDate(todaytwo.getDate() + 1);
    const todaythree = new Date();
    const enrollDate = new Date(this.state.enrolledDate)
    enrollDate.setDate(enrollDate.getDate() + 1)
    todaythree.setMonth(todaythree.getMonth() - 3);
    todaythree.setDate(todaythree.getDate() + 1);
    const disqualifyFutureDate = () => {
      alert('This person isn\'t eligible for this SEP. \n\nNotification of enrollment can\'t be in the future. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
    }
    const disqualifyTooLate = () => {
      alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
    }
    const noEntry = () => alert('Please enter a notification date for the client. I\'ll need this to determine eligibility :-)');
    console.log('Notification date: ' + enrollDate);
    console.log('Limit: ' + todaythree);
    console.log('Lost Coverage qualified date range: ' + newday);

    if (enrollDate < todaythree) {
      event.preventDefault()
      disqualifyTooLate();
    } else if( enrollDate > newday) {
      event.preventDefault()
      disqualifyFutureDate();
    } else if (this.state.enrolledDate == 'None') {
      event.preventDefault();
      noEntry();
    } else {
      alert('Auto-Enroll Date Submitted ' + enrollDate);
      event.preventDefault();
      const data = this.state.name
      axios.patch('/ClientInfo/1', {
        SEP: 'DIF: Auto-Enrolled ' + this.state.enrolledDate + ' and wants different plan'
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <input name = 'enrolledDate' type="date" onChange={this.handleChange} />
        <input type="submit" value='Submit' className = 'agent-option-button' />
      </form>
    );
  }
}

export default ConfirmDIF;

