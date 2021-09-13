import { createChatBotMessage } from 'react-chatbot-kit';
import AgentOptions from "./components/AgentOptions.js";
import DisplayNameForm from "./components/DisplayNameForm.js";
import GetDOB from './components/GetDOB';
import React from "react";
import ConfirmDecision from './components/ConfirmDecision.js';
import StartSEP from './components/StartSEP.js';
import ConfirmIEP from './components/ConfirmIEP.js';
import ConfirmContractCode from './components/ConfirmContractCode.js';
import CustomNotes from './components/CustomNotes.js';
import ReviewNotes from './components/ReviewNotes.js';
import CheckRx from './components/CheckRx.js';
import QuestionMedicaid from './components/QuestionMedicaid.js';
import IEPTwo from './IEPTwo.js';
import MoveSep from './components/MOVSEP.js';
import ZipForm from './components/ZipForm.js';
import LoseCreditCoverage from './components/LoseCreditCoverage.js';
import CareDischarge from './components/CareDischarge.js';
import CHRSEP from './components/CHRSEP.js';
import CHRList from './components/CHRList.js';
import ConfirmOCC from './components/ConfirmOCC.js';
import ConfirmDIF from './components/ConfirmDIF.js';
import QuestionIEP from './components/QuestionIEP.js';
import QuestionICEP from './components/QuestionICEP.js';
import QuestionOEPN from './components/QuestionOEPN.js';
import EnterAEP from './components/EnterAEP.js';
import ClearData from './components/ClearData.js';
import AddNotes from './components/AddNote.js';
import DoctorForm from './DoctorForm.js';
import SearchNPI from './components/SearchNPI.js';



const config = { 

/* right here, were giving the bot a name
doing a create chatbot message function to display, along with a
widget that displays buttons to specify options. First your register your widget
with a seperate js file => widgetName: "NameOfJSfile.js" =>
[{widgetFunc: (props => <NameofJSFile.js {...props} />,}, Enter next widget here if you
have one]) ---NOTE: The widget name after (props) has to equal the const variable declared
in the file its reffering too. I.E javaLinks has a const name "Pathways. 
Thats whats in green!" */

  botName: "MediBot",
  initialMessages: [createChatBotMessage("Hey! I'm MediBot, Your Medicare Expert! How can I help?"),
createChatBotMessage('Type \"Help\" for hints on how to use MediBot!', {delay: 1000})
],

  widgets: 
  [

    {
        widgetName: 'SearchNPI',
        widgetFunc: (props) => <SearchNPI {...props} />
    },

    {
        widgetName: 'DoctorForm',
        widgetFunc: (props) => <DoctorForm {...props} />
    },

    {
        widgetName: 'AddNotes',
        widgetFunc: (props) => <AddNotes {...props} />
    },

    {
        widgetName: 'ClearData',
        widgetFunc: (props) => <ClearData {...props} />
    },

    {
        widgetName: 'EnterAEP',
        widgetFunc: (props) => <EnterAEP {...props} />
    },

    {
       widgetName: 'QuestionOEPN',
       widgetFunc: (props) => <QuestionOEPN {...props} /> 
    },

    {
        widgetName: 'QuestionICEP',
        widgetFunc: (props) => <QuestionICEP {...props} />
    },

    {
        widgetName: 'QuestionIEP',
        widgetFunc: (props) => <QuestionIEP {...props} />
    },

    {
        widgetName: 'ConfirmDIF',
        widgetFunc: (props) => <ConfirmDIF {...props} />
    },

    {
        widgetName: "ConfirmOCC",
        widgetFunc: (props) => <ConfirmOCC {...props} />
    },
    {
        widgetName: "CHRList",
        widgetFunc: (props) => <CHRList {...props} />
    },

    {
        widgetName: 'CHRSEP',
        widgetFunc: (props) => <CHRSEP {...props} />
    },

    {
        widgetName: 'CareDischarge',
        widgetFunc: (props) => <CareDischarge {...props} />
    },
    
    {
        widgetName: 'LoseCreditCoverage',
        widgetFunc: (props) => <LoseCreditCoverage {...props} />
    },

    {
        widgetName: "MoveSep",
        widgetFunc: (props) => <MoveSep {...props} />
    },

    {
        widgetName: "IEPTwo",
        widgetFunc: (props) => <IEPTwo {...props} />
    },

    {
        widgetName: "QuestionMedicaid",
        widgetFunc: (props) => <QuestionMedicaid {...props} />
    },

    {
        widgetName: "CheckRx",
        widgetFunc: (props) => <CheckRx {...props} />
    },

    {
        widgetName: "ReviewNotes",
        widgetFunc: (props) => <ReviewNotes {...props} />
    },

    {
        widgetName: "CustomNotes",
        widgetFunc: (props) => <CustomNotes {...props} />
    },

    {
        widgetName: "ConfirmContractCode",
        widgetFunc: (props) => <ConfirmContractCode {...props} />
    },

    {
        widgetName: "ConfirmIEP",
        widgetFunc: (props) => <ConfirmIEP {...props} />
    },

    {
        widgetName: "StartSEP",
        widgetFunc: (props) => <StartSEP {...props} />
    },

    {
        widgetName: "ConfirmDecision",
        widgetFunc: (props) => <ConfirmDecision {...props} />
    },

    {
        widgetName: "ZipForm",
        widgetFunc: (props) => <ZipForm {...props} />
    },

    {
      widgetName: "DisplayNameForm",
      widgetFunc: (props) => <DisplayNameForm {...props} />
    },
    {
        widgetName: "AgentOptions",
         widgetFunc: (props) => <AgentOptions {...props} />
    },
    {
        widgetName: "GetDOB",
        widgetFunc: (props) => <GetDOB {...props} />
    },
],
}

export default config