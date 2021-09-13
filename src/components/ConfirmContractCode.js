import React from "react";
import "./AgentOptions.css";


  function stopReload(e){
    e.preventDefault();
    console.log("The page hasn't reloaded");
  }


const ConfirmContractCode = (props) => {
  const options = [

    /* just set the text to a button that enters the form.
     SaveForm.js is the handler for the enter button */

    {text: "Enter Code", handler: props.actionProvider.GetEnrollmentCode, id: 1 },
  ];

  /* here I put a a prevent default function on the form to keep it 
  from reloding the page on each click, and then add the 
  handler on the button to refer to its handler as normal */

  const intialMarkup = options.map((option) => (
    <form onClick = {stopReload}>
      <input type = "text" className = "agent-options-container"></input>
    <button
    type = 'submit'
  className="agent-option-button"
  key={option.id}
  onClick = {option.handler}
  >{option.text}
  </button>
  </form>
  ));

  return <div className="agent-options-container">{intialMarkup}</div>;
};
export default ConfirmContractCode;