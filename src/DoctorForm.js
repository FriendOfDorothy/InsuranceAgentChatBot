import React, {Component} from "react";
import axios from 'axios';
import { postcodeValidator } from 'postcode-validator';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '',
                  Zip: 'None',
                  lastName: '',
                  US_Zip_Code:'',
                  Primary_city: '',
                  State: '',
                  County: '',
                  Country: '',
                  genderOption: 'None',
                  NPI: '',
                  Name: '',
                  OrgName: '',
                  Speciality:'',
                  PhoneNumber:'',
                  Address:'',
                  providers: '',
                  isocode: ''
                  }
                  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewZip = this.handleNewZip.bind(this);
    this.renderDoctors = this.renderDoctors.bind(this);
    this.copied = this.copied.bind(this);

  }
  
  componentDidMount = () => {

   axios.get('/ClientInfo/1').then(response => {
      this.setState({
        Zip: response.data.Zipcode
      })
    })
    
    }



  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  

  copied(event){
    alert('Successfully copied NPI!\n\nPaste this in the NPI# field to get details and check for coverage! :-)' )
  }

  renderDoctors(){
    let doctors = [];
    const results = this.state.providers;    

    const Doctor = ({NPI, Name, Specialty}) => (
      <div className = 'agent-options-review'>
        <div> NPI#: {NPI}</div>
        <div> Name: {Name}</div>
        <div> Specialty: {Specialty}</div>
        <CopyToClipboard text ={NPI}>
        <div>
        <button className = 'agent-option-button' onClick = {this.copied}>Copy NPI</button>
        </div>
        </CopyToClipboard>
        <button className = 'agent-option-button'>Check Coverage</button>
      </div>
    );
      
      for(var i = 0; i < results.length; i++){

      const results = this.state.providers;


      var NPI = results[i].npi;
      var Name = results[i].name;
      var Specialty = results[i].taxonomy;
      var key = results[i].npi;

      doctors.push(<Doctor 
        NPI = {NPI}
        Name = {Name}
        Specialty = {Specialty}
        key = {key} />);
     }
    return(doctors);
    }

  handleSubmit(event) {


    const parsedZip = parseInt(this.state.Zip);
    const zippy = postcodeValidator(parsedZip, 'US');
    console.log(parsedZip);
    const invEntry = () => alert('Please enter a valid zipcode for the client. Be sure to double check if the numbers are correct :-)');
    if(zippy == false){
      event.preventDefault();
      invEntry();
      
    } else {

      axios.get('/ZipcodeMeta' , {params: {
        US_Zip_Code: parsedZip
      }}).then(response => {
        this.setState({
                      State:response.data[0].State,
                      Primary_city:response.data[0].Primary_city,
                      County:response.data[0].County,
                      country:response.data[0].country});
                     })

    if(this.state.firstName == '' && this.state.lastName == '' && this.state.Zip != 'None'){

      /* if we have just the zipcode */

      event.preventDefault();
      alert('One moment please! :) \n\n This might take a minute, but I\'m searching for a doctor in\n' + this.state.Zip + '\n\nThis would be a good time to build rapport with your client!');
      const parsedZip = parseInt(this.state.Zip);
      const stringZip = JSON.stringify(parsedZip);
      const authkey = 'ESxzXkpn3PKF3jS1F862cSG8UBLPL1ju';
      const query = 'primary';
      const type = 'Facility';  
      axios.get('https://marketplace.api.healthcare.gov/api/v1/providers/autocomplete?apikey='+authkey+'&q='+query+'&zipcode='+stringZip+'&type='+type)
      .then(response =>{
        this.setState({
          providers: response.data
        })
      })
     } else {

      /* if there is no zipcode entered */

        event.preventDefault();

        if(this.state.Zip == 'None'){
          const noEntry = () => alert('Please enter a zipcode for the client. I\'ll need this to search for nearby Doctors :-)');
          noEntry();

        } else {

          /*  if the name fields are not empty and the zipcode 
          is invalid or false */

          if (this.state.firstName != '' || this.state.lastName != ''){


            if(zippy == false){
              event.preventDefault();
              invEntry();

            } else {

              /* if there is some type of query entered */

              event.preventDefault();
              alert('One moment please! :) \n\nThis might take a minute, but I\'m searching for doctor ' + this.state.firstName + ' ' + this.state.lastName + ' in\n' + this.state.Zip + '\n\nThis would be a good time to build rapport with your client!');
              const parsedZip = parseInt(this.state.Zip);
              const stringZip = JSON.stringify(parsedZip);
              const authkey = 'ESxzXkpn3PKF3jS1F862cSG8UBLPL1ju';
              const query = this.state.firstName + ' ' + this.state.lastName;
              const type = 'Individual';  
              axios.get('https://marketplace.api.healthcare.gov/api/v1/providers/autocomplete?apikey='+authkey+'&q='+query+'&zipcode='+stringZip+'&type='+type)
              .then(response =>{
                this.setState({
                  providers: response.data
                })
              })
                              
      }}}
  }}}

  handleNewZip(event) {
    const parsedZip = parseInt(this.state.Zip);
    const zippy = postcodeValidator(parsedZip, 'US');
    const noGender = () => alert('Please enter a gender for the doctor. I need this so I know what to search for :-)');
    const invEntry = () => alert('Please enter a valid zipcode for the client. Be sure to double check if the numbers are correct :-)');
    if(this.state.DoctorName == 'None') {
      const noEntry = () => alert('Please enter a name for the Doctor. I\'ll need this to search for the Doctor :-)');
      noEntry();
    } else if(zippy == false) {
      event.preventDefault();
      invEntry();
    } else {
    event.preventDefault();
    axios.get('/ZipcodeMeta' , {params: {
      US_Zip_Code: parsedZip
    }}).then(response => {
      this.setState({
                    State:response.data[0].State,
                    Primary_city:response.data[0].Primary_city,
                    County:response.data[0].County,
                    country:response.data[0].country});
                   alert('Searching ' + this.state.genderOption + ' doctor:\n' + this.state.DoctorName + '\n' + parsedZip + '\n' + this.state.State + '\n' + this.state.Primary_city + '\n' + this.state.County + '\n' + this.state.country);
                     })
  }}

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} >
        <div className = "agent-options-review"> First Name:</div>
          <input name = 'firstName' type="text" onChange={this.handleChange} />
          <div className = "agent-options-review"> Last Name: </div>
          <input name = 'lastName' type="text" onChange={this.handleChange} />
          <div className = "agent-options-review"> Zipcode: </div>
          <input  name = 'Zip' type="Text" placeholder = {this.state.Zip} onChange={this.handleChange} />
        <input type="submit" value='Find Doctor' className = 'agent-option-button' />
        <input type="submit" value='Different Zipcode' className = 'agent-option-button' onClick = {this.handleNewZip} />
      </form>
      <div className = 'agent-options-review'><h3>Doctors Found:</h3></div>
      {this.renderDoctors()}
      </div>
    );
  }
}

export default DoctorForm;