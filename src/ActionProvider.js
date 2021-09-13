

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    
    
    greet() {
    const greetingMessage = this.createChatBotMessage("Nice to meet you!");
    const helpMessage = this.createChatBotMessage('You can give me a variety of commands like \"Get Name\" or \"DOB\" to gather client data..', {delay:1000});
    const helpMessagetwo = this.createChatBotMessage('Enter the word \"Commands\" or \"cmd\" to see a full list of what I can do :-)' ,{delay: 2000})
    this.updateChatbotState(greetingMessage);  
    this.updateChatbotState(helpMessage);
      this.updateChatbotState(helpMessagetwo);
      
    }


/* here, were dlcaring a function HandleLinks, creating a new message 
and including the widget "HandleLinks", after that, we need to update the
state of the bot with the message*/

    HandleLinks = () => {
        const message = this.createChatBotMessage("Okay, Enter the Full Name here.", 
        {
            widget: "DisplayNameForm"
        }, 

    );

    this.updateChatbotState(message);
}

/* here we want to save the name and move on to the zipzode */

    ZipcodeInfo = () => {
        const message = this.createChatBotMessage("Got it! Enter the Zipcode here..",
        {
            widget: "ZipForm"
        }
        );

        this.updateChatbotState(message);
    }


    displayOptions = () => {
        const messagetwo = this.createChatBotMessage("You can say any of these keywords in the chat when you need something...");
         const messagethree = this.createChatBotMessage ('Here\'s a couple to start.', {
            delay:2000,
            widget: "AgentOptions",
          }
         );

        this.updateChatbotState(messagetwo);
        this.updateChatbotState(messagethree);

      };

  GetDOB = () => {
    const message = this.createChatBotMessage("Enter the date of birth here..",
    {
      widget: "GetDOB",
    }
    );

    this.updateChatbotState(message);
  }
    
  ConfirmMedicarePartAandB = () => {
    const message = this.createChatBotMessage("Okay, let me think...");
    const messagetwo =  this.createChatBotMessage("When did they get it? Assuming they got them both at the same time?",
    {
      widget: "ConfirmMedicarePartAandB",
    }
    );
    this.createChatBotMessage(message);
    this.updateChatbotState(messagetwo);
  }

  SaveDateAandB = () => {
    const message = this.createChatBotMessage("Saved! Now do they make their own healthcare decisions?" ,
    {
      widget: "SaveDateAandB"
    }
    );
    this.updateChatbotState(message);
  }

  ConfirmDecision = () => {
    const message = this.createChatBotMessage("Okie Dokie! Does the client have any other insurance other than A and B?" ,
    {
      widget: "ConfirmDecision"
    }
    );
    this.updateChatbotState(message);
  }

    StartSEP = () => {
      const message = this.createChatBotMessage("Alright, Let's ask a couple more questions...");
      const messagetwo = this.createChatBotMessage("Here are some options..",
      {
        delay: 1000,
        widget: "StartSEP"
      }
      );
      this.updateChatbotState(message);
      this.updateChatbotState(messagetwo);
    }

    ConfirmIEP = () => {
      const message = this.createChatBotMessage("Okay, Which one applies to the client?",
      {
        widget: "ConfirmIEP"
      }
      );
      this.updateChatbotState(message);
    }

    ConfirmContractCode = () => {
      const message = this.createChatBotMessage("Almost Done! What's the plan's contract code? Example: Humana Gold Plus H1234-345 HMO",
      {
        widget: "ConfirmContractCode"
      }
      );
      this.updateChatbotState(message);
    }
  
    CustomNotes = () => {
      const message = this.createChatBotMessage("Enter your note here: (Rapport, Phone Number, Why you chose this plan, etc.)",
      {
        widget: "CustomNotes"
      }
      );
      this.updateChatbotState(message);
    }

    CheckRx = () => {
      const message = this.createChatBotMessage("Okay, no problem! Any Prescription drugs?" ,
      {
        widget: "CheckRx"
      }
      );
      this.updateChatbotState(message);
    }

    ReviewNotes = () => {
      const message = this.createChatBotMessage("Okay! Getting everything we talked about... "); 
      const review = this.createChatBotMessage("Got it..." ,
      {
        delay: 1000,
        widget: "ReviewNotes"
      }
      );
      const messagetwo = this.createChatBotMessage("Hope this helps! Ready for more :-)"
      , {delay:3000},
      );
      this.updateChatbotState(message);
      this.updateChatbotState(review);
      this.updateChatbotState(messagetwo);
    }

      QuestionMedicaid = () => {
        const message = this.createChatBotMessage("Okay, When was the last time they used this SEP? Remember to do a MARx check to confirm the effective dates." ,
        {
          widget: "QuestionMedicaid"
        }
      );

      this.updateChatbotState(message);
    }

    IEPTwo = () => {
     const message = this.createChatBotMessage('Okay, I\'ll save this!');
      const messagetwo = this.createChatBotMessage('Enter the effective date of Medicare A and B, then we can move on :-)',
       {
         
        delay:1000,
        widget: "IEPTwo"

       }
    );
    this.updateChatbotState(message);
    this.updateChatbotState(messagetwo);
  }
