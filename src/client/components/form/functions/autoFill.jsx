const autoFill = (sender, options, autoFillFields) => {
    var questions = sender.getAllQuestions();
    if (autoFillFields.includes(options.name) && sender.getVariable(options.name) != 'bypass') {
      autoFillFields.map((field) => { sender.setVariable(field, 'bypass') });
      questions.map((question) => {
        var value;
        for (var i in this.state.data) {
          var row = this.state.data[i];
          if (row[options.name] == options.value) {
            value = row;
          }
        }
        if (question.propertyHash.name == 'cases_not_resolved') {
          value[question.propertyHash.name] = JSON.parse(value[question.propertyHash.name])
        }
          sender.setValue(question.propertyHash.name, value[question.propertyHash.name]); 
      })
    }
    autoFillFields.map((field) => { sender.setVariable(field, '') });
  };

export default autoFill;