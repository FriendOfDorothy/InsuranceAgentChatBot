import React from "react";
import "./AgentOptions.css";
import axios from 'axios';
import { postcodeValidator } from 'postcode-validator';


class ZipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Zipcode: 'None',
                  US_Zip_Code:'',
                  Primary_city: '',
                  State: '',
                  County: '',
                  Country: '',
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const noEntry = () => alert('Please enter a zipcode for the client. I\'ll need this to determine eligibility :-)');
    const invEntry = () => alert('Please enter a valid zipcode for the client. Be sure to double check if the numbers are correct :-)');
    const zippy = postcodeValidator(this.state.Zipcode, 'US');

    if(this.state.Zipcode == 'None'){
      noEntry();
    } else if (zippy == false){
      invEntry();
    } else {

    const zipNumb = parseInt(this.state.Zipcode);
      axios.get('/ZipcodeMeta' , {params: {
        US_Zip_Code: zipNumb
      }}).then(response => {
        if(response.data == false) {
          invEntry()
        } else {
        this.setState({
                      State:response.data[0].State,
                      Primary_city:response.data[0].Primary_city,
                      County:response.data[0].County,
                      country:response.data[0].country});
                      alert('Zipcode submitted: ' + zipNumb);
                      axios.patch('/ClientInfo/1', {
                        Zipcode: zipNumb + '\n' + this.state.Primary_city + ', ' + this.state.State + '\n' + this.state.County + '\n' + this.state.country
                        })
                       }})
                      }
                    }



  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <input  name = 'Zipcode' type="number" value={this.state.value} onChange={this.handleChange} />
          <div className = "agent-options-review" name = 'Primary_city' onChange = {this.handleChange}> City: {this.state.Primary_city}</div>
          <div className = "agent-options-review" name = 'State' onChange = {this.handleChange}> State: {this.state.State}</div>
          <div className = "agent-options-review" name = 'County' onChange = {this.handleChange}>County: {this.state.County}</div>
          <div className = "agent-options-review" name = 'country' onChange = {this.handleChange}>Country: {this.state.country}</div>
        <input className = "agent-options-review" type="submit" value="Submit" className = 'agent-option-button' onClick = {this.returnInfo}/>
      </form>
    );
  }
}

export default ZipForm
  