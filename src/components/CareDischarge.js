import React from "react";
import "./AgentOptions.css";
import axios from 'axios';

class CareDischarge extends React.Component {
    constructor(props) {
      super(props);
      this.state = {DischargeDate: 'None'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePACE = this.handlePACE.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name] : event.target.value});
    }
  
    handleSubmit(event) {
      const todaytwo = new Date();
      const todaythree = new Date();
      const dischargeDate = new Date(this.state.DischargeDate);
      const dischargeDateOrigin = new Date(dischargeDate.setDate(dischargeDate.getDate() + 1));
      const dischargeDateAdjustOne = new Date(todaytwo.setMonth(todaytwo.getMonth() + 1));
      const dischargeDateAdjustFinal = new Date(dischargeDateAdjustOne.setDate(dischargeDateAdjustOne.getDate() + 1));
      const dischargeDataAdjustTwo = new Date(todaythree.setMonth(todaythree.getMonth() - 2));
      const dischargeDataAdjustTwoFinal = new Date(dischargeDataAdjustTwo.setDate(dischargeDataAdjustTwo.getDate() + 1));
      const disqualifyFutureDate = () => {
        alert('This person isn\'t eligible for this SEP. \n\nNotification of lost coverage can\'t be greater than the two month period starting today. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
      }
      const disqualifyTooLate = () => {
        alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
      }
      const noEntry = () => alert('Please enter a discharge date for the client. I\'ll need this to determine eligibility :-)');
      console.log('Notification date: ' + dischargeDateOrigin);
      console.log('Limit: ' + dischargeDateAdjustFinal);
      console.log('Lost Coverage qualified date range: ' + dischargeDataAdjustTwoFinal);

      if (dischargeDateOrigin < dischargeDataAdjustTwoFinal) {
        event.preventDefault();
        disqualifyTooLate();
      } else {
      if (dischargeDateOrigin > dischargeDateAdjustFinal) {
        event.preventDefault();
        disqualifyFutureDate();
      } else {
        if (this.state.DischargeDate == 'None') {
          event.preventDefault();
          noEntry();
        } else {
          alert('Discharge Date Submitted: ' + this.state.DischargeDate );
          event.preventDefault();
          axios.patch('/ClientInfo/1', {
            SEP:'LTC: Client is leaving or has been discharged from a skilled nursing facility or long term care: ' + this.state.DischargeDate
          })
        }
    }}
    }

    handlePACE(event) {
      const todaytwo = new Date();
      const todaythree = new Date();
      const dischargeDate = new Date(this.state.DischargeDate);
      const dischargeDateOrigin = new Date(dischargeDate.setDate(dischargeDate.getDate() + 1));
      const dischargeDateAdjustOne = new Date(todaytwo.setMonth(todaytwo.getMonth() + 1));
      const dischargeDateAdjustFinal = new Date(dischargeDateAdjustOne.setDate(dischargeDateAdjustOne.getDate() + 1));
      const dischargeDataAdjustTwo = new Date(todaythree.setMonth(todaythree.getMonth() - 2));
      const dischargeDataAdjustTwoFinal = new Date(dischargeDataAdjustTwo.setDate(dischargeDataAdjustTwo.getDate() + 1));
      const disqualifyFutureDate = () => {
        alert('This person isn\'t eligible for this SEP. \n\nNotification of lost coverage can\'t be greater than the two month period starting today. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
      }
      const disqualifyTooLate = () => {
        alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
      }
      const noEntry = () => alert('Please enter a discharge date for the client. I\'ll need this to determine eligibility :-)');
      console.log('Notification date: ' + dischargeDateOrigin);
      console.log('Limit: ' + dischargeDateAdjustFinal);
      console.log('Lost Coverage qualified date range: ' + dischargeDataAdjustTwoFinal);

      if (dischargeDateOrigin < dischargeDataAdjustTwoFinal) {
        event.preventDefault();
        disqualifyTooLate();
      } else {
      if (dischargeDateOrigin > dischargeDateAdjustFinal) {
        event.preventDefault();
        disqualifyFutureDate();
      } else {
        if(this.state.DischargeDate == 'None'){
          event.preventDefault();
          noEntry();
        } else {
          alert('Discharge Date Submitted: ' + this.state.DischargeDate );
          event.preventDefault();
          console.log(this.state);
          axios.patch('/ClientInfo/1', {
            SEP:'PAC: Client is leaving or has left the PACE program: ' + this.state.DischargeDate
          })
        }
    }}
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} >
            <input name = 'DischargeDate' type="date" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Long Term Care" className = 'agent-option-button' />
          <input type="submit" value="Losing PACE" onClick = {this.handlePACE} className = 'agent-option-button' />
        </form>
      );
    }
  }
  
  export default CareDischarge