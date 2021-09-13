import React from "react";
import "./AgentOptions.css";

const CheckRx = (props) => {
  const options = [

    /* Rx check for coverage. Move on to contract code  */

    { text: "Yes", handler: () => {}, id: 1 },
    { text: "No", handler: props.actionProvider.ConfirmContractCode, id: 2 },
  ];

  const RxMarkup = options.map((option) => (
    <button
      className="agent-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="agent-options-container">{RxMarkup}</div>;
};


export default CheckRx;