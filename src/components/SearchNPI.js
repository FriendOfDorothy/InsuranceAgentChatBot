import React, {Component} from "react";
import "./AgentOptions.css";
import axios from 'axios';


class SearchNPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
                NPI: '',
                Name: '',
                Credential: '',
                Address: '',
                Phone: ''
            };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNote = this.addNote.bind(this);
    this.addDoctor = this.addDoctor.bind(this);
  }

  addDoctor(){

    if(this.state.NPI == ''){
        alert('Please enter an NPI# for the client. I\'ll need this to get details on your doctor.\n\nYou can type in the word \'Doc\' to search for your Doctor\'s NPI :-)');
    } else {

    axios.get('/ClientInfo/1')
    .then(response => {
        this.setState({
            Doctors: response.data.Doctors
        })

        axios.patch('/ClientInfo/1' , {
            Doctors: this.state.Doctors + '------------------ NPI: ' + this.state.NPI + '\nName: ' + this.state.Name + '\nAddress: ' + this.state.Address + '\nPhone: ' + this.state.Phone 
        })

        alert('Doctor ' + this.state.Name + ' has been added to your notes :)')
    })
}}

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  addNote() {

    if(this.state.NPI == ''){
        alert('Please enter an NPI# for the client. I\'ll need this to get details on your doctor.\n\nYou can type in the word \'Doc\' to search for your Doctor\'s NPI :-)');
    } else {

          axios.patch('/ClientInfo/1' , {
              Doctors: 'NPI: ' + this.state.NPI + '\nName: ' + this.state.Name + '\nAddress: ' + this.state.Address + '\nPhone: ' + this.state.Phone
          })

          alert('Doctor ' + this.state.Name + ' successfully added to notes!');
  }}

  handleSubmit(event) {
    if (this.state.npi == undefined){
      event.preventDefault();
      const noEntry = () => alert('Please enter an NPI# for the client. I\'ll need this to get details on your doctor.\n\nYou can type in the word \'Doc\' to search for your Doctor\'s NPI :-)');
      noEntry();
    } else {
      event.preventDefault();
    axios.get('https://npiregistry.cms.hhs.gov/api/?number=' + this.state.npi + '&enumeration_type=&taxonomy_description=&first_name=&use_first_name_alias=&last_name=&organization_name=&address_purpose=&city=&state=&postal_code=&country_code=&limit=&skip=&version=2.1')
    .then(response => {
        if(response.data.Errors){
            alert('Please enter a valid NPI number.\n\nYou can type in the word \'Doc\' to search for your Doctor\'s NPI :-) ')
        } else {
            alert('NPI Successfully submitted: ' + this.state.npi);
            const info = response.data;
            console.log(info);
            this.setState({
                NPI: info.results[0].number,
                Name: info.results[0].basic.name,
                Credential: '(' +info.results[0].taxonomies[0].desc + ')',
                Address: info.results[0].addresses[0].address_1 + ', ' + info.results[0].addresses[0].city + ' ' + info.results[0].addresses[0].state + ' ' + info.results[0].addresses[0].postal_code,
                Phone: info.results[0].addresses[0].telephone_number
            })

            if(this.state.Credential === false){
                this.state.Credential = '';
            }
        }
    })
  }}

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit} >
          <div className = 'agent-options-review'>NPI #</div>
          <input name = 'npi' type="number" value= {this.state.npi} onChange={this.handleChange} />
        <input type="submit" value='Submit NPI' className = 'agent-option-button' />
      </form>
      <div className = 'agent-options-review'>
        <h3> Doctor NPI#:</h3>
        <div>{this.state.NPI}</div>
        <h3>Doctor Name:</h3>
        <div>{this.state.Name} {this.state.Credential}</div>
        <h3>Address:</h3>
        <div>{this.state.Address}</div>
        <h3>Phone Number:</h3>
        <div>{this.state.Phone}</div>
      </div>
      <input className = 'agent-option-button' type = 'button' value = 'Save to Notes' onClick = {this.addNote}></input>
      <input className = 'agent-option-button' type = 'button' value = 'Add Additional Doctor' onClick = {this.addDoctor}></input>
      </div>
    );
  }
}

export default SearchNPI;

