import React from "react";

import "./AgentOptions.css";

const ConfirmDecision = (props) => {
  const options = [

    /* buttons generated from making own healthcare decisions */

    { text: "Yes", handler: () => {}, id: 1 },
    { text: "No", handler: props.actionProvider.StartSEP, id: 2 },
    { text: "Unsure", handler: () => {}, id: 3}
  ];

  const decisionMarkup = options.map((option) => (
    <button
      className="agent-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="agent-options-container">{decisionMarkup}</div>;
};


export default ConfirmDecision;

