class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lc = message.toLowerCase();
      if (lc.includes('hi') || lc.includes('hello') || lc.includes('help') || lc.includes('hey') || lc.includes('whats up') || lc.includes('hlp')) {
        this.actionProvider.greet();
        }

      if(lc.includes('commands')){
        this.actionProvider.displayOptions();
      }
      if(lc.includes('cmd') || lc.includes('cmds')){
        this.actionProvider.displayOptions();
      }

      if(lc.includes('name' || 'names') || (lc.includes('nme'))) {
        this.actionProvider.HandleLinks();
      }

      if(lc.includes('sep')) {
        this.actionProvider.StartSEP();
      }
      if(lc.includes('zip' || 'zipcode')) {
        this.actionProvider.ZipcodeInfo();
      }
      if(lc == 'new note' || lc == 'custom note' || lc == 'new notes' || lc == 'custom notes' || lc.includes('new') || lc.includes('custom')){
        this.actionProvider.CustomNotes();
      }
      if(lc.includes('dob') || lc.includes('birth') || lc.includes('born')){
        this.actionProvider.GetDOB();
      }
      if(lc.includes('review') || lc.includes('save') || lc.includes('rev') || lc.includes('note')) {
        this.actionProvider.ReviewNotes();
      }
      if(lc.includes('mcd') || lc.includes('medicaid')){
        this.actionProvider.QuestionMedicaid();
      }
      if(lc.includes('2') || lc.includes('two')){
        this.actionProvider.IEPTwo();
      }
      if(lc.includes('mov') || lc.includes('move') || lc.includes('rus') || lc.includes('inc') || lc.includes('jail') || lc.includes('prison')) {
        this.actionProvider.MoveSep()
      }
      if(lc.includes('lcc') || lc.includes('losing coverage') || lc.includes('lost coverage') || lc.includes('lec') || lc.includes('employer coverage') || lc.includes('employer') || lc.includes('emp coverage') || lc.includes('ghc')){
        this.actionProvider.LoseCreditCoverage()
      }
      if(lc.includes('ltc') || lc.includes('snf') || lc.includes('long term care') || lc.includes('skilled nursing') || lc.includes('pace') || lc.includes('pac')){
        this.actionProvider.CareDischarge();
      }
      if(lc.includes('chr') || lc.includes('chronic')){
        this.actionProvider.CHRSEP();
      }
      if(lc.includes('list')){
        this.actionProvider.CHRList();
      }
      if (lc.includes('occ') || lc.includes('va') || lc.includes('veteran') || lc.includes('other coverage')){
        this.actionProvider.ConfirmOCC();
      }
      if (lc.includes('dif') || lc.includes('auto-enroll') || lc.includes('autoenroll')){
        this.actionProvider.ConfirmDIF();
      }
      if (lc.includes('iep') || lc.includes('initial')){
        this.actionProvider.QuestionIEP();
      }
      if (lc.includes('icep') || lc.includes('delayed')){
        this.actionProvider.QuestionICEP();
      }
      if(lc.includes('oepn') || lc.includes('oep-n') || lc.includes('new oep')){
        this.actionProvider.QuestionOEPN();
      }
      if (lc.includes('aep') || lc.includes('annual')){
        this.actionProvider.EnterAEP();
      }
      if (lc.includes('clear') || lc.includes('erase') || lc.includes('start over') || lc.includes('restart') || lc == '-'){
        this.actionProvider.ClearData()
      }
      if (lc.includes('add') || lc.includes('more') || lc == 'add note' || lc == 'add notes' || lc == '+'){
        this.actionProvider.AddNotes();
      }
      if(lc == "") {
        alert("Please enter something in the chat. If you need help getting started, type in the word \"Command\" or \"cmd\" to see what I can do!")
      }
      if(lc.includes('doc')){
        this.actionProvider.DoctorForm();
      }
      if(lc.includes('npi')){
        this.actionProvider.SearchNPI();
      }
    }
  }
  
  export default MessageParser