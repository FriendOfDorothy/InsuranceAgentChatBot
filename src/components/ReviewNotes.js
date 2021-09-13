import React from "react";
import "./AgentOptions.css";
import GatherNotes from './GatherNotes.js';



class ReviewNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: ''
    };
  }


  render() {
    return (
    <GatherNotes />
    );
  }
}

export default ReviewNotes