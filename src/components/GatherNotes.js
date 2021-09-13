import React, { Component } from 'react';
import axios from 'axios';
import "./AgentOptions.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';



export default class GatherNotes extends Component {
    constructor() {
        super();
        this.state = {
            FullName: 'None',
            DOB: 'None',
            Zipcode: 'None',
            SEP: 'None',
            MARx: 'None',
            LIS: 'None',
            MCD: 'None',
            Doctors: 'None',
            Rx: 'None',
            Plans: 'None',
            CustomNote: 'None'
        };
    }

    copied = () => alert('Notes copied successfully! You can paste this anywhere you want :-) (Ctrl + V).')

    componentDidMount = () => {
        axios.get("/ClientInfo/1").then(response => {
          this.setState({
            FullName: response.data.FullName,
            DOB: response.data.DOB,
            Zipcode: response.data.Zipcode,
            SEP: response.data.SEP,
            MARx: response.data.MARx,
            LIS: response.data.LIS,
            MCD: response.data.MCD,
            Doctors: response.data.Doctors,
            Rx: response.data.Rx,
            Plans: response.data.Plans,
            CustomNote: response.data.CustomNote
          })
        })
      }

    render(){
        return (
    
            <div className = "agent-options-review" name = 'reviewedNotes'>
  
                    <div>Client Name: {this.state.FullName}</div>
                    <div>---------</div>
                    <div>Date of Birth: {this.state.DOB}</div>
                    <div>---------</div>
                    <div>Zipcode: {this.state.Zipcode}</div>
                    <div>---------</div>
                    <div>Special Election Period: {this.state.SEP}</div>
                    <div>---------</div>
                    <div>MARx Check: {this.state.MARx}</div>
                    <div>---------</div>
                    <div>LIS Eligibility: {this.state.LIS}</div>
                    <div>---------</div>
                    <div>State Medicaid: {this.state.MCD}</div>
                    <div>---------</div>
                    <div>Doctors Searched: {this.state.Doctors}</div>
                    <div>---------</div>
                    <div>Rx Drugs Searched: {this.state.Rx}</div>
                    <div>---------</div>
                    <div>MA Plans Searched: {this.state.Plans}</div>
                    <div>---------</div>
                    <div>Other Notes: {this.state.CustomNote}</div>   
                    <div>---------</div>
                    <CopyToClipboard text = {
                      'Client Name: ' + this.state.FullName + '\n\n' +
                      'Date of Birth: ' + this.state.DOB + '\n\n' +
                      'State and Zipcode: ' + this.state.Zipcode + '\n\n' +
                      'SEP Used: ' + this.state.SEP + '\n\n' +
                      'MARX Info: ' + this.state.MARx + '\n\n' +
                      'LIS Eligibility: ' + this.state.LIS + '\n\n' +
                      'Medicaid Level and Usage: ' + this.state.MCD + '\n\n' +
                      'Doctors Searched: ' + this.state.Doctors + '\n\n' +
                      'Rx Searched: ' + this.state.Rx + '\n\n' +
                      'Plans Searched: ' + this.state.Plans + '\n\n' +
                      'Other Notes: ' + this.state.CustomNote
                      }>
                      <button className = 'agent-option-button' onClick = {this.copied}>Copy to Clipboard</button>
                    </CopyToClipboard>
            </div>
        );
    }
  }
