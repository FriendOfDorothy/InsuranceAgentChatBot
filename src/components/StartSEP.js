import React from "react";
import "./AgentOptions.css";

const StartSEP = (props) => {
  const options = [

    /* buttons generated as SEP questions. 
    click on the corresponding question to fill information */

    { text: "Are they currently on State Medicaid?", handler: props.actionProvider.QuestionMedicaid, id: 1 },
    { text: "Received disability for two years and turning 65 soon?", handler: props.actionProvider.IEPTwo, id: 2 },
    { text: "Have they moved recently?", handler:props.actionProvider.MoveSep, id: 3 },
    { text: "Notified that they're losing coverage?", handler: props.actionProvider.LoseCreditCoverage, id: 4 },
    { text: "Discharged from a nursing home, losing PACE, or long term care?", handler: props.actionProvider.CareDischarge, id: 5},
    { text: "Do they have a chronic disease?", handler: props.actionProvider.CHRSEP, id: 6},
    { text: "Already have Rx covered by VA?", handler: props.actionProvider.ConfirmOCC, id: 7},
    { text: "Auto-Enrolled in Medicare?", handler: props.actionProvider.ConfirmDIF, id: 8},
    { text: "None: Take me to check LIS", handler: () => {}, id: 9,},
    { text: "None: IEP, ICEP, AEP or OEP-New", handler: props.actionProvider.ConfirmIEP, id: 10}
  ];

  const questionMarkup = options.map((option) => (
    <button
      className="agent-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="agent-options-container">{questionMarkup}</div>;
};


export default StartSEP;

