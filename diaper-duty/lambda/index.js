var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to Diaper Duty!', "Try saying I've Changed the Baby");
  },
  
  'Change': function () {
    this.emit(':tell', "Ok, I've recorded that the baby has been changed!" )
  }

};