MoveSep = () => {
  const message = this.createChatBotMessage("Okay, how did it happen? Make sure that they're moving within two months of today or have moved within the last month.",
  {
    delay:500,
    widget:"MoveSep"
  }
  )
  this.updateChatbotState(message);
}
 
LoseCreditCoverage = () => {
  const message = this.createChatBotMessage('Okay, no problem. When did they lose coverage? or when were they notified that they were losing coverage?' ,
  {
    widget: 'LoseCreditCoverage'
  }
  )
  this.updateChatbotState(message);
}

CareDischarge = () => {
  const message = this.createChatBotMessage('Okay, great! When do they plan on leaving? or enter the date if they\'ve already been discharged.' , 
  {
    widget: 'CareDischarge'
  }
  )
  this.updateChatbotState(message);
}
CHRSEP = () => {
  const message = this.createChatBotMessage('Okay, please put a note on which condition they have? enter the word \"List\" for a list of currently supported chronic conditions' , 
  {
    widget: 'CHRSEP'
  })
  this.updateChatbotState(message);
}

CHRList = () => {
  const message = this.createChatBotMessage('Here\'s a list of all currently supported chronic conditions...', 
  {
    widget: 'CHRList'
  })
  this.updateChatbotState(message);
}

ConfirmOCC = () => {
  const message = this.createChatBotMessage('No problem. Please make sure that they ARE NOT in Tri-Care. ChampVA is fine however! Click here to confirm OCC status :-)',
  {
    widget: 'ConfirmOCC'
  })
  this.updateChatbotState(message);
}

ConfirmDIF = () => {
  const message = this.createChatBotMessage('Okay! When were they notified of auto-enrollment?' ,
  {
    widget: 'ConfirmDIF'
  })
  this.updateChatbotState(message);
}

QuestionIEP = () => {
  const message = this.createChatBotMessage('Displayed Below is the client\'s birthday. I will use this to validate IEP eligibility.');
  const messagetwo = this.createChatBotMessage('If you see \'none\' displayed below, just type \'DOB\' and confirm the client\'s birthday.', {delay:1000});
  const messagethree = this.createChatBotMessage('If you dont have it, just type \'MARx\' and we can run a MARX check :-)', 
  {
    delay:2000,
    widget:'QuestionIEP'
  })
  this.updateChatbotState(message);
  this.updateChatbotState(messagetwo);
  this.updateChatbotState(messagethree);
}

QuestionICEP = () => {
  const message = this.createChatBotMessage('Okay, When is their Part B effective date? I will use this to confirm eligibility.',
  {
    widget: 'QuestionICEP'
  })
  this.updateChatbotState(message);
}

QuestionOEPN = () => {
  const message = this.createChatBotMessage('Okay, When did they get their last MA plan? I will use this to confirm eligibility',
  {
    widget: 'QuestionOEPN'
  })
  this.updateChatbotState(message);
}

EnterAEP = () => {
  const message = this.createChatBotMessage('Great! Just hit confirm and we can move on :-)',
  {
    widget: 'EnterAEP'
  })
  this.updateChatbotState(message);
}

ClearData = () => {
  const message = this.createChatBotMessage('Okay, click on the item you want to clear or just simply click \"Clear All Notes\". Make sure you have your notes saved in salesforce!!',
  {
    widget: 'ClearData'
  })
  this.updateChatbotState(message);
}

AddNotes = () => {
  const message = this.createChatBotMessage('Sure! Add your message here.' ,
  {
    widget: 'AddNotes'
  })
  this.updateChatbotState(message);
}

DoctorForm = () => {
  const messageone =  this.createChatBotMessage('Alternatively, If the doctor is not in the Zipcode filled in above, you can just enter in the name and I\'ll look for providers nearby!', {delay:1500});
  const messagetwo = this.createChatBotMessage('Okay, Let\'s find a Doctor! Put in their name to search an existing Doctor, or leave the name blank to find a new doctor :-)' , 
  {
    widget: 'DoctorForm'
  }
  )
 this.updateChatbotState(messagetwo);
  //this.updateChatbotState(messageone);
}

SearchNPI = () => {
  const message = this.createChatBotMessage('Enter the NPI below to get provider details and save them to your notes!' ,
  {
    widget: 'SearchNPI'
  })

  this.updateChatbotState(message);
}  /*NOTE: DO NOT FORGET TO UPDATE THE STATE OF THE BOT WITH THE MESSAGE. FOR THE LOVE OF CHRIST */

    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in     
   // from the top level Chatbot component. The setState function here   
     // actually manipulates the top level state of the Chatbot, so it's    
      // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider;