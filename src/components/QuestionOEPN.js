import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class QuestionOEPN extends Component {
  constructor(props) {
    super(props);
    this.state = {nDate: 'None'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {

    /* not quite sure about all of the specifications for this one,
    so just put a limit on the plan date < Jan 1st of any year..
    will have to ask if there's a specific time period they had to get
    the previous plan */

    const OEPdatelowerlimit = new Date();
    OEPdatelowerlimit.setMonth(0);
    OEPdatelowerlimit.setDate(1);
    const OEPdateupperlimit = new Date();
    OEPdateupperlimit.setMonth(2);
    OEPdateupperlimit.setDate(31);
    const lastEnrolled = new Date(this.state.nDate);
    lastEnrolled.setDate(lastEnrolled.getDate() + 1);
    const disqualifyUsed = () => {
      alert('This person isn\'t eligible for this SEP. \n\nThey have already used this opportunity. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
    }

    console.log('Upper Limit: ' + OEPdatelowerlimit);
    console.log('Lower Limit: ' + OEPdateupperlimit);
    console.log('Last Enrolled Date: ' + lastEnrolled);

    if(lastEnrolled > OEPdatelowerlimit){
      event.preventDefault();
      disqualifyUsed();
    } else {
    event.preventDefault();
    alert('OEP-N successfully submitted ' + lastEnrolled);
    axios.patch('/ClientInfo/1', {
      SEP: 'OEP-N Eligible. Last MA plan: ' + lastEnrolled
    })
  }}

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <input name = "nDate" type = 'date' onChange = {this.handleChange}></input>
        <input type="submit" value='Confirm' className = 'agent-option-button' />
      </form>
    );
  }
}

export default QuestionOEPN;