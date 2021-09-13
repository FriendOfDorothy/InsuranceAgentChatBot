import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class QuestionIEP extends Component {
  constructor(props) {
    super(props);
    this.state = {DOB: 'None'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    axios.get('/ClientInfo/1').then(response => {
        this.setState({
            DOB: response.data.DOB
      })
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    /* Second Verse, same as the first for IEP.
    please reference IEP 2 for in depth notes :-) */

    const bday = new Date(this.state.DOB);
    const bdaythree = new Date(this.state.DOB);
    const bdaythreeadjustorigin = new Date(bdaythree.setDate(bdaythree.getDate() + 1));
    const today = new Date();
    const Qualify = new Date();
    const QualifyAdjust = new Date(Qualify.setFullYear(Qualify.getFullYear() - 65));
    const todayBump = new Date();
    const todaybumpadjustorigin = new Date(todayBump.setDate(todayBump.getDate() + 1));
    const todayUpperLimit = new Date();
    const todayupperlimitadjust = new Date (todayUpperLimit.setMonth(todayUpperLimit.getMonth() + 3));
    const todayupperlimitadjustfinal = new Date(todayupperlimitadjust.setDate(todayupperlimitadjust.getDate() + 1))
    const todayLowerLimit = new Date();
    const todaylowerlimitadjust = new Date(todayLowerLimit.setMonth(todayLowerLimit.getMonth() - 3));
    const todaylowerlimitadjustfinal = new Date(todaylowerlimitadjust.setDate(todaylowerlimitadjust.getDate() + 1));
    const QualifyingYear = new Date(today.setFullYear(today.getFullYear() - 65));
    const QualifyingYearAdjustDown = new Date(QualifyingYear.setMonth(QualifyingYear.getMonth() - 3));
    const QualifyingYearAdjustUp = new Date(QualifyAdjust.setMonth(QualifyAdjust.getMonth() + 3));
    const QualifyingYearAdjustDownFinal = new Date(QualifyingYearAdjustDown.setDate(QualifyingYearAdjustDown.getDate() + 1));
    const QualifyingYearAdjustUpFinal = new Date(QualifyingYearAdjustUp.setDate(QualifyingYearAdjustUp.getDate() + 1));
   // const QualifyingYearAdjustTwo = new Date(QualifyingYearTwo.setMonth(QualifyingYearTwo.getMonth() + 3));
    const disqualifyTooEarly = () => alert('This person isn\'t eligible for this SEP. \n\nThey haven\'t reached their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
    const disqualifyTooLate = () => alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
    const disqualifyAge = () => alert('This person isn\'t eligible for this SEP. \n\nThey are not currently turning 65. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
    const noEntry = () => alert('Please enter a date of birth for the client. \n\n You can type in \'DOB\' or \'birthday\' to enter one :-)');

    /* More date Logic. This one is a tad tricky.
 just did another axios call to DOB. Going to have to put in an 
 error handler for empty values. added it into the function and works 
 like a charm :) */

 /* Effective date has to be within three months of birthday
 and three months after birthday. Birthday also has to validate the client
 turning 65. So apparently that date is a mutable object. Everytime you change
 that becomes the state until you change it again.so its all laid out
 in chronological order. or.... I just create new date objects and 
 mutate them individually. Figured out you can just mutate without declaring constants.
 im an idiot :') */

 console.log('Birthday Year: '+ bdaythreeadjustorigin);
 console.log('Adjusted Birth Year: ' + todaybumpadjustorigin);
 console.log('Birthday Upper Limit: ' + todayupperlimitadjustfinal);
 console.log('Birthday Lower Limit: ' + todaylowerlimitadjustfinal);
 console.log('Qualifying Date Down: ' + QualifyingYearAdjustDownFinal);
 console.log('Qualifying Date Up: ' + QualifyingYearAdjustUpFinal);


if (todaybumpadjustorigin < todaylowerlimitadjustfinal){
  event.preventDefault();
  disqualifyTooEarly();
} else {
if (todaybumpadjustorigin > todayupperlimitadjustfinal){
  event.preventDefault()
  disqualifyTooLate();
} else {
if (bdaythreeadjustorigin < QualifyingYearAdjustDownFinal || bdaythreeadjustorigin > QualifyingYearAdjustUpFinal){
  event.preventDefault()
  disqualifyAge();
} else {
if(this.state.DOB == 'None'){
  event.preventDefault();
  noEntry();
} else {
    alert('IEP Submitted ' + this.state.DOB);
    axios.patch('/ClientInfo/1', {
      SEP: 'IEP Eligible. DOB: ' + this.state.DOB
    })
  }}
}} 
}

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <div className = "agent-options-review">DOB: {this.state.DOB}</div>
        <input type="submit" value='Confirm' className = 'agent-option-button' />
      </form>
    );
  }
}

export default QuestionIEP;

