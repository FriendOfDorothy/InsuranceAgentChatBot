import React from "react";
import "./AgentOptions.css";


function stopReload(e){
  e.preventDefault();
  console.log("The page hasn't reloaded");
}

const ConfirmMedicarePartAandB = (props) => {
  const options = [

    /* just set the text to a button that enters the form.
     SaveForm.js is the handler for the enter button */

    { text: "Save Date", handler: () => {}, id:1 },
   // { text: "They Delayed Part B", handler: () => {}, id: 2} Cant render with calender popping up twice.
   //will figure out later
  ];

  const aMarkup = options.map((option) => (
    <form onClick = {stopReload}>
      <button  id= "A"
      className="agent-option-button"
      key={option.id}
      onClick={option.handler}
      >
      {option.text}
      </button>
      </form>

  ));

  return <div className="agent-options-container">{aMarkup}</div>;
};

export default ConfirmMedicarePartAandB;