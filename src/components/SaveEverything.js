import React from "react";
import "./AgentOptions.css";

const SaveEverything = (props) => {
  const options = [

    /* Create a handler to save all of the input fields. Most likely going to havge
    a prop that will inject data into the bot's state from the form fields   */

    { text: "Save", handler: () => {}, id: 1 }
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


export default SaveEverything;