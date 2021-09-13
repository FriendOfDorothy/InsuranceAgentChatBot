import React from "react";
import "./AgentOptions.css";
import axios from 'axios';

class LoseCreditCoverage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lccDate: 'None'};

    this.handleChange = this.handleChange.bind(this);
    this.handleLCC = this.handleLCC.bind(this);
    this.handleLEC = this.handleLEC.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }
  handleLCC(event) {
    const todaytwo = new Date();
    const todaytwoadjust = new Date(todaytwo.setDate(todaytwo.getDate() + 1));
    const todaythree = new Date();
    const lostDate = new Date(this.state.lccDate)
    const lostDateAdjustOrigin = new Date(lostDate.setDate(lostDate.getDate() + 1));
    //const moveDateAdjustOne = new Date(todaytwo.setMonth(todaytwo.getMonth() - 1));
    const lccDataAdjustTwo = new Date(todaythree.setMonth(todaythree.getMonth() - 3));
    const lccDataAdjustTwoFinal = new Date(lccDataAdjustTwo.setDate(lccDataAdjustTwo.getDate() + 1));
    const disqualifyFutureDate = () => {
      alert('This person isn\'t eligible for this SEP. \n\nNotification of lost coverage can\'t be in the future. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
    }
    const disqualifyTooLate = () => {
      alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
    }
    const noEntry = () => alert('Please enter a notification date for the client. I\'ll need this to determine eligibility :-)');
    console.log('Notification date: ' + lostDateAdjustOrigin);
    console.log('Limit: ' + todaytwoadjust);
    console.log('Lost Coverage qualified date range: ' + lccDataAdjustTwo);

    if (lostDateAdjustOrigin > todaytwoadjust){
      event.preventDefault();
      disqualifyFutureDate();
    } else {
      event.preventDefault();
    if (lostDateAdjustOrigin < lccDataAdjustTwoFinal){
      disqualifyTooLate();
    } else {
      if (this.state.lccDate == 'None') {
        event.preventDefault();
        noEntry();
      } else {
        alert('Lost Coverage Date: ' + this.state.lccDate);
        event.preventDefault();
        console.log(this.state);
        axios.patch('/ClientInfo/1', {
          SEP: 'LCC: They\'ve been notified that they\'re losing coverage or has already lost coverage: ' + this.state.lccDate,
          MCD: ""
        })
      }
  }}
}
handleLEC(event){
  const todaytwo = new Date();
  const todaytwoadjust = new Date(todaytwo.setDate(todaytwo.getDate() + 1));
  const todaytwoadjustfinal = new Date(todaytwoadjust.setMonth(todaytwoadjust.getMonth() + 2));
  const todaythree = new Date();
  const lostDate = new Date(this.state.lccDate)
  const lostDateAdjustOrigin = new Date(lostDate.setDate(lostDate.getDate() + 1));
  //const moveDateAdjustOne = new Date(todaytwo.setMonth(todaytwo.getMonth() - 1));
  const lccDataAdjustTwo = new Date(todaythree.setMonth(todaythree.getMonth() - 2));
  const lccDataAdjustTwoFinal = new Date(lccDataAdjustTwo.setDate(lccDataAdjustTwo.getDate() + 1));
  const disqualifyFutureDate = () => {
    alert('This person isn\'t eligible for this SEP. \n\nNotification of lost coverage can\'t be after two month period starting today. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
  }
  const disqualifyTooLate = () => {
    alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
  }
  const noEntry = () => alert('Please enter a notification date for the client. I\'ll need this to determine eligibility :-)');
  console.log('Notification date: ' + lostDateAdjustOrigin);
  console.log('Limit: ' + todaytwoadjustfinal);
  console.log('Lost Coverage qualified date range: ' + lccDataAdjustTwo);

  if (lostDateAdjustOrigin > todaytwoadjustfinal){
    event.preventDefault();
    disqualifyFutureDate();
  } else {
    event.preventDefault();
  if (lostDateAdjustOrigin < lccDataAdjustTwoFinal){
    disqualifyTooLate();
  } else {
    if (this.state.lccDate == 'None') {
      event.preventDefault();
      noEntry();
    } else {
      alert("Lost Employer Coverage Date: " + this.state.lccDate);
      event.preventDefault();
      axios.patch('/ClientInfo/1' , {
          SEP: "LEC: Leaving employer coverage or has left employer coverage: " + this.state.lccDate,
          MCD:""
      })
    }
}}
}

/* more date logic above. two month period for LEC. 3 month period for LCC */

  render() {
    return (
      <form>
          <input name = 'lccDate' type="date" onChange={this.handleChange} />
        <button type="submit" value="Losing Creditable Coverage" className = 'agent-option-button' onClick = {this.handleLCC}>Losing Creditable Coverage</button>
        <button type="submit" value="Losing Employer Coverage" className = 'agent-option-button' onClick = {this.handleLEC}>Losing Employer Coverage</button>
      </form>
    );
  }
}

export default LoseCreditCoverage