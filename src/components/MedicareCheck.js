import React from "react";
import "./AgentOptions.css";


function stopReload(e){
    e.preventDefault();
    console.log("The page hasn't reloaded");
  }


const CheckMedicareParts = (props) => {
  const options = [

    /* yes no options for A and B check. Might just add radio buttons if thats
    easier */

    { text: "Yes", handler: props.actionProvider.ConfirmMedicarePartAandB, id: 1 },
    { text: "No", handler: () => {}, id: 2},
    { text: "Unsure", handler:() => {}, id: 3},
  ];

  const medicareMarkup = options.map((option) => (
    <form onClick = {stopReload}>
        <button type = "submit" id= "medicare-check"
      className="agent-option-button"
      key={option.id}
      onClick={option.handler}
      >
      {option.text}
      </button>
      </form>
  ));

  return <div className="agent-options-container">{medicareMarkup}</div>;
};

export default CheckMedicareParts;