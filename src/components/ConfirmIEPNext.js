import React from "react";
import "./AgentOptions.css";

const ConfirmIEPNext = (props) => {
  const options = [

    /* Do they have doctors they want to check. They said no. check for Rx  */

    { text: "Yes", handler: () => {}, id: 1 },
    { text: "No", handler: props.actionProvider.ConfirmContractCode, id: 2 },
  ];

  const IEPMarkup = options.map((option) => (
    <button
      className="agent-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="agent-options-container">{IEPMarkup}</div>;
};


export default ConfirmIEPNext;