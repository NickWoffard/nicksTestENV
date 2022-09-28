const AutoFillForm = function (sender, options, autoFillFields) {
    
    var questions = sender.getAllQuestions();
    if (autoFillFields.includes(options.name) && sender.getVariable(options.name) != 'bypass') {
      autoFillFields.map((field) => { sender.setVariable(field, 'bypass') });
      questions.map((question) => {
        if (question.propertyHash.name != options.name) { sender.setValue(question.propertyHash.name, options.value.data[question.propertyHash.name]) }
      })
    }
    autoFillFields.map((field) => { sender.setVariable(field, '') });
  };

export { AutoFillForm }