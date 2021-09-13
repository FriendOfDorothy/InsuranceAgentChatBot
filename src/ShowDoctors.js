import React, { Component } from 'react';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default class ShowDoctors extends Component{
    constructor(props){
        super(props);
        this.state = {
            providers: '',
            Zip:'None'
        }
            this.renderDoctors = this.renderDoctors.bind(this);
            this.copied = this.copied.bind(this);

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
    }

    componentDidMount = () => {

        axios.get('/ClientInfo/1').then(response => {
           this.setState({
             Zip: response.data.Zipcode
           })
         })
         
         }

         copied = () => {
             alert('NPI Successfully copied :)')
         }



  renderDoctors = () => {
        let doctors = [];   
        const results = this.state.providers;
        const Doctor = ({NPI, Name, Specialty}) => (
          <div className = 'agent-options-review'>
            <div> NPI#: {NPI}</div>
            <div> Name: {Name}</div>
            <div> Specialty: {Specialty}</div>
            <CopyToClipboard number ={NPI}>
            <div>
            <button className = 'agent-option-button' onClick = {this.copied}>Copy NPI</button>
            </div>
            </CopyToClipboard>
            <button>Show Info</button>
            <button>Save to Notes</button>
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

        render(){
            return(
                <div>
                    {this.renderDoctors()}
                </div>
            )
        }
}
