import React from "react";
import "./AgentOptions.css";
import axios from 'axios';

class MoveSep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Date: 'None'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleMov = this.handleMov.bind(this);
      this.handleOOC = this.handleOOC.bind(this);
      this.handleInc = this.handleInc.bind(this);
    }

    handleChange(event) {
      this.setState({[event.target.name] : event.target.value});
    }
  

     handleSubmit(event) {
        event.preventDefault();
     }
    
      handleMov(event){
        const todaytwo = new Date();
        const todaythree = new Date();
        const moveDate = new Date(this.state.Date);
        const moveDateAdjustOrigin = new Date(moveDate.setDate(moveDate.getDate() + 1));
        const moveDateAdjustOne = new Date(todaytwo.setMonth(todaytwo.getMonth() - 2));
        const moveDateAdjustOneFinal = new Date(moveDateAdjustOne.setDate(moveDateAdjustOne.getDate() + 1));
        const moveDataAdjustTwo = new Date(todaythree.setMonth(todaythree.getMonth() + 1));
        const moveDataAdjustTwoFinal = new Date(moveDataAdjustTwo.setDate(moveDataAdjustTwo.getDate() + 1));
        const disqualifyTooEarly = () => {
          alert('This person isn\'t eligible for this SEP. \n\nThey haven\'t reached their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
        }
        const disqualifyTooLate = () => {
          alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
        }
        const noEntry = () => alert('Please enter move date for the client. I\'ll need this to determine eligibility :-)');
        console.log('Move past date: ' + moveDateAdjustOneFinal);
        console.log('Move Future Date: ' + moveDataAdjustTwoFinal);
        console.log('Moving Date: ' + moveDateAdjustOrigin);

        if (moveDateAdjustOrigin < moveDateAdjustOneFinal){
          event.preventDefault();
          disqualifyTooLate();
        } else {
          event.preventDefault();
        if (moveDate > moveDataAdjustTwoFinal){
          disqualifyTooEarly();
        } else {
        if (this.state.Date == 'None') {
          event.preventDefault();
          noEntry();
        } else {
          alert("Saved Status: Out of Service Area: " + this.state.Date);
          event.preventDefault();
          axios.patch('/ClientInfo/1' , {
              SEP: "MOV. Moved or Moving of service area: " + this.state.Date
          })
        }

        }}
      }

        handleOOC(event){
          const todaytwo = new Date();
          const todaythree = new Date();
          const moveDate = new Date(this.state.Date);
          const moveDateAdjustOrigin = new Date(moveDate.setDate(moveDate.getDate() + 1));
          const moveDateAdjustOne = new Date(todaytwo.setMonth(todaytwo.getMonth() - 2));
          const moveDateAdjustOneFinal = new Date(moveDateAdjustOne.setDate(moveDateAdjustOne.getDate() + 1));
          const moveDataAdjustTwo = new Date(todaythree.setMonth(todaythree.getMonth() + 1));
          const moveDataAdjustTwoFinal = new Date(moveDataAdjustTwo.setDate(moveDataAdjustTwo.getDate() + 1));
          const disqualifyTooEarly = () => {
            alert('This person isn\'t eligible for this SEP. \n\nThey haven\'t reached their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
          }
          const disqualifyTooLate = () => {
            alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
          }
          const noEntry = () => alert('Please enter move date for the client. I\'ll need this to determine eligibility :-)');
          console.log('Move past date: ' + moveDateAdjustOneFinal);
          console.log('Move Future Date: ' + moveDataAdjustTwoFinal);
          console.log('Moving Date: ' + moveDateAdjustOrigin);
  
          if (moveDateAdjustOrigin < moveDateAdjustOneFinal){
            event.preventDefault();
            disqualifyTooLate();
          } else {
            event.preventDefault();
          if (moveDate > moveDataAdjustTwoFinal){
            disqualifyTooEarly();
          } else {
            if (this.state.Date == 'None') {
              noEntry();
            } else {
              alert("Saved Status: Out of Country: " + this.state.Date);
              event.preventDefault();
              axios.patch('/ClientInfo/1' , {
                  SEP: "RUS. Moved or Moving back into the country: " + this.state.Date
              })
            }
          }}
        }
        handleInc(event){
          const todaytwo = new Date();
          const todaythree = new Date();
          const moveDate = new Date(this.state.Date);
          const moveDateAdjustOrigin = new Date(moveDate.setDate(moveDate.getDate() + 1));
          const moveDateAdjustOne = new Date(todaytwo.setMonth(todaytwo.getMonth() - 3));
          const moveDateAdjustOneFinal = new Date(moveDateAdjustOne.setDate(moveDateAdjustOne.getDate() + 1));
          const moveDataAdjustTwo = new Date(todaythree.setMonth(todaythree.getMonth() + 2));
          const moveDataAdjustTwoFinal = new Date(moveDataAdjustTwo.setDate(moveDataAdjustTwo.getDate() + 1));
          const disqualifyTooEarly = () => {
            alert('This person isn\'t eligible for this SEP. \n\nThey haven\'t reached their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
          }
          const disqualifyTooLate = () => {
            alert('This person isn\'t eligible for this SEP. \n\nThey have exceeded their eligibility period. \n\n Let\'s keep searching! Enter \"SEP\" to navigate back to the probing questions.')
          }
          const noEntry = () => alert('Please enter move date for the client. I\'ll need this to determine eligibility :-)');
          console.log('Move past date: ' + moveDateAdjustOneFinal);
          console.log('Move Future Date: ' + moveDataAdjustTwoFinal);
          console.log('Moving Date: ' + moveDateAdjustOrigin);
  
          if (moveDateAdjustOrigin < moveDateAdjustOneFinal){
            event.preventDefault();
            disqualifyTooLate();
          } else {
            event.preventDefault();
          if (moveDate > moveDataAdjustTwoFinal){
            disqualifyTooEarly();
          } else {
            if( this.state.Date == 'None') {
              noEntry();
            } else {
              alert("Saved Status: Incarceration. Released: " + this.state.Date);
              event.preventDefault();
              axios.patch('/ClientInfo/1' , {
                  SEP: "INC. Recently released from prison: " + this.state.Date
              })
            }
          }}
        }
      
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} >
          <input name = 'Date' value = {this.state.value} type = 'date' onChange = {this.handleChange}></input>
          <button type = 'submit' onClick = {this.handleMov} value = {this.state.value} className = 'agent-option-button' value = "mov">Service Area Change</button>
          <button type = 'submit' onClick = {this.handleOOC} className = 'agent-option-button' value = "rus">Cross Country Move</button>
          <button type = 'submit' onClick = {this.handleInc} className = 'agent-option-button' value = "inc">Prison Release</button>
        </form>

      );
    }
  }
  
  export default MoveSep