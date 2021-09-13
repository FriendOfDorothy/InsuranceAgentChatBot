import "./AgentOptions.css";
import 'react-calendar/dist/Calendar.css';

function stopReload(e){
  e.preventDefault();
  console.log("The page hasn't reloaded");
}

const SaveDateAandB = (props) => {
  const options = [

    /* buttons confirming if they make their own
    healthcare decsions */

    { text: "Yes", handler: props.actionProvider.ConfirmDecision, id:1 },
    { text: "No", handler: () => {}, id:2 },
  ];

  
 /*  NOTE: Contemplating
  just using in input field and making  boolean calculations based on whether or not the year
  matches the current year "==" and if the difference
   between months is <=3. True, pop IEP. false, keep moving.
  
  */ 

  const AandBMarkup = options.map((option) => (
    <form onClick = {stopReload}>
    <button type = "submit" id= "own-healthcare-decisions"
      className="agent-option-button"
      key={option.id}
      onClick={option.handler}
    > 
      {option.text}
      </button>
      </form>
  ));

  return <div className="agent-options-container">{AandBMarkup}</div>;
};

export default SaveDateAandB;