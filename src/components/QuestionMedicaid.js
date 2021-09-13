import React from "react";
import "./AgentOptions.css";
import axios from 'axios';



class QuestionMedicaid extends React.Component {
    constructor(props) {
      super(props);
      this.state = {MCD: 'None'};
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleMCD = this.handleMCD.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handlePreviousPlan = this.handlePreviousPlan.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
      event.preventDefault();
    }

      handlePreviousPlan(event){
        const today = new Date();
        const newday = new Date();
        const mcddate = new Date(this.state.MCD);
        mcddate.setDate(mcddate.getDate() + 1)
        const todaymonth = today.getMonth() + 1;
        const mcdnotedate = new Date(this.state.MCD);
        mcdnotedate.setDate(mcdnotedate.getDate() + 1);
        const mcdmonth = mcdnotedate.getMonth() + 1;
        const disqualifyUsed = () => alert('This person isn\'t eligible for this SEP. \n\nThe client has already used this opportunity. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
        const disqualifyAEP = () => alert('This person isn\'t eligible for this SEP. \n\nIt is currently the Annual Enrollment Period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
        const disqualifyFutureDate = () => alert('This person isn\'t eligible for this SEP. \n\nPrevious plan date cannot be in the future. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
        const noEntry = () => alert('Please enter a date for Medicaid. I need this to confirm eligibility!');
        
        if(todaymonth == 4 && mcdmonth == 4) {
          disqualifyUsed();
        } else if (todaymonth == 4 && mcdmonth == 5) {
          disqualifyUsed();
        } else if (todaymonth == 4 && mcdmonth == 6) {
          disqualifyUsed();
        } else if (todaymonth == 5 && mcdmonth == 4) {
          disqualifyUsed();
        } else if (todaymonth == 5 && mcdmonth == 5) {
          disqualifyUsed();
        } else if (todaymonth == 5 && mcdmonth == 6) {
          disqualifyUsed();
        } else if (todaymonth == 6 && mcdmonth == 4) {
          disqualifyUsed();
        } else if (todaymonth == 6 && mcdmonth == 5) {
          disqualifyUsed();
        } else if (todaymonth == 6 && mcdmonth == 6) {
          disqualifyUsed();
        } else if (todaymonth == 7 && mcdmonth == 7) {
          disqualifyUsed();
        } else if (todaymonth == 7 && mcdmonth == 8) {
          disqualifyUsed();
        } else if (todaymonth == 7 && mcdmonth == 9) {
          disqualifyUsed();
        } else if (todaymonth == 8 && mcdmonth == 7) {
          disqualifyUsed();
        } else if (todaymonth == 8 && mcdmonth == 8) {
          disqualifyUsed();
        } else if (todaymonth == 8 && mcdmonth == 9) {
          disqualifyUsed();
        } else if (todaymonth == 9 && mcdmonth == 7) {
          disqualifyUsed();
        } else if (todaymonth == 9 && mcdmonth == 8) {
          disqualifyUsed();
        } else if (todaymonth == 9 && mcdmonth == 9){
          disqualifyUsed();
        } else if (todaymonth == 1 && mcdmonth == 1) {
          disqualifyUsed();
        } else if (todaymonth == 1 && mcdmonth == 2) {
          disqualifyUsed();
        } else if (todaymonth == 1 && mcdmonth == 3) {
          disqualifyUsed();
        } else if (todaymonth == 2 && mcdmonth == 1) {
          disqualifyUsed();
        } else if (todaymonth == 2 && mcdmonth == 2) {
          disqualifyUsed();
        } else if (todaymonth == 2 && mcdmonth == 3) {
          disqualifyUsed();
        } else if (todaymonth == 3 && mcdmonth == 1) {
          disqualifyUsed();
        } else if (todaymonth == 3 && mcdmonth == 2) {
          disqualifyUsed();
        } else if (todaymonth == 3 && mcdmonth == 3) {
          disqualifyUsed ();
        } else if (todaymonth == 10) {
          disqualifyAEP();
        } else if (todaymonth == 11) {
          disqualifyAEP();
        } else if (todaymonth == 12) {
          disqualifyAEP();
        } else if (mcddate > newday) {
          disqualifyFutureDate();
        } else if (this.state.MCD == 'None') {
          noEntry()
        } else {
          alert("Medicaid Period Submitted: " + mcddate);
          event.preventDefault();
          axios.patch('/ClientInfo/1' , {
              MCD: "Medicaid period used: " + mcddate,
              SEP: "MDE" 
          }) 
        }
        }
    


      handleStatusChange(event){
        const today = new Date();
        const todaylimit = new Date();
        const statusDate = new Date(this.state.MCD);
        todaylimit.setMonth(today.getMonth() - 3);
        const disqualifyTooLate = () => alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
        const disqualifyFutureDate = () => alert('This person isn\'t eligible for this SEP. \n\nNotification date must be in the past. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');

        console.log('Today\'s Date: ' + today);
        console.log('Three Month limit: ' + todaylimit);
        console.log('Date Entered: ' + statusDate);

        if(statusDate < todaylimit){
          disqualifyTooLate();
        } else {
          if(statusDate > today){
          disqualifyFutureDate();
          } else {
      
          alert("Medicaid Status Change Submitted: " + statusDate);
          event.preventDefault();
          axios.patch('/ClientInfo/1' , {
              MCD: "Medicaid Status Changed " + statusDate,
              SEP: "MDE" 
          }) 
        }}}


        handleNotSure(event){
            alert("I'll save this answer just in case. Let's keep looking for now!");
            event.preventDefault();
            axios.patch('/ClientInfo/1' , {
                MCD: "Unsure about quarterly period. Verify via MARx"
            })
        }

        handleMCD(event){

          const today = new Date();
          const todaylimit = new Date();
          const statusDate = new Date(this.state.MCD);
          todaylimit.setMonth(today.getMonth() - 3);
          const disqualifyTooLate = () => alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
          const disqualifyFutureDate = () => alert('This person isn\'t eligible for this SEP. \n\nNotification date must be in the past. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.');
  
          console.log('Today\'s Date: ' + today);
          console.log('Three Month limit: ' + todaylimit);
          console.log('Date Entered: ' + statusDate);
  
          if(statusDate < todaylimit){
            disqualifyTooLate();
          } else {
            if(statusDate > today){
            disqualifyFutureDate();
            } else {

            alert("Saved New Medicaid Status: " + this.state.MCD);
            event.preventDefault();
            axios.patch('/ClientInfo/1' , {
                MCD: "New to Medicaid. Notified they'll be receiving state medicaid " + this.state.MCD,
                SEP: "MCD"
            })
        }}} 
      
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} >
          <input name = 'MCD' type="date"  onChange={this.handleChange} />
          <button type = 'submit' onClick = {this.handlePreviousPlan} className = 'agent-option-button'>Previous Plan (Enroll Date)</button>
          <button type = 'submit' onClick = {this.handleStatusChange} className = 'agent-option-button' value = "Status Change">Status Change (Notified Date)</button>
          <button  type = 'submit' onClick = {this.handleMCD} className = 'agent-option-button' value = "New MCD">New Medicaid (Notified Date)</button>
          </form>

      );
    }
  }

  
  export default QuestionMedicaid