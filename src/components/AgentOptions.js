import React from "react";

import "./AgentOptions.css";

const AgentOptions = (props) => {
  const options = [

    /* here, we are setting the handler 
    for each button. it should look like the first one */

    { text: "Find Name or \"Name\"", handler: props.actionProvider.HandleLinks, id: 1 },
    { text: 'Zip Code or \"Zip\"', handler: props.actionProvider.ZipcodeInfo, id: 2},
    { text: "Birthday or \"DOB\"", handler: props.actionProvider.GetDOB, id: 3},
    { text: "Find SEP or \"SEP\"", handler: props.actionProvider.StartSEP, id: 4},
    { text: "MARx Check or \"MARx\"", handler: () => {}, id: 5 },
    { text: "DSNP Check or \"DSNP\"", handler: () => {}, id: 6 },
    { text: "LIS Check or \"LIS\"", handler: () => {}, id: 7},
    { text: "Search Doctor or \"Doc\"", handler: () => {}, id: 8},
    { text: "Plan Search or \"Plans\"", handler: () => {}, id: 9},
    { text: "Rx Search or \"Rx\"" , handler: () => {}, id: 10},
    { text: "Custom Notes or \"Custom\"", handler: props.actionProvider.CustomNotes, id: 11},
    { text: "Review Notes, \"Review\", or \"Rev\"", handler: props.actionProvider.ReviewNotes, id: 12},
    { text: "Clear Notes, \"Clear\", or \"Erase\"", handler: props.actionProvider.ClearData, id: 13}
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="agent-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="agent-options-container">{optionsMarkup}</div>;
};


export default AgentOptions;

