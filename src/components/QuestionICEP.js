import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class QuestionICEP extends Component {
  constructor(props) {
    super(props);
    this.state = {BDate: 'None'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  /* it might've been easier to declare simpler constants as 
  i went, but no big deal. Doing it here. */

  handleSubmit(event) {
    const today = new Date();
    const qualifyingdate = new Date();
    const qualifyingdateup = new Date();
    const helpdate = new Date(this.state.BDate);
    const helpdateadjust = new Date(helpdate.setMonth(helpdate.getMonth() - 3));
    const helpdateadjustfinal = new Date(helpdateadjust.setDate(helpdateadjust.getDate() + 1));
    const qualifyingdateuplimit = new Date(qualifyingdateup.setMonth(qualifyingdateup.getMonth() + 3));
    const qualifyingdateuplimitfinal = new Date(qualifyingdateuplimit.setDate(qualifyingdateuplimit.getDate() + 1));
    const qualifyingdatedown = new Date();
    const qualifyingdatedownlimit = new Date(qualifyingdatedown.setMonth(qualifyingdatedown.getMonth() + 2));
    const qualifyingdatedownlimitfinal = new Date(qualifyingdatedownlimit.setDate(qualifyingdatedownlimit.getDate() + 1));
    const delayedpartBadjust = new Date(this.state.BDate);
    const delayedpartB = new Date(delayedpartBadjust.setDate(delayedpartBadjust.getDate() + 1))
    const qualifyingdateadjust = new Date(qualifyingdate.setMonth(qualifyingdate.getMonth() + 3));
    const qualifyingdateadjustFinal = new Date(qualifyingdateadjust.setDate(qualifyingdateadjust.getDate() + 1));
    const disqualifyTooEarly = () => {
      alert('This person isn\'t eligible for this SEP. \n\nThey haven\'t reached their eligibility period. \n\n We can help them on ' + helpdateadjustfinal + '\n\nLet\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
    };
    const disqualifyTooLate = () => {
      alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
    };
    const noEntry = () => {
      alert('Please enter a date for delayed Medicare Part B. I\'ll need it for my notes :-)');
    }
    console.log('Today\'s Date: ' + today);
    console.log('Delayed Part B Date: ' + delayedpartB);
    console.log('Qualifying Date: ' + qualifyingdateadjustFinal);
    console.log('Upper Limit: ' + qualifyingdateuplimitfinal);
    console.log('Lower Limit: ' + qualifyingdatedownlimitfinal);
    console.log('When you can help: ' + helpdateadjustfinal);


      /* for whatever reason, the && || dont work in this case, so laid out conditions individually. weird :/ */


    if(delayedpartB < qualifyingdatedownlimitfinal){
      event.preventDefault();
      disqualifyTooLate();
    } else {
    if(delayedpartB == qualifyingdatedownlimitfinal){
      event.preventDefault();
      disqualifyTooLate();
    } else {
    if(delayedpartB > qualifyingdateuplimitfinal){
      event.preventDefault();
      disqualifyTooEarly();
    } else {
    if(delayedpartB == qualifyingdateuplimitfinal){
      event.preventDefault();
      disqualifyTooEarly();
    } else {
      if (this.state.BDate == 'None') {
        event.preventDefault()
        noEntry();
      } else {
        event.preventDefault();
        alert('Delayed Part B Submitted ' + this.state.BDate);
        axios.patch('/ClientInfo/1', {
          SEP: 'ICEP Eligible. Delayed Part B: ' + this.state.BDate
        })
      }

  }}
}}}


  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <input name = "BDate" type = 'date' onChange = {this.handleChange}></input>
        <input type="submit" value='Confirm' className = 'agent-option-button' />
      </form>
    );
  }
}

export default QuestionICEP;