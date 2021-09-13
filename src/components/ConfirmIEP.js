import React from "react";
import "./AgentOptions.css";

const ConfirmIEP = (props) => {
  const options = [

    /* Do they have doctors they want to check.  */

    { text: "IEP", handler: props.actionProvider.QuestionIEP, id: 1 },
    { text: "ICEP", handler: props.actionProvider.QuestionICEP, id: 2 },
    { text: "OEP-New", handler: props.actionProvider.QuestionOEPN, id: 3},
    { text: "AEP", handler: props.actionProvider.EnterAEP, id: 4}
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


export default ConfirmIEP;