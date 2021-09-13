import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class EnterAEP extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const today = new Date();
    const todayadjusted = new Date(today.setMonth(today.getMonth() + 1));
   // const todayadjustedforday = new Date(todayadjusted.setDate(todayadjusted.getDate() - 1))
    const disqualify = () => alert('It is currently not the Annual Election Period. \n\n See if we can find an SEP for enrollment. \n\n Type \'SEP\' for a list of questions you can ask!');

    /* kind of had to think about this one a little different.
    sometimes simple is better :-) */

    if(todayadjusted.getMonth() == 10 && todayadjusted.getDate() > 15 || todayadjusted.getMonth() == 11 || todayadjusted.getMonth() == 12 && todayadjusted.getDate() < 7){

    console.log(todayadjusted);
    console.log(todayadjusted.getMonth());
    event.preventDefault();
    alert('AEP successfully submitted: ' + todayadjusted);
    axios.patch('/ClientInfo/1', {
      SEP: 'AEP: ' + todayadjusted
    })
  } else {
    event.preventDefault();
    disqualify();
  }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="submit" value='Confirm AEP' className = 'agent-option-button' />
      </form>
    );
  }
}

export default EnterAEP;